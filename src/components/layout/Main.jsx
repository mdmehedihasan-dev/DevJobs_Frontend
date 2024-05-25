import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import Footer from "../Footer"

const Main = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>


    </div>
  )
}

export default Main