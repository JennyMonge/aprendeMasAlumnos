import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Contactos() {
    let datosFormulario = {
        name: "",
        email: "",
        message: ""
      }
    
      const initialStateInput = {
        valorInput: "",
        mensaje: '',
        estado: false
      };
    
      const [formulario, setFormulario] = useState(datosFormulario);
      const [alerta, setAlerta] = useState([initialStateInput]);
    
      const ManejarEvento = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        //actualizamos los valores capturados a nuestro estado de formulario
        setFormulario({ ...formulario, [name]: value });
      }
    
      const handleContacto = (e) => {
        e.preventDefault(); //previene el comportamiento por defecto que trae consigo el evento
    
        //Ordenamos los datos para enviarlos a la validación
        let varificarInputs = [
          { nombre: "name", value: formulario.name },
          { nombre: "email", value: formulario.email },
          { nombre: "message", value: formulario.message }
        ];
    
        //Enviamos los datos a la funcion de validacion y recibimos las validaciones
        const datosValidatos = ValidarInputs(varificarInputs);
    
        console.log(datosValidatos);
    
        //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
        setAlerta(datosValidatos);
    
        //Obtenemos el total de validaciones
        const totalValidaciones = datosValidatos.filter(input => input.estado === false).map((estado) => { return false });
    
        console.log("Total de validaciones:", totalValidaciones.length);
    
        //Validación para enviar los datos al servidor
        if (totalValidaciones.length >= 1) {
          console.log("Enviar al servidor");
        };
    
      };
    
      const ValidarInputs = (data) => {
    
        //Declaramos un arreglo el cual se va a encargar de guardar las validaciones
        let errors = [];
    
        //Recibimos los datos a validar
        const datosDelFormulario = data;
    
        //Proceso de validación
        datosDelFormulario.map((valorInput) => {
    
          switch (valorInput.nombre) {
            case 'name': {
    
              if (valorInput.value === '' || valorInput.value === null) {
    
                errors.push({
                  valorInput: valorInput.nombre,
                  mensaje: 'Campo requerido',
                  estado: true
                });
    
              } else {
    
                errors.push({
                  valorInput: valorInput.name,
                  mensaje: '',
                  estado: false
                })
    
              }
    
              break;
            }
            case 'email': {
    
              if (valorInput.value === '' || valorInput.value === null) {
    
                errors.push({
                  valorInput: valorInput.nombre,
                  mensaje: 'Campo requerido',
                  estado: true
                });
    
              } else {
    
                errors.push({
                  valorInput: valorInput.name,
                  mensaje: '',
                  estado: false
                })
    
              }
    
              break;
            }
    
            case 'message': {
    
              if (valorInput.value === '' || valorInput.value === null) {
    
                errors.push({
                  valorInput: valorInput.nombre,
                  mensaje: 'Campo requerido',
                  estado: true
                });
    
              } else {
    
                errors.push({
                  valorInput: valorInput.name,
                  mensaje: '',
                  estado: false
                })
    
              }
    
              break;
            }
    
            default: {
              // errors.push({
              //    valorInput:"requeridos",
              //    message:'Campos requeridos',
              //    state:true
              // });
              break;
            }
          }
    
    
    
        })
    
        //Retornamos el total de validaciones
        return errors;
      }
      return (
        <>
        <Navbar/>
          <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4);"}}></iframe>
                <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">LEARN PLUS</h2>
                    <p class="mt-1">Es una aplicancion educactiva</p>
                  </div>
                  <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a class="text-indigo-500 leading-relaxed">LEARNPLUS@email.com</a>
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">CEL</h2>
                    <p class="leading-relaxed">(+503)8869-2002</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleContacto} class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <div class="relative mb-4">
                  <label for="name" class="leading-7 text-sm text-gray-600">Nombre completo </label>
                  <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={ManejarEvento}/>
                  {
                      alerta.filter(input => input.valorInput == "name" && input.estado === true).map(message => (
                        <div className='py-2'>
                          <span className="text-red-500 mt-2">{message.mensaje}</span>
                        </div>
                      ))
                  }
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={ManejarEvento}/>
                  {
                      alerta.filter(input => input.valorInput == "email" && input.estado === true).map(message => (
                        <div className='py-2'>
                          <span className="text-red-500 mt-2">{message.mensaje}</span>
                        </div>
                      ))
                    }
                </div>
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
                  <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={ManejarEvento}></textarea>
                  {
                      alerta.filter(input => input.valorInput == "message" && input.estado === true).map(message => (
                        <div className='py-2'>
                          <span className="text-red-500 mt-2">{message.mensaje}</span>
                        </div>
                      ))
                    }
                </div>
                <button class="text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">enviar</button>
              </form>
            </div>
          </section>
          <Footer/>
        </>
      )
}

export default Contactos;