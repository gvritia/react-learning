import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home.jsx";
import CarDatail from "../screens/car-datail/CarDatail.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/'/>
                <Route element={<CarDatail />} path='/car/:id' />

                <Route path='*' element={<div>Not found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;