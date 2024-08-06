import React from "react";
import FilterHome from "./filterHome";
import FoodCardsHome from "./foodCardsHome";
// import "./styling/mainLayoutHome.css";
function MainLayoutHome() {
  return (
    <div className="main-layout">
      <FilterHome />
      <FoodCardsHome />
    </div>
  );
}
export default MainLayoutHome;
