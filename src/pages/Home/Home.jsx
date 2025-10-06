import React from "react";
import Hero from "./components/Hero";
import Factory from "./components/Factory";
import ProductVarient from "./components/ProductVarient";
import ShortStory from "./components/ShortStory";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductVarient />
      <Factory />
      <ShortStory />
    </div>
  );
};

export default Home;
