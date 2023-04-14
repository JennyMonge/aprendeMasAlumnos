import React from "react";
import Navbar from "../components/Navbar";
import FormLogin from "../components/FormLogin";
import Footer from "../components/Footer";


function Login() {
  return (
    <div>
      <div class=" min-h-screen bg-cover bg-center bg-no-repeat">
        <Navbar/>
        <FormLogin/>
        <Footer/>
      </div>
    </div>
  );
}

export default Login;