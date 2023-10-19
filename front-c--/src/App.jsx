import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp"
import "./styles/styles.css"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster />
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/log-in" element={<LogIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App
