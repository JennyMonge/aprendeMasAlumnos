import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Nosotros() {
  return (
    <>
      <div >
        <Navbar/>
        <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
          <h1 class="text-6xl font-extrabold text-center texto-color  "> Nosotros </h1>
        </div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center  bg-blue-950 p-8 " alt="hero" src="https://img.freepik.com/fotos-premium/personas-creativas-multirraciales-oficina-moderna-grupo-jovenes-empresarios-jefe-senior-estan-trabajando-junto-computadora-portatil-tableta-telefono-inteligente-computadora-portatil-graficos-equipo-exitoso-coworking_452079-107.jpg?w=2000" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p class="mb-8 leading-relaxed ">Somos una aplicación ha sido creada con el objetivo de brindar a los estudiantes una herramienta útil y
              efectiva que les permita mejorar su rendimiento académico y aumentar su nivel de motivación y compromiso
              con sus actividades educativas.
              Para ello, hemos incorporado una serie de métodos pedagógicos que han demostrado ser altamente efectivos
              para el aprendizaje. En primer lugar, ofrecemos una amplia variedad de cuestionarios en distintas áreas
              de conocimiento, con preguntas que se ajustan a los diferentes niveles de dificultad y que ayudan al
              estudiante a consolidar sus conocimientos y a detectar sus áreas de oportunidad.</p>
          </div>
        </div>
        <div class="container ml-auto mr-auto flex flex-wrap items-start mt-8 ">
          <div class="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div
              class=" border-solid border-4 border-blue-950 bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure class="mb-2">
                <img  src="https://deproconsultores.com/wp-content/uploads/2016/12/Art-173-programa_de_administracion_por_objetivos-2-1.jpg" alt=""class="h-64 ml-auto mr-auto rounded-lg "  />
              </figure>

              <div class="rounded-lg p-4 flex flex-col ">
                <div>
                  <h5 class="text-2xl font-bold leading-none text-center text-sky-500"> Objetivo </h5>

                  <p class="mt-4.0">
                     Nuestro objetivo principal como aplicación educativa es facilitar a los
                    estudiantes el acceso a un conocimiento profundo y completo en cada materia, a través del
                    uso de cuestionarios para evaluar su comprensión y detectar áreas que requieren repaso o
                    refuerzo.
                    Con la posibilidad de monitorear sus progresos y logros,el estudiante puede contar con un
                    mayor control y visibilidad sobre su aprendizaje lo que a su vez le permitirá identificar
                    sus fortaleza y área de oportunidad y trabajar en ella de manera efectiva.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div
              class=" border-solid border-4 border-blue-950 bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure class="mb-2">
                <img src="https://www.aprendemas.com/es/blog/images/2021/03/becas_master_universidad.jpg"
                  alt="" class="h-64 ml-auto mr-auto rounded-lg " />
              </figure>

              <div class="rounded-lg p-4 flex flex-col">
                <div>
                  <h5 class="text-2xl font-bold leading-none text-center text-sky-500"> Misión </h5>
                  <p class="mt-4"> Nuestra misión es contribuir al desarrollo educativo de los estudiantes,
                    brindando una herramienta efectiva y accesible que les permita consolidar sus conocimientos,
                    mejorar su rendimiento académico y aumentar su motivación y compromiso con sus actividades
                    educativas.

                    Nos esforzamos por ofrecer contenidos de alta calidad y métodos pedagógicos innovadores que
                    se adapten a las necesidades de los estudiantes.para que puedan hacer uso de la aplicación
                    de manera efectiva. </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div
              class=" border-solid border-4 border-blue-950 bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure class="mb-2">
                <img src="https://1.bp.blogspot.com/--NPDe69M4hg/W7EiOWOZCYI/AAAAAAAAAVc/YR8eSJg9vqIzcKRXPfRM3BvzWZXkj0EOACLcBGAs/s1600/sesiones-de-charla-o-psicoterapia.jpg"
                  alt="" class="h-64 ml-auto mr-auto rounded-lg" />
              </figure>
              <div class="rounded-lg p-4 flex flex-col">
                <div>
                  <h5 class="text-2xl font-bold leading-none text-center text-sky-500"> Visión </h5>
                  <p class="mt-4"> Nuestra visión es convertirnos en una herramienta educativa de referencia,
                    reconocida por su calidad, innovación y efectividad en el apoyo al aprendizaje de los
                    estudiantes.

                    Buscamos ser una aplicación líder en el mercado, con un impacto positivo en el desarrollo
                    educativo de los estudiantes a nivel global. Aspiramos a ser una herramienta que inspire y
                    motive a los estudiantes a aprender, a través de contenidos y métodos pedagógicos que se
                    adapten a sus necesidades y preferencias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Nosotros;