import React from "react";
import Aside from "../components/Aside";
import Nav from "../components/Nav";


function Insignias() {
  return (
    <div className="flex" >
      <Aside/>
      <div className="w-full">
        <Nav/>
      </div>
    </div>
  );
}

export default Insignias;