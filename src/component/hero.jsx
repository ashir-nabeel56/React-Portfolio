import { NavLink } from 'react-router-dom'
import heroImage from '../assist/our.jpeg'



function hero() {
  return (
    <div>
         <div className="face-to-face">
      <div>
        <h1 className="font">Hi, Iam<span> Ashir Nabeel</span></h1>
        <h2 className="second-font">Iam a Web Developer</h2>
        <p className="paragraph">I am a passionate Web Developer currently honing my craft at Saylani Zaitoon Ashraf IT Park. <br /> Having built a strong foundation in frontend technologies like HTML, CSS, and JavaScript, <br /> I am now expanding my expertise into Backend Development. <br /> I love bridging the gap between sleek user interfaces <br /> and robust server-side logic to create seamless web experiences.</p>
       <NavLink to={"../project"}><button  className={"project-btn"}>View Project</button></NavLink> 
       <div>
        
       </div>
      </div>
      <img className="myImage" src={heroImage} alt="my image" />



    </div>
    </div>
  )
}

export default hero
