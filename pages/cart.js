import Head from "next/head";
import React from "react";
import Header from "../Components/Header/Header";
import CartSection from "../Sections/CartSection/CartSection";
import Footer from "./../Components/Footer/Footer";
import NewsLetter from "./../Components/NewsLetter/NewsLetter";

const CartPage = () => {
  return (
    <div>
      <Head>
        <title>Cart Page</title>
      </Head>

      <Header />
      <CartSection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CartPage;
