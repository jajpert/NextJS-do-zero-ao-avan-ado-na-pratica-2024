import {BrowserRouter, Route, Routes as RoutesRD} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>

            <RoutesRD>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/sobre" element={<Sobre/>}/>
                <Route exact path="/contato" element={<Contato/>}/>
                <Route path='/produto/:id' element={<Produto/>}/>
                
                <Route path='*' element={<Erro/>}/>
            </RoutesRD>
        </BrowserRouter>

    )
}

export default Routes;