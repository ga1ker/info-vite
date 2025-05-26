import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./layout";



export default function AppRouter(){
    return(   
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element= {<HomePage></HomePage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        
    )
}