import React, { useState } from "react";
import { Link } from "react-router-dom";
function FormLogin() {
  const datosForm = {
    nieLogin: "",
    contraLogin: ""
  };
  //estado inicial de alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false
  };
  //manejar valores del form
  const[formulario, setFormulario] = useState(datosForm);
  //Estado para manejar las alertas de validadcion
  const [alerta, setAlerta] = useState([initialStateInput]);
  //funcion para obtener los inputs
  const ManejarEventoInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormulario({...formulario,[name]:value});
  };
  const handleLogin = (e) => {
    e.preventDefault();//previene el comportamiento por defecto que trae consigo el evento
    //orden de datos para enviar a validacion
    let verficarInputs = [
      {nombre: "nie", value: formulario.nieLogin},
      {nombre: "contra", value:formulario.contraLogin}
    ];
    const datosValidados = validarInputs(verficarInputs);
    console.log(datosValidados)
     //enviar las validadciones al estado que se va a encargar de mostrale el formulario 
     setAlerta(datosValidados);
     //obtener el total de validaciones
     const totalValidaciones = datosValidados.filter(input => input.estado === false).map
     ((estado) => {return false});
     console.log("Total de validaciones", totalValidaciones.length);
     //validacion para enviar datos al servidor
     if(totalValidaciones.length >= 1){
      console.log("Enviar al servidor");
     }
  }
  const validarInputs = (data) => {
    console.log(data);
    //declaracion del arreglo para guardar las validaciones
    let errors = [];
    //recibimiento de datos validados
    const datosDelFormulario = data;
    //proceso de validacion
    datosDelFormulario.map((valorInput) => {
      switch(valorInput.nombre){
        case 'nie': {
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
              estado:false
            })
          }
          break;
        }
        case 'contra':{
          if(valorInput.value === '' || valorInput.value === null){
            errors.push({
              valorInput:valorInput.nombre,
              mensaje: 'Campo requerido',
              estado: true
            });
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
      <div class="flex flex-col justify-center  items-center h-screen bg-gradient-to-t  from-blue-700 via-blue-500 to-sky-500">
        <header class="max-w-lg mx-auto mt-8">
          <h1 class="text-4xl font-bold text-aFuerte text-center">Learn+</h1>
        </header>
        <main class="bg-bCasi max-w-lg mx-auto w-10/12 p-8 md:p-12 my-4 rounded-lg shadow-2xl">
          <section class="">
            <form onSubmit={handleLogin} class="flex flex-col" method="POST" action="#">
            <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-8  md:mt-0 ">
              <h1 class="font-semibold text-2xl text-aFuerte m-4">Login</h1>
            </div>
              <div class="w-full">
                <input
                name="nieLogin"
                value={formulario.nieLogin} onChange={ManejarEventoInputs}
                  type="text"
                  placeholder="NIE (Solo número)"
                  class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                />
                {
                  alerta.filter( input => input.valorInput == 'nie' && input.estado === true).map(message => (
                    <div>
                      <span className="text-red-500">{message.mensaje}</span>
                    </div>
                  ))
                }
              </div>

              <div class="w-full">
                <input
                name="contraLogin"
                value={formulario.contraLogin} onChange={ManejarEventoInputs}
                  type="password"
                  placeholder="Contraseña"
                  class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                />
                {
                  alerta.filter( input => input.valorInput == 'contra' && input.estado === true).map(message => (
                    <div>
                      <span className="text-red-500">{message.mensaje}</span>
                    </div>
                  ))
                }
              </div>

              <input
                class="bg-aFuerte2 hover:bg-aFuerte3 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
                value="Ingresar"
              />

              <div class="flex justify-end">
                <Link
                  to="/forgot-password"
                  class="text-sm text-aFuerte2 hover:text-aFuerte3 hover:underline mt-3"
                >
                  ¿Olvido su contraseña?
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
    </div>
  );
}

export default FormLogin;