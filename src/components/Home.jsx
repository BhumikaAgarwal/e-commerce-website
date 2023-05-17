import React from "react";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Products from "./Products";
import Slider from "./Slider";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      {/* <Products></Products> */}
    </div>
  );
};

export default Home;
