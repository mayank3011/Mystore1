import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BannerSlider from "../../components/banners/BannerSlider";
import HomeCategories from "../../components/category/HomeCategories";
import Product_sidebars from "../../components/Products/Product_sidebars";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <Product_sidebars/>
    </div>
  );
};

export default Home;
