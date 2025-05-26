import { Outlet } from "react-router-dom"
import { NavigationBar } from "./components/Navigator"

export const Layout = ()=>{
    return(
        <>
            <NavigationBar />
            <Outlet/>
        </>
    )
}