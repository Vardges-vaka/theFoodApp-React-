import React from "react";
import Rest_Log from "../../assets/Images/logo-holder.png";
import Star_Iicon from "../../assets/Images/star.svg";
import ImgPlaceholder from "../../assets/Images/placeholder.png";

function FoodCard({ data, setShow, isLoading }) {
  return (
    // <div class="card">
    <div class="food-card">
      <div class="img-container">
        <img
          className="food-img"
          src={`http://localhost:4000/images/${data.image}`}
          alt="sushi card"
        />
        <div
          className="btn"
          onClick={() => {
            isLoading ? () => {} : setShow(true);
          }}
        >
          +
        </div>
        {/* <img
            class="heart-icon"
            src="./images/heart-icon.svg"
            alt="heart icon"
          /> */}
      </div>

      <div class="text-container">
        <div class="restaurant-logo">
          <img src={Rest_Log} />
        </div>

        <div class="card-info">
          <div>
            <p class="card-info-head">{data.name}</p>
            <div class="review-text card-info-text">
              <img src={Star_Iicon} alt="star icon" />
              <span class="rating-text">4.8</span>
              {/* <img src="./images/dot.svg" alt="dot icon" /> */}
              <p>1024 + reviews</p>
            </div>
            <p>Sushi, Sea food</p>
          </div>
          <div class="delivery-text green-bg">Free Delivery</div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default FoodCard;
