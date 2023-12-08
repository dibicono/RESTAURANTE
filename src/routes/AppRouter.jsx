import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../paginas/Home";
import Contacto from "../paginas/Contacto";
import Ubicacion from "../paginas/Ubicacion";

const NotFound = () => <h1>404: pagina no encontrada</h1>;

function AppRouter() {

    return (

        <>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="404" element={<NotFound />} />

                <Route path="Home" element={<Home />} />
                <Route path="Contacto" element={<Contacto />} />
                <Route path="Ubicacion" element={<Ubicacion />} />

            </Routes>

        </>
    );

}

export default AppRouter;