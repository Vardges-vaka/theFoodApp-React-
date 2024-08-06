import React from "react";

function HomeHeader() {
  return (
    <header>
      <img src="./images/header-bg-1.png" />
      <div class="dishs-container">
        {/* dish-item */}
        <div class="food-dish bg-orange">
          <img src="./images/dish_!.png" />
          <p>Fast Food</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-orange-light">
          <img src="./images/dish_2.png" />
          <p>Kebab</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-yellow">
          <img src="./images/dish_3.png" />
          <p>Italian</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-orange">
          <img src="./images/dish_4.png" />
          <p>Indian</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-yellow">
          <img src="./images/dish_5.png" />
          <p>Sea Food</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-orange-light">
          <img src="./images/dish_6.png" />
          <p>Vegan</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-orange">
          <img src="./images/dish_7.png" />
          <p>Udon</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-yellow">
          <img src="./images/dish_8.png" />
          <p>Tempura</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-orange-light">
          <img src="./images/dish_9.png" />
          <p>Donburi</p>
        </div>
        {/* <!-- dish-item --> */}
        <div class="food-dish bg-orange">
          <img src="./images/browse-more.svg" />
          <p>Browse More</p>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
