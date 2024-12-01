import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Index from "./components/Index";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const routeToPageMap = {
      "/": "Home",
      "/index": "Index",
      "/about": "About",
      "/contact": "Contact",
      "/signin": "Signin",
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
