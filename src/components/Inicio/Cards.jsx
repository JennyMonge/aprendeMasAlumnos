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
              Testimonio
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
                  <h1 class="text-2xl font-semibold mb-3">texto impornta</h1>
                  <p class="leading-relaxed mb-3 text-bCasi">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, libero quisquam. Aliquam consequatur itaque cupiditate
                    explicabo sequi. Minus neque, illo commodi ipsa sit unde
                    nulla eveniet excepturi blanditiis, officiis porro?
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
                  <h1 class="text-2xl font-semibold mb-3">texto impornta</h1>
                  <p class="leading-relaxed mb-3  text-bCasi">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, libero quisquam. Aliquam consequatur itaque cupiditate
                    explicabo sequi. Minus neque, illo commodi ipsa sit unde
                    nulla eveniet excepturi blanditiis, officiis porro?
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
                  <h1 class="text-2xl font-semibold mb-3">texto impornta</h1>
                  <p class="leading-relaxed mb-3  text-bCasi">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, libero quisquam. Aliquam consequatur itaque cupiditate
                    explicabo sequi. Minus neque, illo commodi ipsa sit unde
                    nulla eveniet excepturi blanditiis, officiis porro?
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