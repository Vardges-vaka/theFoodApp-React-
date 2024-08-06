import React, { useState } from "react";

// import { foodData } from "../assets/hardCoddedApi";
// const [data, setData] = useState(foodData);

function FoodCardsHome({ data }) {
  return (
    <div className="card">
      <div className="food-card">
        <div className="img-container">
          <img
            className="food-img"
            src={data.RestaurantSampleImage}
            alt="sushi card"
          />
          {/* <img
            className="heart-icon"
            src="./images/heart-icon.svg"
            alt="heart icon"
          /> */}
        </div>

        <div className="text-container">
          <div className="restaurant-logo">
            <img src={data.RestaurantLogo} alt="restaurant logo" />
          </div>

          <div className="card-info">
            <div>
              <p className="card-info-head">{data.RestaurantName}</p>
              <div className="review-text card-info-text">
                {/* <img src="./images/fi-sr-star.svg" alt="star icon" /> */}
                <span className="rating-text">{data.RestaurantRating}</span>
                {/* <img src="./images/dot.svg" alt="dot icon" /> */}
                <p>{data.RestaurantReviews} + reviews</p>
              </div>
              <p>{data.RestaurantDescription}</p>
            </div>
            <div className="delivery-text green-bg">
              {data.RestaurantDeliveryInfo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCardsHome;
