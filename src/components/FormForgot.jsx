import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function FormForgot() {
  const datosForm = {
    emailRecuperar: ""
  };
  //estadoo inicial de alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false
  };
  //manejar valores del form
  const[formulario, setFormulario] = useState(datosForm);
  //estado para manejar alertas de validacion
  const [alerta, setAlerta] = useState([initialStateInput]);
  //funcion para obtener inputs
  const ManejarEventoInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormulario({...formulario,[name]:value});
  };
  const handleRecuperar = (e) => {
    //previene el comportamiento por defecto que trae el evento
    e.preventDefault();
    //orden de datos para enviar validacion
    let verificarInputs = [
      {nombre: "email", value: formulario.emailRecuperar}
    ];
    const datosValidados = validarInputs(verificarInputs);
     //enviar las validaciones al estado que se va encargar de mostrar el formulario
    setAlerta(datosValidados);
    //obtener el total de validaciones
    const totalValidaciones = datosValidados.filter(input => input.estado === false).map
   ((estado) => {return false});
   console.log("total de validaciones ", totalValidaciones.length);
   //validacion para enviar datos al servidor
   if(totalValidaciones.length >=1){
    console.log("Enviar al servidor");
   }
  }
  const validarInputs = (data) => {
    console.log(data);
    let errors = [];
    const datosDelFormulario = data;
    datosDelFormulario.map((valorInput) => {
      switch(valorInput.nombre){
        case 'email': {
          if(valorInput.value === '' || valorInput.value === null){
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: 'Campo requerido',
              estado: true
            })
          }else{
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: '',
              estado: false
            })
          }
          break;
        }
        default: {
          break;
        }
      }
    });
    return errors;
  }
  return (
    <div>
      <div>
        <Navbar/>
        <div class="flex flex-col justify-center items-center h-screen bg-gradient-to-t  from-blue-700 via-blue-500 to-sky-500">
        <header class="max-w-lg mx-auto mt-4">
          <h1 class="text-4xl font-bold text-aFuerte text-center">Learn+</h1>
        </header>
        <main class="bg-bCasi max-w-lg mx-auto w-10/12 p-8 md:p-12 my-4 rounded-lg shadow-2xl">
          <section class="">
            <form onSubmit={handleRecuperar} class="flex flex-col" method="POST" action="#">
            <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-8  md:mt-0 ">
              <h1 class="font-semibold text-2xl text-aFuerte m-4">Recuperar Contraseña</h1>
            </div>
            <div class="w-full">
                <input
                name="emailRecuperar"
                value={formulario.emailRecuperar} onChange={ManejarEventoInputs}
                type="email"
                  placeholder="Email"
                  class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                />
              {
                alerta.filter(input => input.valorInput === 'email' && input.estado === true).map(message => (
                  <div>
                    <span className="text-red-500">{message.mensaje}</span>
                  </div>
                ))
              }
             
              </div>
              <input
                class="bg-aFuerte2 hover:bg-aFuerte3 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
                value="Resetear Contraseña"
              />
               <div class="text-center my-2 flex flex-col">
            <Link
              to={'/login'}
              class="text-md font-medium text-gray-400 hover:text-aFuerte3  m-1"
            >
             Iniciar Sesión
            </Link>
            </div>
            </form>
          </section>
        </main>
          <div class="text-center my-6 flex flex-col">
          
            <Link
               to="/registro"
              class="text-sm font-bold text-gray-50 hover:text-aFuerte3 m-1"
            >
              ¿No eres Usuario? Crear una cuenta
            </Link>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}


export default FormForgot;