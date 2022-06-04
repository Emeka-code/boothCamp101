import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Body from "./Components/Body/Body";
import Collection from "./Components/Collection/Collection";
import Footer from "./Components/footer/Footer";
import SignIn from "./Components/Header/SignIn";
import SignUp from "./Components/Header/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
