import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [mode2, setMode2] = useState("primary");

  const [alert, setAlert] = useState(null);

  let darkBool, blueBool, greenBool, redBool;

  const color = (value) => {
    if (value === "blue") {
      blueBool = true;
      toggleMode();
    }
    else if (value === "green") {
      greenBool = true;
      toggleMode();
    }
    else if (value === "red") {
      redBool = true;
      toggleMode();
    }
    else if (value === "dark") {
      darkBool = true;
      toggleMode();
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light" && !darkBool && !blueBool && !greenBool && !redBool) {
      setMode("dark");
      setMode2("primary");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    }

    else if (mode === "dark" && blueBool) {
      setMode2("dark");
      document.body.style.backgroundColor = "#073a8c";
      blueBool = false;
      showAlert("Blue Dark Mode has been enabled", "success");
    }

    else if (mode === "dark" && greenBool) {
      setMode2("dark");
      document.body.style.backgroundColor = "#046b08";
      greenBool = false;
      showAlert("Green Dark Mode has been enabled", "danger");
    }


    else if (mode === "dark" && redBool) {
      setMode2("dark");
      document.body.style.backgroundColor = "#870303";
      redBool = false;
      showAlert("Red Dark Mode has been enabled", "success");
    }

    else if (mode === "dark" && darkBool) {
      setMode2("primary");
      document.body.style.backgroundColor = "black";
      darkBool = false;
      showAlert("Dark Mode has been enabled", "success");
    }

    else if (mode === "light" && (darkBool || greenBool || blueBool || redBool)) {
      darkBool = false;
      greenBool = false;
      blueBool = false;
      redBool = false;
    }

    else {
      setMode("light");
      setMode2("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <BrowserRouter>
      <Navbar title="TextWorker" color={color} link="About" modeValue={mode} tMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route exact path="/">
          <Route index element={<TextForm title="Enter the text to analyse" modeValue={mode} mode2={mode2} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;