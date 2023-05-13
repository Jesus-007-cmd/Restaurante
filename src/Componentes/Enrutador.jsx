//import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PaginaComidas from './PaginaComidas';
import PaginaP from './PaginaP';
import RegistroOiniciarSesion from './RegistroOiniciarSesion';
import PaginaDescripcion from './PaginaDescripcion';
function Enrutador() {
    return (
        <Routes>
            <Route path='/' element={<PaginaP/>}/>
            <Route path='/index' element={<PaginaP/>} />
            <Route path='/Comidas' element={<PaginaComidas/>} />
            <Route path='/Datos' element={<RegistroOiniciarSesion/>} />
            <Route path='/AcercadeNosotros' element={<PaginaDescripcion/>} />
        </Routes>
    )
}

export default Enrutador;