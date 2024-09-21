import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Product from "./components/Product";
import StoreIntegration from "./components/StoreIntegration";
import Testimonials from "./components/testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Product />
      <StoreIntegration />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
