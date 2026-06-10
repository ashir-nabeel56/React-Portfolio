import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Navbar from '../component/global/navbar'
import About from '../pages/about'
import Project from '../pages/project'
import Home from '../component/home'
import NotFound from '../pages/NotFound'
import Footer from '../component/global/footer'
import Contact from '../pages/contact'
// import Error from '../pages/Error'

function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/home" element={<Home/>}/>
               
                {/* <Route  path="/PROJECT" element={<Project/>}/> */}
                
               
                <Route  path="/about" element={<About/>}/>
                <Route  path="/project" element={<Project/>}/>
                <Route  path="/contact" element={<Contact/>}/>
        <Route  path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default Routing
