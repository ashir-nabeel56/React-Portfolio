// import React from 'react'
import '../component/global/all.css'
import aboutImage from '../assist/our.jpeg'

function about() {
  return (
     <div className={"border-line"}>
      <h1 className={"about-sec"} > About US</h1>
      <div className={"convert"}>
        
        <img className={"about-image"}  src={aboutImage} alt="my image" />
        
        <div className={"who-iam"} >
          <h2 className={"apna"}>Who Iam  <br /><hr /></h2>
            <p className={"text"}>"Hi, I'm a Web Developer who thrives at the intersection of logic and design. To me, a website is more than just lines of code; it is a digital gateway that allows brands to grow and connect authentically with their audience.

I specialize in crafting seamless, intuitive user interfaces that prioritize user experience without compromising on performance. By integrating robust back-end features and ensuring every element is fully responsive, I bridge the gap between complex functionality and aesthetic elegance. My goal is to deliver high-quality web applications that are as lightning-fast as they are visually stunning, ensuring your digital presence is not just seen, but remembered."</p>
        </div>
      </div>
    </div>
  )
}

export default about
