import React from "react";
import { FaClipboardList } from "react-icons/fa";
import Aside from "../components/Aside";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function Materia() {
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Nav />
       <div className="ml-16">
       <div class="mx-auto mt-4 max-w-lg text-center ">
          <h2 class="text-3xl font-bold sm:text-4xl">Unidades</h2>
        </div>

        <ul
          class="mb-5 mx-4 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation" class="flex-auto text-center">
            <a
              href="#tabs-home01"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
              data-te-toggle="pill"
              data-te-target="#tabs-home01"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home01"
              aria-selected="true"
            >
              Unidad 1
            </a>
          </li>
          <li role="presentation" class="flex-auto text-center">
            <a
              href="#tabs-profile01"
              class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
              data-te-toggle="pill"
              data-te-target="#tabs-profile01"
              role="tab"
              aria-controls="tabs-profile01"
              aria-selected="false"
            >
              Unidad 2
            </a>
          </li>
          <li role="presentation" class="flex-auto text-center">
            <a
              href="#tabs-messages01"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary "
              data-te-toggle="pill"
              data-te-target="#tabs-messages01"
              role="tab"
              aria-controls="tabs-messages01"
              aria-selected="false"
            >
              Unidad 3
            </a>
          </li>
          <li role="presentation" class="flex-auto text-center">
            <a
              href="#tabs-messages01"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
              data-te-toggle="pill"
              data-te-target="#tabs-messages01"
              role="tab"
              aria-controls="tabs-messages01"
              aria-selected="false"
            >
              Unidad 4
            </a>
          </li>
        </ul>

        <div class="mb-6 mx-4">
          <div
            class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home01"
            role="tabpanel"
            aria-labelledby="tabs-home-tab01"
            data-te-tab-active
          >
            <div
              href="#"
              className="relative my-2display-none verflow-hidden rounded-lg border border-gray-100  sm:p-6 lg:p-8"
            >
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                Unidad 1: numeros primos
              </h3>
              <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Contenido
              </h3>
              <div class="mt-4 border-t-2 border-gray-100 pt-4">
                <p class="mt-2 hidden text-sm sm:block">primer contenido</p>
                <p class="mt-2 hidden text-sm sm:block">segundo contenido</p>
                <p class="mt-2 hidden text-sm sm:block">tercer contenido</p>
              </div>

              <div class="mt-2 border-t-2 border-gray-100 pt-4">
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <Link
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      to="/cuestionario"
                    >
                      Realizar Cuestionario 1.1
                    </Link>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.2
                    </a>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.3
                    </a>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.4
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-profile01"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab01"
          >
            <div
              href="#"
              className="relative my-2display-none verflow-hidden rounded-lg border border-gray-100  sm:p-6 lg:p-8"
            >
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                Unidad 2: numeros primos
              </h3>
              <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Contenido
              </h3>
              <div class="mt-4 border-t-2 border-gray-100 pt-4">
                <p class="mt-2 hidden text-sm sm:block">primer contenido</p>
                <p class="mt-2 hidden text-sm sm:block">segundo contenido</p>
                <p class="mt-2 hidden text-sm sm:block">tercer contenido</p>
              </div>

              <div class="mt-2 border-t-2 border-gray-100 pt-4">
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <Link
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      to="/cuestionario"
                    >
                      Realizar Cuestionario 2.1
                    </Link>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 2.2
                    </a>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 2.3
                    </a>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 2.4
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-messages01"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab01"
          >
            <div
              href="#"
              className="relative my-2display-none verflow-hidden rounded-lg border border-gray-100  sm:p-6 lg:p-8"
            >
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                Unidad 1: numeros primos
              </h3>
              <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Contenido
              </h3>
              <div class="mt-4 border-t-2 border-gray-100 pt-4">
                <p class="mt-2 hidden text-sm sm:block">primer contenido</p>
                <p class="mt-2 hidden text-sm sm:block">segundo contenido</p>
                <p class="mt-2 hidden text-sm sm:block">tercer contenido</p>
              </div>

              <div class="mt-2 border-t-2 border-gray-100 pt-4">
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <Link
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      to="/cuestionario"
                    >
                      Realizar Cuestionario 1.1
                    </Link>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.2
                    </a>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.3
                    </a>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.4
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-contact01"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab01"
          >
            <div
              href="#"
              className="relative my-2display-none verflow-hidden rounded-lg border border-gray-100  sm:p-6 lg:p-8"
            >
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                Unidad 1: numeros primos
              </h3>
              <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Contenido
              </h3>
              <div class="mt-4 border-t-2 border-gray-100 pt-4">
                <p class="mt-2 hidden text-sm sm:block">primer contenido</p>
                <p class="mt-2 hidden text-sm sm:block">segundo contenido</p>
                <p class="mt-2 hidden text-sm sm:block">tercer contenido</p>
              </div>

              <div class="mt-2 border-t-2 border-gray-100 pt-4">
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <Link
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      to="/cuestionario"
                    >
                      Realizar Cuestionario 1.1
                    </Link>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.2
                    </a>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.3
                    </a>
                  </div>
                </div>
                <div class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <FaClipboardList className="text-indigo-600 w-10 h-10" />
                  </div>

                  <div class="flex flex-col-reverse">
                    <a
                      class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
                      href="#"
                    >
                      Realizar Cuestionario 1.4
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Materia;
