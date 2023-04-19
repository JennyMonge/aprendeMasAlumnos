import React from "react";
import img1 from '../assets/bigstock-221705413-min (1).jpg';
import img2 from '../assets/imagen-convalidaciones-768x512.png';
import img3 from '../assets/online-communication-scaled.jpg'
function Cards() {
  return (
    <div>
      <div class="flex justify-center bg-[url(https://img.freepik.com/vector-gratis/fondo-degradado-dia-mundial-ciencia_52683-97461.jpg?w=740&t=st=1680825484~exp=1680826084~hmac=6a33eecd13c42974b48f1189d745ac2bbbef9d24e57b52a6ea3ee6bc92947c45)] bg-cover bg-center bg-no-repeat">
        <div class="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl">
          <div class="flex flex-col justify-center items-center ">
            <div class="text-xl md:text-3xl text-amber-500 font-bold uppercase ">
            Materia  de Tercer ciclo hasta Bachillerato
            </div>
            <div class="border-b-4 border-amber-500  -mt-2">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:scale-105">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  src={img1}
                  alt="image"
                  class="lg:b-72 md:h-48 w-full object-cover object-center"
                />
                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in text-center">
                  <h1 class="text-2xl font-semibold mb-3"> Materia de Tercer ciclo</h1>
                  <p class="leading-relaxed mb-3 text-bCasi">
                  * Ciencia, Salud y Medio Ambiente 
                  </p>
                  <p class="leading-relaxed mb-3 text-bCasi">
                  * Estudios Sociales y Cívica 
                  </p>
                  <p class="leading-relaxed mb-3 text-bCasi">
                  * Programa de Estudios del Idioma Inglés 
                  </p>
                  <p class="leading-relaxed mb-3 text-bCasi">
                  * Lenguaje y Literatura 
                  </p>
                  <p class="leading-relaxed mb-3 text-bCasi">
                  * Matematicas
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:scale-105">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  src={img2}
                  alt="image"
                  class="lg:b-72 md:h-48 w-full object-cover object-center"
                />
                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in text-center">
                  <h1 class="text-2xl font-semibold mb-3">frases motivadora </h1>
                  <p class="leading-relaxed mb-3  text-bCasi">
                  Cree en ti mismo y en lo que eres. Se consciente de que hay algo en tu interior que es más grande que cualquier obstáculo que la vida te ponga ,tu siempre muestra que tu puede con cualquier cosa .
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:scale-105">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden text-center">
                <img
                  src={img3}
                  alt="image"
                  class="lg:b-72 md:h-48 w-full object-cover object-center"
                />
                <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h1 class="text-2xl font-semibold mb-3">Materia de Bachillerato</h1>
                  <p class="leading-relaxed mb-3  text-bCasi">
                  * Ciencias Naturales 
                  </p>
                  <p class="leading-relaxed mb-3  text-bCasi">
                  * Estudios Sociales y Cívica 
                  </p>
                  <p class="leading-relaxed mb-3  text-bCasi">
                  * Informática
                  </p>
                  <p class="leading-relaxed mb-3  text-bCasi">
                  * Ciencias Naturales 
                  </p>
                  <p class="leading-relaxed mb-3  text-bCasi">
                  * Ciencias Naturales 
                  </p>
                  <p class="leading-relaxed mb-3  text-bCasi">
                  * Ciencias Naturales 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;