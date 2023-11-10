import "./styles.css";
import "./App.css";
import Main from "./components/Main";
import Single from "./components/Single";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
export default function App() {
  // const [mode, setMode] = useState(
  //   localStorage.getItem("color") === "null"
  //     ? "light"
  //     : localStorage.getItem("color")
  // );

  // useEffect(() => {
  //   console.log(mode);
  //   localStorage.setItem("color", mode);
  // });

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  return (
    // <ThemeProvider theme={darkTheme}>
    <div
      className="App"
      // style={{
      //   background:
      //     mode === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
      // }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main
              // setMode={setMode} mode={mode}
              />
            }
          />
          <Route
            path="/:code"
            element={
              <Single
              //  setMode={setMode} mode={mode}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
    // </ThemeProvider>
  );
}
