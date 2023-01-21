import React from "react";
import Header from "./../Components/Header/Header";
import NewsLetter from "./../Components/NewsLetter/NewsLetter";
import Footer from "./../Components/Footer/Footer";
import AllProductsSection from "../Sections/AllProducts/AllProductsSection";

const All_products = () => {
  return (
    <>
      <Header />
      <AllProductsSection />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default All_products;
