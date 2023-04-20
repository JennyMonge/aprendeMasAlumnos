import React from "react";

function Contents() {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://unedmadrid.es/wp-content/uploads/2019/12/estudiantes.jpg"
                class="absolute inset-0 h-full w-full object-cover" 
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">Ventajas </h2>

              <p class="mt-4 text-gray-600">
              De las principales ventajas del uso de esta página es que sin duda alguna permite al estudiante a repasar los principales tópicos que se desarrollan mediante todo el año lectivo, ayudando al alumno a tener un objetivo más concreto por unidad repasada, reforzando y conociendo los principales temas a mejorar y viendo así su área de oportunidades.
              </p>

              <a
                href="#"
                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                saber mas 
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 bg-aFuerte2">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://academia.unad.edu.co/images/2020/red-de-estudiantes/red-de-estudiantes-2.jpg"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  ¿para que sirve la app?
                </h2>

                <p class="mt-4 text-gray-600">
                Es útil para que el estudiante comprenda los conocimientos de la materia que le brinda el docente, a través de este le hará una serie de preguntas para determinar si el estudiante entiende la materia o si necesita repasarla, y al completarla le hará algunas preguntas. 
                </p>

                <a
                  href="#"
                  class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  aprender mas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://imagenes.elpais.com/resizer/9feF5YapQWz2N5tf4eHnkIvvmEc=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/S3WRYFIV2QNEZFG6ND5G7XYOWM.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">¿Que es QuestionsApps?</h2>

              <p class="mt-4 text-gray-600">
              Una aplicación que educa a los estudiantes a través de sus conocimientos y logros en cada materia que han tomado y completado y ayuda a los maestros a evaluar a los estudiantes a través del contenido subido.
              </p>

              <a
                href="#"
                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                aprender mas 
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-aFuerte text-gray-100 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">Tipos de pregunta  sobre de la app</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-aFuerte3">Para que se utiliza la app</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
Esta aplicación es utilizada principalmente por estudiantes y profesores. Para los estudiantes, es una herramienta para aprender de la manera correcta y ser recompensados por sus esfuerzos, y para los profesores, ayuda a los estudiantes a que tenga un aprendizaje correcto y calificar contenido.
</p>
          </div>
          
          <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">iniciar </button>
        </div>
      </div>
    </div>
  );
}

export default Contents;