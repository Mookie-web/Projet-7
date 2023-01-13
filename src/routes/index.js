import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home/Home";
import LayoutDefault from "../layouts/Default";
import LayoutBlank from "../layouts/Blank";
import Error404 from "../pages/Error/Error404";
import About from "../pages/About/About";
// import House from "../pages/House/House";
import Fiche from "../pages/Fiche_Logement/Fiche"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutDefault/>}>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/logement/:id" element={<Fiche/>}></Route>
                    <Route path="/fiche/:id" element={<Fiche/>}></Route>
                </Route>

                <Route element={<LayoutBlank/>}>
                    <Route path="*" element={<Error404/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
