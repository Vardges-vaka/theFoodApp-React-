import React from "react";
import { Button } from "react-bootstrap";
function NewFoodModal({
  name,
  description,
  price,
  setName,
  setDescription,
  setPrice,
  setImage,
  addFood,
  category,
  setCategory,
}) {
  return (
    <form>
      <label>Name</label>
      <input
        value={name}
        class="form-control my-4"
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label>Descripton</label>
      <input
        value={description}
        class="form-control my-4"
        onChange={(e) => setDescription(e.target.value)}
        type="text"
      />
      <label>Price</label>
      <input
        value={price}
        class="form-control my-4"
        onChange={(e) => setPrice(e.target.value)}
        type="text"
      />
      <label>Category</label>
      <input
        value={category}
        class="form-control my-4"
        onChange={(e) => setCategory(e.target.value)}
        type="text"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        class="custom-file-input my-4"
      />
      <label class="custom-file-label" for="inputGroupFile02">
        Choose file
      </label>

      <Button className="my-4" onClick={addFood}>
        Add Food
      </Button>
    </form>
  );
}

export default NewFoodModal;
