"use client"

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container pt-10'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium text-red-500'>FAIZAN ELAHI</div>
        <ul className='gap-10 lg:gap-8 hidden md:flex text-red-500'>
          <li className='menulink'><a href='#Hero'>Home</a></li>
          <li className='menulink'><a href="#Skills">Skills</a></li>
          <li className='menulink'><a href="#About">About</a></li>
          <li className='menulink'><a href='#Contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;