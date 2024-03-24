import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from "./components/Card";
import "./style.css";
import arrPageInfo from "./data";


function App() {

  const cards = arrPageInfo.map(item => {
    return <Card key={item.id} img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            prise={item.price}/>
  });

  return (
    <>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
        {cards}
      </section>

    </>
  );
}

export default App;

