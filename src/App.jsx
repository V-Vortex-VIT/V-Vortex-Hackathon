import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/home";

import "./styles/design-tokens.css";
import "./styles/animations.css";
import "./styles/custom-cursor.css";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [transition, setTransition] = useState(null);

  return (
    <BrowserRouter>
      <CustomCursor />
      {transition}

      {!introDone ? (
        <Preloader onFinished={() => setIntroDone(true)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home setTransition={setTransition} />} />
          <Route path="*" element={<Home setTransition={setTransition} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
