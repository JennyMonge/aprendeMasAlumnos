import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "../../vistas/Nosotros";
import Login from "../../vistas/Login";
import Inicio from "../../vistas/Inicio";
import Registro from "../../vistas/Registro";
import FormForgot from "../FormForgot";
import Dasboard from "../../vistas/Dasboard";
import Materia from "../../vistas/Materia";
import Perfil from "../../vistas/Perfil";
import EditarPerfil from "../../vistas/EditarPerfil";
import Calificaciones from "../../vistas/Calificaciones";
import Insignias from "../../vistas/Insignias";
import Cuestionario from "../../vistas/Cuestionario";
import CQuiz from "../../vistas/CQuiz";
import Servicios from "../../vistas/Servicios";
import Contactos from "../../vistas/Contactos";





export default function Router() {

    return(
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/contactos" element={<Contactos/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/forgot-password" element={<FormForgot/>}/>
          <Route path="/dasboard" element={<Dasboard/>}/>
          <Route path="/materia" element={<Materia/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/editar-perfil" element={<EditarPerfil/>}/>
          <Route path="/calificaciones" element={<Calificaciones/>}/>
          <Route path="/insignias" element={<Insignias/>}/>
          <Route path="/cuestionario" element={<Cuestionario/>}/>
          <Route path="/quiz" element={<CQuiz/>}/>
          </Routes>
        </BrowserRouter>
    )

}