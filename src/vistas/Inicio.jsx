import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Carousel from "../components/Inicio/Carousel";
import Cards from "../components/Inicio/Cards";
import Contents from "../components/Inicio/Contents";

function Inicio() {
  return (
    <div >
       <Navbar/>
       <Carousel/>
       <Cards/>
       <Contents/>
       
       <Footer/>
    </div>
  );
}

export default Inicio;