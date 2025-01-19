import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Testimonials from "./sections/Testimonials";
import Downloads from "./sections/Downloads";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />  
      <Pricing />
      <FAQ />
      <Testimonials />
      <Downloads />
    </main>
  );
};

export default App;
