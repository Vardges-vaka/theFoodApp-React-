import React from "react";
import Footer from "./sharedComponents/footer";
import Header from "./sharedComponents/header";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import NewFoodModal from "./newFoodModal";
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Admin() {
  const [food, setFood] = useState([]);
  const [ShowFoodModal, setShowFoodModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  let fetchFood = async () => {
    let result = await fetch("http://localhost:4000/api/food/list");
    let data = await result.json();
    setFood(data.data);
  };
  let addFood = async () => {
    // create formData
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("category", category);
    // send the fromData to the create food api
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    await fetch("http://localhost:4000/api/food/add", requestOptions)
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setShowFoodModal(false);
          fetchFood();
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div>
      <Header />
      <div className="mx-4">
        <Button onClick={() => setShowFoodModal(true)} className="mx-4">
          New Item
        </Button>
        <table className="table">
          <thead className="thead-dark ">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {food.map((item, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />

      <Modal show={ShowFoodModal} onHide={() => setShowFoodModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewFoodModal
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            setImage={setImage}
            addFood={addFood}
            category={category}
            setCategory={setCategory}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFoodModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admin;
