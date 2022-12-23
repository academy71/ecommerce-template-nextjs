import Head from "next/head";
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import ProductDetails from "../Sections/ProductDetails/ProductDetails";

const ProductsDetails = () => {
  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>

      {/* Sections */}
      <Header />
      <ProductDetails />

      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductsDetails;
