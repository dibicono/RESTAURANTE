import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../PAGINAS/Home";
import Contacto from "../PAGINAS/Contacto";
import Ubicacion from "../PAGINAS/Ubicacion";

const PageNoFound = () =>   <h1>404: PageNoFound</h1>;

    function AppRouter() {

    return (

    <>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />;
            <Route path="*" element={<Navigate to="404" />} />;
            <Route path="404" element={<Navigate to="NotFound" />} />;

            <Route path="Home" element={<Navigate to="Home" />} />;
            <Route path="Contacto" element={<Navigate to="Contacto" />} />;
            <Route path="Ubicacion" element={<Navigate to="Ubicacion" />} />;

        </Routes>

    </>
    );
  
}

    export default AppRouter;