import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Comprar from './Pages/Comprar';
import Buscar from './Pages/Buscar';
import Layout from './components/Layout';
import Carrossel from './components/Carrossel';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Layout}>
                <Route index Component={Carrossel}/>
                <Route path='comprar/:id' Component={Comprar}/>
                <Route path='buscar/:termo' Component={Buscar}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
