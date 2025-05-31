import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout";
import AcercaDe from "./pages/Acercade";
import SobreNosotros from "./pages/Sobrenosotros";

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element= {<Layout />}>
                    <Route path="/" element= {<HomePage />} />
                    <Route path="/acerca-de" element= {<AcercaDe />} />
                    <Route path="/sobre-nosotros" element= {<SobreNosotros />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}   