import React from "react";
import { AiOutlineMenu, AiFillHome, AiOutlineDown } from "react-icons/ai";
import { FaUserAlt, FaClipboardList, FaBook, FaAward } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";

function Aside() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed z-10 bg-[#034078] min-h-screen p-5 pt-8 ${
          open ? "w-16" : "w-72"
        } duration-500 text-gray-100 px-4`}
      >
        {/*TITULO */}
        <div class=" flex justify-between">
          <div
            className={`whitespace-pre duration-500 ${
              open && "opacity-0 translate-x-28 overflow-hidden"
            }`}
          >
            <Link to="/dasboard" className="">
              Aprende +
            </Link>
          </div>
          <div className="">
            <span>
              <AiOutlineMenu class=" w-7 h-7 " onClick={() => setOpen(!open)} />
            </span>
          </div>
        </div>
        {/*demas */}
        <div class="mt-4 flex flex-col gap-4 relative">
          <div class="mt-5">
            {/*Inicio*/}
            <Link
              to="/dasboard"
              class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 hover:bg-opacity-40 rounded-md "
            >
              <div>
                <span>
                  <AiFillHome class="text-2xl block float-left" />
                </span>
              </div>
              <h2
                className={`whitespace-pre duration-500 ${
                  open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Inicio del sitio
              </h2>
            </Link>
            <Link
              to="/perfil"
              class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 hover:bg-opacity-40 rounded-md "
            >
              <div>
                <span>
                  <FaUserAlt class="text-2xl block float-left" />
                </span>
              </div>
              <h2
                className={`whitespace-pre duration-500 ${
                  open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Perfil
              </h2>
            </Link>
          </div>
          {/*demas menus */}
          <ul class="mt-2">
            <Link
              to="/calificaciones"
              class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 hover:bg-opacity-40 rounded-md "
            >
              <div>
                <span>
                  <FaClipboardList class="text-2xl block float-left" />
                </span>
              </div>
              <h2
                className={`whitespace-pre duration-500 ${
                  open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Calificaciones
              </h2>
            </Link>
            {/*CON SUBMENU*/}
            <li
              class="my-1 flex justify-between text-sm gap-3.5 font-medium p-2 hover:bg-gray-500 hover:bg-opacity-40 rounded-md"
              href=""
            >
              <div className="flex items-center gap-3.5">
                <div>
                  <span>
                    <FaBook class="icon icon-tabler icon-tabler-school ml-0 w-5 h-5" />
                  </span>
                </div>
                <h2
                  className={`whitespace-pre duration-500 ${
                    open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Materias
                </h2>
              </div>

              <span>
                <HiOutlineChevronDown
                  class="icon icon-tabler icon-tabler-school ml-0 w-5 h-5"
                  onClick={() => setSubOpen(!subMenuOpen)}
                />
              </span>
            </li>
            {/*EL SUBMENU*/}
            {subMenuOpen && (
              <ul>
                <li
                  class="flex items-center text-sm gap-3.5 font-medium py-1 px-2 hover:bg-gray-800 rounded"
                  href=""
                >
                  <h2
                    className={`ml-4 whitespace-pre duration-500 ${
                      open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Grado 1
                  </h2>
                </li>
                <li
                  class="flex items-center text-sm gap-3.5 font-medium py-1 px-2 hover:bg-gray-800 rounded"
                  href=""
                >
                  <h2
                    className={`ml-4 whitespace-pre duration-500 ${
                      open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Grado 2
                  </h2>
                </li>
              </ul>
            )}
            {/*fin CON SUBMENU*/}
            <Link
              to="/insignias"
              class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 hover:bg-opacity-40 rounded-md "
            >
              <div>
                <span>
                  <FaAward class="text-2xl block float-left" />
                </span>
              </div>
              <h2
                className={`whitespace-pre duration-500 ${
                  open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Insignias
              </h2>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aside;
