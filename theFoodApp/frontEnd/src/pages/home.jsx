import React, { useState, Profiler, Suspense } from "react";
import "./styling/home.css";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import CopyRight from "./sharedComponents/copyRight";
import AppSection from "./sharedComponents/appSection";
import useFoodList from "../hooks/foodList";
import HomeHeader from "./homeHeader";
import HomeFilter from "./HomeFilter";
import FoodCard from "./sharedComponents/FoodCard";
import { Modal, Button } from "react-bootstrap";
import Login from "./login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LazyFooter = React.lazy(() => import("./sharedComponents/footer"));

function Home() {
  const { data, isLoading } = useFoodList();
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(true);

  // const { isLogin, isLoading } = useFoodList();
  console.log(data, isLoading);
  const [category, setCategory] = useState("All");
  const callOnRender = (id, phase, actualDuration, startTime) => {
    console.log(id, phase, actualDuration, startTime, "profile");
  };
  const [showLogin, setShowLogin] = useState(true);
  const notify = () => toast("Login successfully");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const login = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let result = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      let data = await result.json();
      if (data.success) {
        setShowToast(true);
        localStorage.setItem("token", data.token);
        setShow(false);
      }
    } catch (error) {
      console.log(error);
      alert("Someting wrong happend");
    }
  };

  const register = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let result = await fetch("http://localhost:4000/api/user/register", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      let data = await result.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        setShow(false);
      }
    } catch (error) {
      console.log(error);
      alert("Someting wrong happend");
    }
  };
  return (
    <>
      <HomeHeader setCategory={setCategory} />
      <div class="main-layout">
        <HomeFilter />
        <section>
          <p class="places-text">
            <span class="color-main">{data.length}</span> Places to Order
            {showToast ? "show toast" : "Do not show"}
          </p>
          <div class="search-container">
            <img src="./images/fi-rr-search.svg" />
            <input type="text" />
          </div>
          <div class="cards-container">
            {/* <!-- food card --> */}
            {data.map((item) => {
              if (category == "All" || category == item.category) {
                return (
                  <FoodCard
                    data={item}
                    isLoading={isLoading}
                    setShow={setShow}
                  />
                );
              }
            })}
          </div>
        </section>
      </div>

      <Header />
      <AppSection />
      <Suspense fallback={() => <div>Loading the footer!!!</div>}>
        <LazyFooter />
      </Suspense>
      <CopyRight />

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login
            notify={notify}
            setShow={setShow}
            setShowToast={setShowToast}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Home;
