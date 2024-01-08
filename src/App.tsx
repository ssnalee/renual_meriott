import React, { useEffect, useRef, useState } from "react";
import {Routes , Route } from "react-router-dom";
import styled from "styled-components";
// import './App.css';
import { motion, useAnimation , useScroll} from "framer-motion";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Gallery from "./Routes/Gallery";
// import logo from "./public/image/logo.webp";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} /> 
        <Route path="/gallery" element = {<Gallery />} /> 
      </Routes>
    </div>
  );
}

export default App;
