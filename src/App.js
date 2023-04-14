import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Contents from "./components/Contents"
import Testimonios from "./components/Testimonios";

function App() {
  return (
    <div >
      <Navbar/>
      <Carousel/>
      <Cards/>
      <Contents/>
      <Testimonios/>
      <Footer/>
   
    </div>
  );
}

export default App;
