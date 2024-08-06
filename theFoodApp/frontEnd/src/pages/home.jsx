import React, { useState, Profiler } from "react";
import "./styling/home.css";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import CopyRight from "./sharedComponents/copyRight";
import AppSection from "./sharedComponents/appSection";
import useFoodList from "../hooks/foodList";
function Home() {
  const { data, isLoading } = useFoodList();
  console.log(data, isLoading);

  const callOnRender = (id, phase, actualDuration, startTime) => {
    console.log(id, phase, actualDuration, startTime, "profile");
  };

  return (
    <>
      <Profiler id="home" onRender={callOnRender}>
        {!isLoading && data.map((food) => <div>{food.name}</div>)}
        <Header />
        <AppSection />
        <Footer />
        <CopyRight />
      </Profiler>
    </>
  );
}

export default Home;
