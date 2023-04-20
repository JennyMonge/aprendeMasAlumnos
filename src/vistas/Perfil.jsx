import React from "react";
import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import Nav from "../components/Nav";


function Perfil() {
  return (
    <div className="flex" >
        <Aside/>
      <div className="w-full">
      <Nav/>
      <div className="ml-16">
      <div class="mt-8 mx-4 grid grid-cols-1 gap-8 md:grid-cols-2 ">
        <div
          href="#"
          class="relative block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
        >
          <div class=" sm:flex sm:gap-4 flex items-center gap-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              class="aspect-square w-40 rounded-full object-cover"
            />
            <div>
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                Jose Lopez
              </h3>
              <Link
                type="button"
                to="/editar-perfil"
                class="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
              >
                Editar Perfil
              </Link>
            </div>
          </div>
          <div class="mt-4 border-t-2 border-gray-100 pt-4">
            <p class="text-sm font-bold uppercase text-gray-500">
              Detalles del Usuario
            </p>
            <h2 class="text-lg font-medium text-gray-900">Email</h2>
            <p class="mt-4 leading-relaxed text-gray-700">MM16110@gmail.com</p>
          </div>
        </div>
        <div
          href="#"
          class="relative block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
        >
          <div class="mt-4 border-t-2 border-gray-100 pt-4">
            <h2 class="text-lg font-medium text-gray-900">Municipio</h2>
            <p class="mt-4 leading-relaxed text-gray-700"> San Salvador</p>
          </div>
          <div class="mt-4 border-t-2 border-gray-100 pt-4">
            <h2 class="text-lg font-medium text-gray-900">Institucion</h2>
            <p class="mt-4 leading-relaxed text-gray-700">
              Centro Escolar Catolico San Patricio
            </p>
          </div>
          <div class="mt-4 border-t-2 border-gray-100 pt-4">
            <h2 class="text-lg font-medium text-gray-900">Grado</h2>
            <p class="mt-4 leading-relaxed text-gray-700"> Octavo</p>
          </div>
        </div>
        <div
          href="#"
          class="relative mt-2 my-2 block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
        >
          <div class="mt-2 pt-2">
            <p class="text-sm font-bold uppercase text-gray-500">Informes</p>
          </div>
          <a
            href="#!"
            class="underline mt-4 decoration-transparent text-blue-600 font-semibold transition duration-300 ease-in-out hover:decoration-inherit"
          >
            Sesiones del Navegador
          </a>
          <div class="mt-4 border-t-2 border-gray-100 pt-4">
            <Link
              to="/calificaciones"
              class="underline mt-4 decoration-transparent text-blue-600 font-semibold transition duration-300 ease-in-out hover:decoration-inherit"
            >
              Resumen de Calificaciones
            </Link>
          </div>
        </div>
        <div
          href="#"
          class="relative mt-2 my-2 block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
        >
          <div class="mt-2 pt-2">
            <p class="text-sm font-bold uppercase text-gray-500">
              Actividad de acceso
            </p>
          </div>
          <div className="mt-2 ">
            <h2 class="text-lg font-bold text-gray-900">
              Primer Acceso al sitio
            </h2>
            <p class="mt-4 leading-relaxed text-gray-700">
              {" "}
              viernes 24 de febrero del 2022
            </p>
          </div>
          <div class="mt-4 border-t-2 border-gray-100 pt-4">
            <h2 class="text-lg font-bold text-gray-900">
              Ultimo Acceso al sitio
            </h2>
            <p class="mt-4 leading-relaxed text-gray-700">
              {" "}
              viernes 9 de abril del 2023
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>       
    </div>
  );
}

export default Perfil;