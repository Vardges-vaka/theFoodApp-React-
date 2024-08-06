import React from "react";
import { foodData } from "../assets/hardCoddedApi";
import "./styling/headerhome.css";
function HeaderHome({ setCategoryFilter }) {
  return (
    <>
      <header>
        {/* <img src="./images/header-bg-1.png" /> */}
        <div className="dishs-container">
          {foodData.map((item) => (
            <div
              key={item.id}
              onClick={() => setCategoryFilter(item.CategoryName)} /* FIXME: */
              className={`food-dish ${item.CategoryStyle}`}>
              <img src={item.CategoryIcon} />
              <p>{item.CategoryName}</p>
            </div>
          ))}
        </div>
      </header>
    </>
  );
}

export default HeaderHome;
