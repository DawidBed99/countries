import "./styles.css";
import "./App.css";
import Main from "./components/Main";
import Single from "./components/Single";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
export default function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("color") === "null"
      ? "light"
      : localStorage.getItem("color")
  );

  useEffect(() => {
    console.log(mode);
    localStorage.setItem("color", mode);
  });

  return (
    <div
      className="App"
      style={{
        background: mode === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/countries/"
            element={<Main setMode={setMode} mode={mode} />}
          />
          <Route
            path="/countries/:code"
            element={<Single setMode={setMode} mode={mode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
