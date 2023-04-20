import Aside from "../components/Aside";
import Nav from "../components/Nav";
import Nivel1 from "../components/assets/nivel-1.png";
import Nivel2 from "../components/assets/nivel-2.png";
import Nivel3 from "../components/assets/nivel-3.png";
import {
  AiTwotoneExperiment,
  AiOutlineTrophy,
  AiOutlineFieldTime,
  AiOutlineLineChart,
} from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

function Dasboard() {
  const cookies = new Cookies();

  const token = cookies.get("tokenMyApp");
  const Navigate = useNavigate();

  const [datosServidor, setDatosServidor] = useState([]);
  console.log("listar datos", datosServidor);

  useEffect(() => {
    if (!token) {
      window.location.href = "http://localhost:3001/login";
    }

    async function getInfo() {
      const url = "http://localhost:8000/api/materia-listar"; //aqui va la ruta que el back ha definido
      let config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      try {
        const resp = await axios.get(url, config);
        setDatosServidor(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfo();
  }, []);
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Nav />
        <section class="ml-16 bg-bCasi text-aFuerte2">
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="mx-4 text-left">
              <h2 class="text-3xl font-bold sm:text-4xl">Mi Progreso</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
              <div class="bg-aFuerte4 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-aFuerte4 dark:border-gray-600 text-white font-medium group">
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <AiOutlineTrophy
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div class="text-right">
                  <p class="text-2xl">0 puntos</p>
                  <p>Puntos Acumulados</p>
                </div>
              </div>
              <div class="bg-aFuerte4 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-aFuerte4 dark:border-gray-600 text-white font-medium group">
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <AiOutlineFieldTime
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div class="text-right">
                  <p class="text-2xl">0 h 00 m</p>
                  <p>Tiempo aprendido</p>
                </div>
              </div>
              <div class="bg-aFuerte4 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-aFuerte4 dark:border-gray-600 text-white font-medium group">
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <FaAward
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div class="text-right">
                  <p class="text-2xl">2 Insiginias</p>
                  <p>Insignias Ganadas</p>
                </div>
              </div>
              <div class="bg-aFuerte4 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-aFuerte4 dark:border-gray-600 text-white font-medium group">
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <AiOutlineLineChart
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div class="text-right">
                  <p class="text-2xl">10% </p>
                  <p>Progreso</p>
                </div>
              </div>
            </div>
            <div class="mt-4 mx-4 text-left">
              <h2 class="text-3xl font-bold sm:text-4xl">Mis Materias</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8  sm:grid-cols-2  lg:grid-cols-4">
              <Link
                to="/materia"
                class="block max-w-sm p-6 bg-aFuerte3 border border-gray-200 rounded-lg shadow hover:bg-gray-900 "
              >
                <svg
                  class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                </svg>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-gray-900">
                  Matematicas
                </h5>
                <div className="flex justify-start">
                  <FaAward className="text-gray-500 text-xl " />
                  <span class="font-normal text-gray-200 mx-2 ">
                    0% completado
                  </span>
                </div>
              </Link>
              <Link
                to="/materia"
                class="block max-w-sm p-6 bg-aFuerte3 border border-gray-200 rounded-lg shadow hover:bg-gray-900 "
              >
                <svg
                  class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                </svg>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-gray-900">
                  Matematicas
                </h5>
                <div className="flex justify-start">
                  <FaAward className="text-gray-500 text-xl " />
                  <span class="font-normal text-gray-200 mx-2 ">
                    0% completado
                  </span>
                </div>
              </Link>
              <Link
                to="/materia"
                class="block max-w-sm p-6 bg-aFuerte3 border border-gray-200 rounded-lg shadow hover:bg-gray-900 "
              >
                <svg
                  class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                </svg>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-gray-900">
                  Matematicas
                </h5>
                <div className="flex justify-start">
                  <FaAward className="text-gray-500 text-xl " />
                  <span class="font-normal text-gray-200 mx-2 ">
                    0% completado
                  </span>
                </div>
              </Link>
              <Link
                to="/materia"
                class="block max-w-sm p-6 bg-aFuerte3 border border-gray-200 rounded-lg shadow hover:bg-gray-900 "
              >
                <svg
                  class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                </svg>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-gray-900">
                  Matematicas
                </h5>
                <div className="flex justify-start">
                  <FaAward className="text-gray-500 text-xl " />
                  <span class="font-normal text-gray-200 mx-2 ">
                    0% completado
                  </span>
                </div>
              </Link>
            </div>
            
            <div className="mt-4  grid grid-cols-1 gap-8  sm:grid-cols-2  lg:grid-cols-2">
              <div className="md:col-span-2 lg:col-span-1">
              <div class="mt-6 mx-4 text-left ">
              <h2 class="text-3xl font-bold sm:text-4xl">Mis Insignias</h2>
            </div>
                <div className="flex justify-start">
                  <div class="flex-shrink-0 w-20 h-20 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <img src={Nivel1} alt="" />
                  </div>
                  <div class="h-5 mt-8 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "45%" }}
                    >
                      {" "}
                      45%
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div class="flex-shrink-0 w-20 h-20 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <img src={Nivel2} alt="" />
                  </div>
                  <div class="h-5 mt-8 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "20%" }}
                    >
                      {" "}
                      20%
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div class="flex-shrink-0 w-20 h-20 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <img src={Nivel3} alt="" />
                  </div>
                  <div class="h-5 mt-8 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "10%" }}
                    >
                      {" "}
                      10%
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 lg:col-span-1 w-full ">
              <div class="mt-6 mx-4 text-left ">
              <h2 class="text-3xl font-bold sm:text-4xl">% de Avance</h2>
            </div>
                <section
                  x-data="skillDisplay"
                  class="p-0  justify-center space-y-6 bg-gray-300 rounded-xl md:grid md:grid-cols-1 md:gap-4 sm:space-y-0"
                >
                  <div
                    class="mt-4  flex items-center justify-center"
                    x-data="{ circumference: 2 * 22 / 7 * 120 }"
                  >
                    <svg class="transform -rotate-90 w-72 h-72">
                      <circle
                        cx="145"
                        cy="145"
                        r="120"
                        stroke="currentColor"
                        stroke-width="30"
                        fill="transparent"
                        class="text-gray-700 "
                        
                      />

                      <circle
                        cx="145"
                        cy="145"
                        r="120"
                        stroke="currentColor"
                        stroke-width="30"
                        fill="transparent"
                        class="text-blue-500 "
                        style={{ width: `10%` }}
                      />
                    </svg>
                    <span
                      class="absolute text-5xl text-aFuerte"
                      x-text="`${currentSkill.percent}%`"
                    >
                      {" "}
                      10%
                    </span>
                  </div>
                </section>
              </div>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {datosServidor.map((usuario) => {
                return (
                  <Link
                    class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-aFuerte3 hover:shadow-aFuerte3"
                    to="/materia"
                  >
                    <AiTwotoneExperiment class="h-10 w-10 text-emerald-800" />

                    <h2 class="mt-4 text-xl font-bold text-aFuerte">
                      {usuario.nombre_materia}
                    </h2>

                    <p class="mt-1 text-sm text-gray-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex ut quo possimus adipisci distinctio alias voluptatum
                      blanditiis laudantium.
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dasboard;
