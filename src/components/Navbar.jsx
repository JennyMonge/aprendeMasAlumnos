import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
    
    return (
      <nav class="bg-aFuerte w-full shadow z-10 h-24">
      <div class="container m-auto flex justify-between items-center text-cyan-600">
          <h1 class="pl-8 py-4 text-xl font-bold color">QuestionsApps</h1>
          <ul class="hidden md:flex items-center pr-10 text-sky-200 font-semibold cursor-pointer mt-4">
              <li class="hover:text-gray-500 py-4 px-6"> <Link to="/">Inicio</Link></li>
              <li class="hover:text-gray-500 py-4 px-6">Nosotros</li>
              <li class="hover:text-gray-500 py-4 px-6">Servicios</li>
              <li class="hover:text-gray-500 py-4 px-6">Contactos</li>
              <Link to="/login" type="button" href="login.html" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Login</Link>
              <Link to="/registro" type="button" href="registro.html" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >  Registrarse</Link>
          </ul>

          <button class="block md:hidden py-3 px-4 rounde focus:outline-none hover:bg-gray-200 group z-10">
              <AiOutlineMenu size={20}/>
              <div class="absolute top-0 -right-full h-screen w-8/12 bg-aFuerte border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                  <ul class="flex flex-col items-center w-full text cursor-pointer pt-10">
                      <li class="hover:bg-gray-300 py-4 px-6 w-full">Inicio</li>
                      <li class="hover:bg-gray-300 py-4 px-6 w-full">Nosotros</li>
                      <li class="hover:bg-gray-300 py-4 px-6 w-full">Servicios</li>
                      <li class="hover:bg-gray-300 py-4 200px-6 w-full">Contactos</li>
                  </ul>
              </div>
          </button>
      </div>
  </nav>

    );
  }
  
  export default Navbar;