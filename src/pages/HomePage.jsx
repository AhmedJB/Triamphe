import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Qualities from "../components/Qualities";
import Marks from "../components/Marks";
import HomeProduct from "../components/HomeProduct";
import Description from "../components/Description";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header activeLink={`accueil`} />
      <Hero />
      <About />
      <Qualities />
      <Marks />
      <HomeProduct />
      <Description />
      <Footer />
    </>
  );
}

export default HomePage;
