// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  function toogleAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  function toogleMode() {
    if (mode === "light") {
      setMode("dark");
      setToogleText("Enable Light Mode");
      document.body.style.backgroundColor = "Gray";
      document.body.style.color = "white";
      toogleAlert("Dark Mode is Enabled", "success");
      document.title = "Text Utils - Dark Mode ";
    } else {
      setMode("light");
      setToogleText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      toogleAlert("Light Mode is Enabled", "success");
      document.title = "Text Utils - Light Mode ";
    }
  }
  const [mode, setMode] = useState("light"); // tell wheather dark mode is enabled or not
  const [toogleText, setToogleText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  return (
    <>
      <Navbar
        title="text-Utils"
        aboutText="About text-Utils"
        Mode={mode}
        toogleMode={toogleMode}
        toogleText={toogleText}
      />
      <Alert alert={alert} />

      <div className="container my -3">
        {/* <Router>
          <Routes>
            <Route
              path="/"
              element={<TextForm
                heading="Enter the the Text to analyze bellow :"
                Mode={mode}
                toogleAlert={toogleAlert}
              />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes> */}
        {/* </Router> */}
        {/* <About /> */}
        <TextForm
          heading="Enter the the Text to analyze bellow :"
          Mode={mode}
          toogleAlert={toogleAlert}
        />
      </div>
    </>
  );
}

export default App;
