import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <>
      <Navbar setActivePage={setActivePage} />
      <Header activePage={activePage} />
    </>
  );
}

export default App;
