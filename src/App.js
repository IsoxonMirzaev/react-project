import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {
  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setState(!state);
  };
  return (
    <>
      <div className="bg-black pb-10">
        <Navbar toggleMenu={toggleMenu} />
        <Header toggleMenu={toggleMenu} state={state} />
      </div>
    </>
  );
}
