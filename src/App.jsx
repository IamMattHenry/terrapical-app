import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Index from "./components/Index";
import Care from "./components/Care";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const routeToPageMap = {
      "/": "Home",
      "/index": "Index",
      "/care": "Care",
      "/about": "About",
      "/contact": "Contact",
    };
    setActivePage(routeToPageMap[location.pathname] || "Home");
  }, [location]);

  return (
    <>
      <Navbar />
      <Header activePage={activePage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/care" element={<Care />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
