import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Comprar from './Pages/Comprar';
import Buscar from './Pages/Buscar';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/comprar/:id' element={<Comprar/>}/>
            <Route path='/buscar/:termo' element={<Buscar/>}/>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
