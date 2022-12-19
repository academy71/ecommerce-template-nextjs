import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Category from "../Sections/Home/category/Category";
import Features3 from "../Sections/Home/Features3/Features3";
import Hero from "../Sections/Home/Hero/Hero";
import Testimonial from "../Sections/Home/Testimonial/Testimonial";
import Features2 from "./../Sections/Home/Features2/Features2";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Features2 />
      <Features3 />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
