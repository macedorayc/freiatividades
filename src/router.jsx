import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/principal';
import NotFound from './pages/notfound';


export default function Navegacao() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Principal/>}/> 
            <Route path='*' element={<NotFound/>}/>

        </Routes>
        </BrowserRouter>
    )
}