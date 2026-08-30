
import Contact from '../pages/contact'
import ProjectSection from '../pages/project'
import Hero from './hero'
import Skills from './skills'
import About from '../pages/about'
function home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <ProjectSection/>
      <Contact/>
      
    </div>
  )
}

export default home
