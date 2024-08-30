import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About/about"
import Contact from "../pages/Contact/contact"
import Events from "../pages/Events/events"

const Routing=()=>{
    return(
        <>
         <Routes>
<Route  path="/" element={<Home/>}  />
<Route  path="/events" element={<Events/>}  />
<Route  path="/aboutus" element={<About/>}  />
<Route  path="/contactus" element={<Contact/>}  />
        </Routes>
        </>
    )
}

export default Routing