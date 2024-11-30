import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState } from "react";
import MainSection from "./components/MainSection";

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      <Header activePage={activePage} />
      <MainSection />
    </>
  );
}

export default App;
