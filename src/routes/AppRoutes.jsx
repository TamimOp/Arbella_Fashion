import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import WhyChooseArbella from "../pages/WhyChooseArbella/WhyChooseArbella";
import Factory from "../pages/Factory/Factory";
import Sustainability from "../pages/Sustainability/Sustainability";
import Community from "../pages/Community/Community";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/why-choose-arbella" element={<WhyChooseArbella />} />
      <Route path="/our-factory" element={<Factory />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/community" element={<Community />} />
      <Route path="/contact-us" element={<Contact />} />

      <Route
        path="*"
        element={
          <h1 className="text-center py-20 text-2xl">404 - Page Not Found</h1>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
