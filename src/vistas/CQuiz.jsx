import React from "react";
import preguntas from "../preguntas";



function CQuiz() {
  return (
    <div className="border pt-10">
      
      <div className="lado-izquierdo text-center pt-8 justify justify-between">
       <div className="numero-pregunta">
      <span className="text-2xl font-bold text-cyan-900">Pregunta 1 de </span>
       </div>
       <div className="tituto-pregunta">
          Cual es tu nombre?
       </div>
      </div>
      <div className="text-center lado-derecho">
        <button >opcion 1</button>
        <button>opcion 2</button>
        <button>opcion 3</button>
        <button>opcion 4</button>
      </div>
    </div>
  );
}

export default CQuiz;