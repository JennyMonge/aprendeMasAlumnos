import React from "react";



function Nav() {
  return (
    <div className="w-full">
 <nav
    class="relative flex w-full items-center justify-between bg-aFuerte3 py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start"
    data-te-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between pl-1 pr-6 ">
      <div className="flex items-center rounded px-6 py-4"></div>
      <div class="relative flex items-center">
        <div class="relative" data-te-dropdown-ref>
          <a
            class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
            href="#"
            id="dropdownMenuButton2"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
          >
            <svg
              loading="lazy"
              xmlns="http://www.w3.org/2000/svg"
              class=" icon icon-tabler icon-tabler-user"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </a>
          <ul
            class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-bCasi text-left shadow-lg [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                to="/ajustesi"
                class="block w-full whitespace-nowrap bg-transparent py-2 px-8 text-sm font-normal text-neutral-700 hover:bg-sky-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                data-te-dropdown-item-ref
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                to="/loginA"
                class="block w-full whitespace-nowrap bg-transparent py-2 px-8 text-sm font-normal text-neutral-700 hover:bg-sky-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                data-te-dropdown-item-ref
              >
                Salir
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    </div>
   
  );
}

export default Nav;