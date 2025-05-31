import { Outlet } from "react-router-dom";
import Layout from "./layout";

export default function App() {

  return (
    <div>
      <Layout />
      <Outlet />
    </div>
  )
}
