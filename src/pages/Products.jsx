import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Banner } from "../assets/img";
import ProductsSection from "../components/ProductsSection";

function ProductsPage() {
  return (
    <>
      <Header activeLink={`products`} />
      <img src={Banner} className={`w-full aspect-video`} />
      <ProductsSection />

      <Footer />
    </>
  );
}

export default ProductsPage;
