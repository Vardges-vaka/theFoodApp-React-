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
const LazyFooter = React.lazy(() => import("./sharedComponents/footer"));

function Home() {
  const { data, isLoading } = useFoodList();
  console.log(data, isLoading);
  const [category, setCategory] = useState("All");
  const callOnRender = (id, phase, actualDuration, startTime) => {
    console.log(id, phase, actualDuration, startTime, "profile");
  };

  return (
    <>
      <Profiler id="home" onRender={callOnRender}>
        {/* {!isLoading && data.map((food) => <div>{food.name}</div>)} */}
        <HomeHeader setCategory={setCategory} />
        <div class="main-layout">
          <HomeFilter />
          <section>
            <p class="places-text">
              <span class="color-main">2840</span> Places to Order
            </p>
            <div class="search-container">
              <img src="./images/fi-rr-search.svg" />
              <input type="text" />
            </div>
            {category + "this the category!!!"}
            <div class="cards-container">
              {/* <!-- food card --> */}
              {data.map((item) => {
                if (category == "All" || category == item.category) {
                  return <FoodCard data={item} />;
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
      </Profiler>
    </>
  );
}

export default Home;
