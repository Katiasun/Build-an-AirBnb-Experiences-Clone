import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from "./components/Card";
import "./style.css";
import swimmer from "./imgs/swimmer.png";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Card img = {swimmer}
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            prise={136}/>
    </>
  );
}

export default App;

