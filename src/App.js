import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pressroom from "./Pressroom";
import Experience from "./Experience";
import Contact from "./Contact";
import Solutions from "./Solutions";
import BrandStrategy from "./components/Solutions/BrandStrategy";
import CND from "./components/Solutions/CND";
import MarketResearch from "./components/Solutions/MarketResearch";
import Regulatory from "./components/Solutions/Regulatory";
import TradeMark from "./components/Solutions/TradeMark";
import VisualIdentity from "./components/Solutions/VisualIdentity";
import Home from "./Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About/About";

function App() {
  const [Switch, setSwitch] = useState(true);
  const toggle = () => {
    setSwitch(!Switch);
  };

  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 1000);
  }

  return (
    !loading && (
      <BrowserRouter>
        <NavBar setMove={setSwitch} logoSwitch={Switch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="About"
            element={<About toggle={toggle} move={Switch} />}
          />
          <Route path="Experience" element={<Experience />} />
          <Route path="Solutions" element={<Solutions />}>
            <Route index element={<BrandStrategy />} />
            <Route path="BrandStrategy" element={<BrandStrategy />} />
            <Route path="CND" element={<CND />} />
            <Route path="MarketResearch" element={<MarketResearch />} />
            <Route path="Regulatory" element={<Regulatory />} />
            <Route path="TradeMark" element={<TradeMark />} />
            <Route path="VisualIdentity" element={<VisualIdentity />} />
          </Route>
          <Route path="Pressroom" element={<Pressroom />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  );
}

export default App;
