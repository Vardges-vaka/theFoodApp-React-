import React, { useState, Profiler, Suspense } from "react";
import "./styling/home.css";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import CopyRight from "./sharedComponents/copyRight";
import AppSection from "./sharedComponents/appSection";

import FilterHome from "./filterHome";
import FoodCardsHome from "./foodCardsHome";
import HeaderHome from "./headerHome";

import { foodData } from "../assets/hardCoddedApi.js";


// const [raitingFilter, setRaitingFilter] = useState("ALL");
// const [statusFilter, setStatusFilter] = useState("ALL");
// import MainLayoutHome from "./mainLayoutHome";
// import useFoodlist from "../hooks/foodList";
function Home() {
  const [data, setData] = useState(foodData);
  const [deliveryFilter, setDeliveryFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  return (
    <>
      {/* {" "} */}
      <Header />
      <HeaderHome setCategoryFilter={setCategoryFilter}  />
      <div className="main-layout">
        <FilterHome setDeliveryFilter={setDeliveryFilter} setCategoryFilter={setCategoryFilter}  />
        <section>
          <p className="places-text">
            <span className="color-main">{data.length}</span> Places to Order
          </p>
          <div className="search-container">
            {/* <img src="./images/fi-rr-search.svg" /> */}
            <input type="text" />
          </div>
          {/* {category + "this the category!!!"} */}
          <div className="cards-container">
            {/* <!-- food card --> */}
            {data.map((item) => {
              if (
(                categoryFilter === "ALL" ||
                categoryFilter === item.CategoryName) &&
(                deliveryFilter.length === 0 ||
                deliveryFilter.includes(item.RestaurantDeliveryInfo))
                // (categoryFilter === "ALL" ||
                //   categoryFilter == item.CategoryName) &&
                // (deliveryFilter == "ALL" ||
                //   deliveryFilter == item.RestaurantDeliveryInfo)
              ) {
                return <FoodCardsHome key={item.id} data={item} />;
              }
            })}
          </div>
        </section>
      </div>
      <AppSection />
      <Footer />
      <CopyRight />
    </>
  );
}

export default Home;
