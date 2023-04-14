import React from "react";
import { AiOutlineMenu, AiFillHome, AiOutlineDown } from "react-icons/ai";
import { FaUserAlt, FaClipboardList, FaBook, FaAward } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Aside() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`fixed z-10 bg-[#034078] min-h-screen p-5 pt-8 ${
        open ? "w-16" : "w-72"
      } duration-500 text-gray-100 px-4`}
    >
      <div class=" py-3 flex justify-between">
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
      <div className="mt-4 flex flex-col gap-4 relative">
        <div className="mt-5">
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
          <Link
            to="/materia"
            class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 hover:bg-opacity-40 rounded-md "
          >
            <div>
              <span>
                <FaBook class="text-2xl block float-left" />
              </span>
            </div>
            <h2
              className={`whitespace-pre duration-500 ${
                open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Materias
            </h2>
          </Link>
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

        </div>
      </div>
    </div>
  );
}

export default Aside;
