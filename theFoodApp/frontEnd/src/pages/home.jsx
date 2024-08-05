import React from "react";
import "./styling/home.css";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import CopyRight from "./sharedComponents/copyRight";
import AppSection from "./sharedComponents/appSection";

function Home() {
  return (
    <>
      {" "}
      <Header />
      <div>
        <h1 className="placeholder">Home</h1>
      </div>
      <AppSection />
      <Footer />
      <CopyRight />
    </>
  );
}

export default Home;
