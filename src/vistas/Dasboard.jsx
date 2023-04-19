import Aside from "../components/Aside";
import Nav from "../components/Nav";
import { AiTwotoneExperiment } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Dasboard() {
  const [datosServidor, setDatosServidor] = useState([]);
  console.log("listar datos", datosServidor);
  useEffect(() => {
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
            <div class="mx-auto max-w-lg text-center">
              <h2 class="text-3xl font-bold sm:text-4xl">Mis Materias</h2>
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
