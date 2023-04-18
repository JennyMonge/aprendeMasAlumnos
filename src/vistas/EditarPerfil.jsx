import React, { useState } from "react";
import Aside from "../components/Aside";
import Nav from "../components/Nav";

function EditarPerfil() {
  //Estado inicial
  const datosFormulario = {
    fotoPerfil: "",
    nomEditPerfil: "",
    apellidosEditPerfil: "",
    emailEditPerfil: "",
    generoEditPerfil: "",
    nacimientoEditPerfil: "",
  };
  //Estado inicial para alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false,
  };
  //estado para manejar los valores del formulario
  const [formulario, setFormulario] = useState(datosFormulario);
  //Estado para manejar las alertar de validacion
  const [alerta, setAlerta] = useState([initialStateInput]);
  const [respuestaRadio, setRespuestaRadio] = useState(false);
  //funcion para obtener los de los inputs
  const ManejarEventoDeInputs = (event) => {
    //la propiedad target del event nos permitira obtener los valores
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.id;

    if(name === "generoEditPerfil"){
      const radio = document.getElementById(id);
      setRespuestaRadio(radio?.checked);
      formulario.generoEditPerfil = id;
    }else{
      setFormulario({...formulario, [name]: value });
    }

  
  };

  const handleEditarPerfil = (e) => {
    e.preventDefault();
    //ordenamos los datos para enviarlos a la vadlidacion
    let verificarInputs = [
      { nombre: "foto", value: formulario.fotoPerfil },
      { nombre: "nombre", value: formulario.nomEditPerfil },
      { nombre: "apellido", value: formulario.apellidosEditPerfil },
      { nombre: "email", value: formulario.emailEditPerfil },
      { nombre: "genero", value: formulario.generoEditPerfil },
      { nombre: "fechaNacimiento", value: formulario.nacimientoEditPerfil },
    ];
    //enviamos los datos a la funcion de validacion y recibimos las validadciones
    const datosValidados = validarInputs(verificarInputs);
    console.log(datosValidados);
    //Enviamos las validacione s al estado que se va encargar de mostrarlas en el formulario
    setAlerta(datosValidados);
    //obtenemos el total de validaciones
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });
    console.log("total validaciones:", totalValidaciones.length);
    //validacion para enviar los datos al servidor
    if (totalValidaciones.length >= 4) {
      if(respuestaRadio != false){
        console.log("Enviar al servidor");
        alert("exito");
      }else{
        alert("necesita agregar un genero")
      }
      
    }
  };
  const validarInputs = (data) => {
    console.log(data);
    let errors = [];
    const datosDelFormulario = data;
    datosDelFormulario.map((valorInput) => {
      switch (valorInput.nombre) {
        case "foto": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Campo requerido",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
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
        case 'email': {
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
      }
    });
    return errors;
  };
  console.log(formulario);
  return (
    <div className="flex ">
      <Aside />
      <div className="w-full">
        <Nav />
        <div class="ml-16 px-6 pt-6 2xl:container my-4">
          <form action="" onSubmit={handleEditarPerfil}>
            <div class="grid gap-6 md:grid-cols-3">
              <div class="md:col-span-2 lg:col-span-1">
                <div class="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                  <h1 class=" font-bold text-center  text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-aFuerte">
                    Editar Perfil
                  </h1>
                  <div>
                    <label
                      for="dropzone-file"
                      class="mx-auto cursor-pointer flex w-80 h-800 max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                        Payment File
                      </h2>
                      <p class="mt-2 text-gray-500 tracking-wide">
                        Upload or darg & drop your file SVG, PNG, JPG or GIF.{" "}
                      </p>
                      <input
                        id="dropzone-file"
                        type="file"
                        name="fotoPerfil"
                        value={formulario.fotoPerfil}
                        onChange={ManejarEventoDeInputs}
                        class="hidden"
                      />
                      {
                  alerta.filter(input => input.valorInput == "foto" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
                    </label>
                  </div>
                </div>
              </div>
              <div class="md:col-span-2 lg:col-span-2">
                <div class="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                  <h1 class=" font-bold  text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-aFuerte">
                    Tus Datos
                  </h1>
                  <div class="my-8">
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nombres
                        </label>
                        <input
                          type="text"
                          name="nomEditPerfil"
                          value={formulario.nomEditPerfil}
                          onChange={ManejarEventoDeInputs}
                          id="first_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                          
                        />
                        {alerta
                          .filter(
                            (input) =>
                              input.valorInput == "nombre" &&
                              input.estado === true
                          )
                          .map((message) => (
                            <div className="">
                              <span className="text-red-500 ">
                                {message.mensaje}
                              </span>
                            </div>
                          ))}
                      </div>
                      <div>
                        <label
                          for="last_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Apellidos
                        </label>
                        <input
                          name="apellidosEditPerfil"
                          value={formulario.apellidosEditPerfil}
                          onChange={ManejarEventoDeInputs}
                          type="text"
                          id="last_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Doe"
                          
                        />
                        {
                  alerta.filter(input => input.valorInput == "apellido" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
                      </div>
                      <div>
                        <label
                          for="number"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nie
                        </label>
                        <input
                          type="number"
                          id="number"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1223457890"
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          disabled
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          name="emailEditPerfil"
                          value={formulario.emailEditPerfil}
                          onChange={ManejarEventoDeInputs}
                          type="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="john.doe@company.com"
                          
                        />
                        {
                  alerta.filter(input => input.valorInput == "email" && input.estado === true).map(message => (
                    <div className="">
                      <span className="text-red-500 ">{message.mensaje}</span>
                    </div>
                  ))
                }
                      </div>
                      <div>
                        <label
                          for="last_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Genero
                        </label>

                        <div class="flex">
                          <div class="flex items-center mr-4">
                            <input
                              id="masculino"
                              type="radio"
                              value=""
                              name="generoEditPerfil"
                             
                              onChange={ManejarEventoDeInputs}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Masculino
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="femenino"
                              type="radio"
                              value=""
                              name="generoEditPerfil"
                             
                              onChange={ManejarEventoDeInputs}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="inline-2-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Femenino
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          for="last_name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Fecha Nacimiento
                        </label>
                        <input
                          name="nacimientoEditPerfil"
                          value={formulario.nacimientoEditPerfil}
                          onChange={ManejarEventoDeInputs}
                          type="date"
                          id="last_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Doe"
                          
                        />
                      </div>
                    </div>
                    <div class="mb-6">
                      <label
                        for="text"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Institucion
                      </label>
                      <select
                        id="default"
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div class="mb-6">
                      <label
                        for="text"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nivel Academico
                      </label>
                      <select
                        id="default"
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div class="mb-6">
                      <label
                        for="text"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Departamento
                      </label>
                      <select
                        id="default"
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div class="mb-6">
                      <label
                        for="text"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Municipio
                      </label>
                      <select
                        id="default"
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfil;
