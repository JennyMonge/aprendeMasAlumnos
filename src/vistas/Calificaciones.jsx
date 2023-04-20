import React from "react";
import Aside from "../components/Aside";
import Nav from "../components/Nav";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

function Calificaciones() {
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Nav />
        <div className="ml-16 mt-8 bg-bCasi text-aFuerte2">
          <div class="mx-4 text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Calificaciones</h2>
          </div>
          <p class="text-lg mx-8 text-left font-bold m-5">
            Usuario-Jennifer Monge
          </p>
          <table class="rounded-t-lg m-5 w-11/12 mx-auto bg-aFuerte2 text-gray-900">
            <tr class="text-left border-b border-gray-300 text-gray-100">
              <th class="px-4 py-3">Cuestionario</th>
              <th class="px-4 py-3">Calificacion</th>
              <th class="px-4 py-3">Rango</th>
              <th class="px-4 py-3">Porcentaje</th>
            </tr>
            <tr class="bg-bCasi border-b border-gray-600">
              <td class="px-4 py-3">
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-aFuerte4 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <Link
                      class="relative font-medium text-aFuerte4 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      to="/cuestionario"
                    >
                      Realizar Cuestionario 1.1
                    </Link>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3">10</td>
              <td class="px-4 py-3">0 - 10</td>
              <td class="px-4 py-3">100%</td>
            </tr>
            <tr class="bg-bCasi border-b border-gray-600">
              <td class="px-4 py-3">
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-aFuerte4 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <Link
                      class="relative font-medium text-aFuerte4 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      to="/cuestionario"
                    >
                      Realizar Cuestionario 1.1
                    </Link>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3">10</td>
              <td class="px-4 py-3">0 - 10</td>
              <td class="px-4 py-3">100%</td>
            </tr>
            <tr class="bg-bCasi border-b border-gray-600">
              <td class="px-4 py-3">
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-aFuerte4 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <Link
                      class="relative font-medium text-aFuerte4 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      to="/cuestionario"
                    >
                      Realizar Cuestionario 1.1
                    </Link>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3">10</td>
              <td class="px-4 py-3">0 - 10</td>
              <td class="px-4 py-3">100%</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calificaciones;
