import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      <Header activePage={activePage} />
      <MainSection />
      <FeaturesSection />
    </>
  );
}

export default App;
