import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Inicio/Carousel";
import Cards from "../components/Inicio/Cards";
import Contents from "../components/Inicio/Contents";
import Testimonios from "../components/Testimonios";


function Inicio() {
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

export default Inicio;