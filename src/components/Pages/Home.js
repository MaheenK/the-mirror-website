import "../../App.css";
// import mainSection from "../mainSection";
import React from "react";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      {/* <mainSection /> */}
    </>
  );
}

export default Home;
