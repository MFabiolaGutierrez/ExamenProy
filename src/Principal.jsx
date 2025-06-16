import { BrowserRouter, Route, Routes,Link  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './Barra.jsx'; 
import PaginaInicio from "./paginas/PaginaInicio.jsx";
import PagiansOfertas from "./paginas/PaginasOfertas.jsx";
import NavBarra from "./NavBarra.jsx";
import Pie from "./Pie.jsx";
import "./index.css";

export default function Principal() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Barra />
      <NavBarra />
      <div className="flex-fill container mt-4">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/oferta" element={<PagiansOfertas />} />
        </Routes>
      </div>
      <Pie />
    </div>
  );
}
