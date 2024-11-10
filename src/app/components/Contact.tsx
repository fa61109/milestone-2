import React from 'react'
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl text-red-500' data-aos="zoom-in">Get in touch</h2>
            <p className='text-gray-300 text-[18px] pt-2'  data-aos="zoom-in">
               Feel Free To Contact Me
            </p>
            <div className='flex gap-3 items-center text-white'  data-aos="zoom-in">
                <FiMail size={30} /> fa61109@gmail.com
            </div>
            <div className='flex gap-3 items-center text-white'  data-aos="zoom-in">
            <BsTelephone size={30} /> (0300) 2395263
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'  data-aos="zoom-in">
                <label htmlFor="name">Name</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent' id='name'/>
            </div>
            <div className='flex flex-col gap-1'  data-aos="zoom-in">
                <label htmlFor="email">Email</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent' id='email'/>
            </div>
            <div className='flex flex-col gap-1'  data-aos="zoom-in">
                <label htmlFor="msg">Message</label>
                <textarea className=' bg-transparent border border-accent' id='msg' rows={8}>
                    </textarea>
            </div>
            <button className='bg-accent p-2 px-6'  data-aos="zoom-in">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
