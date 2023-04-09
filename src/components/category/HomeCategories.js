import React from "react";
import "./HomeCategories.css";
import Image1 from "../../ASSETS/images/image1.png";
const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={Image1} alt="img1" />
        <div className="content">
          <h1>Books At your Door Step</h1>
          <p>Shop your favourite books Now</p>
        </div>
      </div>
      <div className="container">
        <img src={Image1} alt="img1" />
        <div className="content">
          <h1>This is an H1 Tag</h1>
          <p>this is an paragraph</p>
        </div>
      </div>
      <div className="container">
        <img src={Image1} alt="img1" />
        <div className="content">
          <h1>This is an H1 Tag</h1>
          <p>this is an paragraph</p>
        </div>
      </div>
      <div className="container">
        <img src={Image1} alt="img1" />
        <div className="content">
          <h1>This is an H1 Tag</h1>
          <p>this is an paragraph</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
