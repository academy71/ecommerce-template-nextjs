import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Category from "../Sections/Home/category/Category";
import Hero from "../Sections/Home/Hero/Hero";
import Features2 from "./../Sections/Home/Features2/Features2";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Features2 />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
