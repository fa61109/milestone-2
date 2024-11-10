import React from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import Skills from './Skills'
import About from './About'
const Hero = () => {
  return (
    <div id= "hero" className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-cover' 
    style={{backgroundSize:"20%", backgroundPosition :"left 350px top 180px"}}>
     <Navbar/>
    
    
     <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text- [100px] font-bold font leading-tight flex justify-center items-center text-center p-10 m-10 left 100px text-white '>
            <div>
                <p  data-aos="zoom-in">Welcome</p>
                <p  data-aos="zoom-in">To My</p>
                <p  data-aos="zoom-in">Portfolio</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Hero
