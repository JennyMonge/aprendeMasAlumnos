import React from "react";

export const Carrousel = () => {
  return (
    <div
      id="carouselExampleControls"
      class="relative"
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          class="relative float-left -mr-[100%] w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <section class="relative bg-[url(https://img.freepik.com/foto-gratis/vista-frontal-lapices-colores-guardados-frasco-vidrio-cuadernos-espirales-apilados-lado-derecho-color-azul_140725-138995.jpg?w=740&t=st=1680814078~exp=1680814678~hmac=d08b465db6836c89904703e383a86380ca9dbb00d94344a5568fce7a243dfafc)] bg-cover bg-center bg-no-repeat">
            <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div class="max-w-xl text-center sm:text-left">
                <h1 class="text-3xl text-aFuerte font-extrabold sm:text-5xl">
                  Let us find your
                  <strong class="block font-extrabold text-amber-500">
                    Forever Home.
                  </strong>
                </h1>

                <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                  <a
                    href="#"
                    class="block w-full rounded bg-aFuerte4 px-12 py-3 text-sm font-medium text-white shadow hover:bg-aFuerte3 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    Get Started
                  </a>

                  <a
                    href="#"
                    class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-aFuerte4 shadow hover:text-aFuerte3 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
          <section class="relative bg-[url(https://img.freepik.com/foto-gratis/volver-escuela-linda-rubia-sonriente-estudiante-europea-llevar-cuadernos-mirar-material-aprendizaje_1258-116280.jpg?w=826&t=st=1680817657~exp=1680818257~hmac=44f3689653c7b06e7f5b33e69c542a8feaf83c52b5b3d41a4a95a4fb72e74c2f)] bg-cover bg-center bg-no-repeat">
            <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div class="max-w-xl text-center sm:text-left">
                <h1 class="text-3xl text-aFuerte font-extrabold sm:text-5xl">
                  Let us find your
                  <strong class="block font-extrabold text-amber-500">
                    Forever Home.
                  </strong>
                </h1>

                <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                  <a
                    href="#"
                    class="block w-full rounded bg-aFuerte4 px-12 py-3 text-sm font-medium text-white shadow hover:bg-aFuerte3 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    Get Started
                  </a>

                  <a
                    href="#"
                    class="block w-full rounded bg-white px-12 py-3 text-sm font-medium  text-aFuerte4 shadow hover:text-aFuerte3 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
          <section class="relative bg-[url(https://img.freepik.com/foto-gratis/supervisar-feliz-experiencia-jovenes-adultos-telefono_1134-1204.jpg?w=900&t=st=1680817771~exp=1680818371~hmac=bd510c1dea50b6abc672ffd43831b1584079c8bef59dff045804e7655d777a7c)] bg-cover bg-center bg-no-repeat">
            <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div class="max-w-xl text-center sm:text-left">
                <h1 class="text-3xl text-aFuerte font-extrabold sm:text-5xl">
                  Let us find your
                  <strong class="block font-extrabold text-amber-500">
                    Forever Home.
                  </strong>
                </h1>

                <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                  <a
                    href="#"
                    class="block w-full rounded bg-aFuerte4 px-12 py-3 text-sm font-medium text-white shadow hover:bg-aFuerte3 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    Get Started
                  </a>

                  <a
                    href="#"
                    class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-aFuerte4 shadow hover:text-aFuerte3  focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <button
        class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="prev"
      >
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
          Previous{" "}
        </span>
      </button>
      <button
        class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="next"
      >
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
          {" "}
          Next{" "}
        </span>
      </button>
    </div>
  );
};
export default Carrousel;
