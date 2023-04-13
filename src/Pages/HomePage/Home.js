import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BannerSlider from "../../components/banners/BannerSlider";
import HomeCategories from "../../components/category/HomeCategories";
import Product_sidebars from "../../components/Products/Product_sidebars";
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer/Footer2";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <Product_sidebars/>
      <Footer/>
      <Footer2/>
    </div>
  );
};

export default Home;
