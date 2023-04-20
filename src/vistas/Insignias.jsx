import React from "react";
import Aside from "../components/Aside";
import Nav from "../components/Nav";

function Insignias() {
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Nav />
        <div className="ml-16 mt-8 bg-bCasi text-aFuerte2">
          <div class="mx-4 text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Insignias</h2>
          </div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="mx-4 text-left">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Usuario- Jennifer Monge
              </h2>
            </div>
            <div className="mt-4  grid grid-cols-1 gap-8  sm:grid-cols-2  lg:grid-cols-3">
              <div className="md:col-span-2 lg:col-span-1 bg-gray-300 rounded-xl">
                <div class="mt-6 mx-4 text-left ">
                  <h2 class="text-xl font-bold sm:text-2xl">Matematicas</h2>
                </div>
                <div className="flex p-4 justify-start">
                  <div class="flex-shrink-0 w-16 h-16 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center"></div>
                  <div class="h-5 mt-6 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "45%" }}
                    >
                      {" "}
                      45%
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-1 bg-gray-300 rounded-xl">
                <div class="mt-6 mx-4 text-left ">
                  <h2 class="text-xl font-bold sm:text-2xl">Matematicas</h2>
                </div>
                <div className="flex p-4 justify-start">
                  <div class="flex-shrink-0 w-16 h-16 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center"></div>
                  <div class="h-5 mt-6 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "45%" }}
                    >
                      {" "}
                      45%
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-1 bg-gray-300 rounded-xl">
                <div class="mt-6 mx-4 text-left ">
                  <h2 class="text-xl font-bold sm:text-2xl">Matematicas</h2>
                </div>
                <div className="flex p-4 justify-start">
                  <div class="flex-shrink-0 w-16 h-16 bg-blue-600 text-blue-500 rounded-full inline-flex items-center justify-center"></div>
                  <div class="h-5 mt-6 w-full bg-gray-200 rounded-full">
                    <div
                      class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-full"
                      style={{ width: "45%" }}
                    >
                      {" "}
                      45%
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

export default Insignias;
