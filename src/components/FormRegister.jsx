import React, { useState } from "react";
import { Link } from "react-router-dom";
function FormRegister() {
 
    //Estado inicial de formulario
    const datosFormulario = {
      nombreRegistro: "",
      apellidoRegistro: "",
      nieRegistro: "",
      emailRegistro: "",
      contraRegistro: "",
      reContraRegistro: ""
    };
//Estado inicial para alerta
const initialStateInput = {
  input:"",
  message: "",
  state: false
};
//estado para manejar los valores del formulario
const [formulario, setFormulario] = useState(datosFormulario);
//Estado para manejar las alerta de validacion
const [alerta, setAlerta] = useState([initialStateInput]);
//funcion para obtener los de los inputs
const ManejarEventoDeInputs = (event) => {
 //la propiedad target del event nos permitira obtener los valores
 const name = event.target.name;
 const value = event.target.value;
 setFormulario({...formulario,[name]:value});
};

const handleRegistro = (e) => {
  e.preventDefault();//perviene el comportamiento pro defecto que trae consigo  el evento

  //ordenamos los datos para enviarlos a la validacion
  let verficarInputs = [
    {nombre: "nombre", value: formulario.nombreRegistro },
    {nombre: "apellido", value: formulario.apellidoRegistro },
    {nombre: "nie", value: formulario.nieRegistro },
    {nombre: "contra", value: formulario.contraRegistro },
    {nombre: "reContra", value: formulario.reContraRegistro}

  ];
  //enviamos los datos a la funcion de validacion y recibimos las validadaciones
  const datosValidatos = validarInputs(verficarInputs);
  console.log(datosValidatos);
  //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
  setAlerta(datosValidatos);
  //Obtenemos el total de validaciones
  const totalValidaciones = datosValidatos.filter(input => input.estado === false).map
  ((estado) => {return false});
  console.log("Total de validaciones:", totalValidaciones.length);
  //validacion para enviar los datos al servidor
  if(totalValidaciones.length >= 1){
    console.log("Enviar al servidor");
  }
}

const validarInputs = (data) => {
  console.log(data);
  //declaramos un arreglo el cual se va a encargar de guardar las validaciones
  let errors = [];
  //recibimos los datos a validas
const datosDelFormulario = data;
//procesp de validacion
datosDelFormulario.map((valorInput) =>{
  switch(valorInput.nombre){
    case 'nombre': {
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
          estado:false
        })
      }
      break;
    }
    case 'apellido': {
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
          estado:false
        })
      }
      break;
    }
    case 'nie': {
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
          estado:false
        })
      }
      break;
    }
    case 'contra': {
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
          estado:false
        })
      }
      break;
    }
    case 'reContra': {
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
          estado:false
        })
      }
      break;
    }

    default: {
      //error.push({

      //});
      break;
    }
  }
});
return errors;
}

  console.log(formulario);
    return (
    
      <div class="flex flex-col justify-center  items-center h-screen bg-gradient-to-t from-blue-700 via-blue-500 to-sky-500">
        <header class="max-w-lg mx-auto mt-4">
          <h1 class="text-4xl font-bold text-aFuerte text-center">Learn+</h1>
        </header>
        <main class="bg-bCasi max-w-lg mx-auto p-8 md:p-12 my-4 rounded-lg shadow-2xl">
          <section class="">
            <form onSubmit={handleRegistro} class="flex flex-col" method="" action="#">
            <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-8  md:mt-0 ">
              <h1 class="font-semibold text-2xl text-aFuerte">Registro</h1>
            </div>
              <div class="">
                <input
                  name="nombreRegistro"
                  value={formulario.nombreRegistro} onChange={ManejarEventoDeInputs}
                  type="text"
                  placeholder="Nombres"
                  class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                />
                {
                  alerta.filter(input => input.valorInput == "nombre" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
              </div>
              <div class="">
                <input
                name="apellidoRegistro"
                  type="text"
                  value={formulario.apellidoRegistro} onChange={ManejarEventoDeInputs}
                  placeholder="Apellidos"
                  class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                />
                 {
                  alerta.filter(input => input.valorInput == "apellido" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
              </div>
              <div class="">
                <input
                name="nieRegistro"
                value={formulario.nieRegistro} onChange={ManejarEventoDeInputs}
                  type="tel"
                  placeholder="NIE (Solo número)"
                  class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                />
                {
                  alerta.filter(input => input.valorInput == "nie" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
              </div>

              <div class="">
                <input
                name="emailRegistro"
                value={formulario.emailRegistro} onChange={ManejarEventoDeInputs}
                  type="email"
                  placeholder="ejemplo@correo.com"
                  class="shadow appearance-none border rounded w-full py-3 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                />
                  {
                  alerta.filter(input => input.valorInput == "email" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
              </div>

              <div class="flex flex-wrap -mx-3 mb-6 my-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                  name="contraRegistro"
                  value={formulario.contraRegistro} onChange={ManejarEventoDeInputs}
                    type="password"
                    class="shadow appearance-none block border rounded w-full py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:ring"
                    placeholder="Contraseña"
                  />
                   {
                  alerta.filter(input => input.valorInput == "contra" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
                </div>
                <div class="w-full md:w-1/2 px-3 md:mb-0">
                  <input
                  name="reContraRegistro"
                  value={formulario.reContraRegistro} onChange={ManejarEventoDeInputs}
                    type="password"
                    class="shadow appearance-none block border rounded w-full py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:ring"
                    placeholder="Repetir Contraseña"
                  />
                  {
                  alerta.filter(input => input.valorInput == "reContra" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
                </div>
              </div>

              <input
                class="bg-aFuerte2 hover:bg-aFuerte3 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
                value="Ingresar"
              />
            </form>
          </section>
        </main>

        <div class="text-center my-2 flex flex-col">
            <Link
              to="/login"
              class="text-sm font-bold text-gray-50 hover:text-aFuerte3 m-1"
            >
              ¿Ya tienes una cuenta? 
            </Link>
          </div>
      </div>
    
  );
}

export default FormRegister;
