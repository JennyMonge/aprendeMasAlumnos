import React from "react";
import Navbar from "../components/Navbar";
import FormRegister from "../components/FormRegister";
import Footer from "../components/Footer";


function Registro() {
  return (
    <div>
      <div class=" min-h-screen bg-cover bg-center bg-no-repeat">
        <Navbar />
        <FormRegister/>
        <Footer/>
      </div>
    </div>
  );
}

export default Registro;
