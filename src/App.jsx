import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
