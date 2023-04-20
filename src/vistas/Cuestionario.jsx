import React from "react";
import Aside from "../components/Aside";
import Nav from "../components/Nav";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cuestionario() {
  return (
    <div className="flex ">
      <Aside />
      <div className="w-full">
        <Nav />
        <div className="ml-16">
        <div class="mx-auto mt-4 max-w-lg text-center ">
          <h2 class="text-3xl font-bold sm:text-4xl">Cuestionario</h2>
        </div>
          <div
            href="#"
            className="relative mx-4 my-2 block verflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <div class="mt-2 border-t-2 border-gray-100 pt-4">
              <div class="mt-6 flex gap-4 sm:gap-6">
                <div class="flex flex-col-reverse">
                  <AiOutlineFieldTime className="text-indigo-600 w-10 h-10" />
                </div>

                <div class="flex flex-col-reverse">
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    Cuestionario 1-1
                  </h3>
                </div>
              </div>
            </div>
            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Cuestionario
            </h3>

            <p class="mt-2 hidden text-sm sm:block">Tema: Contenido 1</p>
            <button
  type="button"
  class="inline-block mt-4 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
  data-te-toggle="modal"
  data-te-target="#exampleModal"
  data-te-ripple-init
  data-te-ripple-color="light">
  Intento de Cuestionario
</button>
          </div>
        </div>
      </div>
      <div
  data-te-modal-init
  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
    <div
      class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
       
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalLabel">
          Comenzar Intento
        </h5>
       
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

     
      <div class="relative flex-auto p-4" data-te-modal-body-ref>
        El Cuestionario no tiene un tiempo limite, el tiempo empezara  contar para medir el tiempo que se tomara en realizar el cuestionario. El cuestionario es solo para medir el conocimiento y asi poder hacer un refuerzo
      </div>

 
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button"
          class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light">
          Cancelar
        </button>
        <Link
        to="/quiz"  target="_blank"
          type="button"
          class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        
          >
         Comenzar Intento
        </Link>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Cuestionario;
