import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comprar from './Pages/Comprar';
import Buscar from './Pages/Buscar';
import Layout from './components/Layout';
import Carrossel from './components/Carrossel';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Carrossel/>}/>
                <Route path='comprar/:id' element={<Comprar/>}/>
                <Route path='buscar/:termo' element={<Buscar/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
