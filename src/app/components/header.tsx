"use client"
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu , RxCross2 } from "react-icons/rx";
import NavSlider from './sideNav';
const Header = () => {
  const [nav, setNav] = useState<boolean>(false)
  return (
    <div className='md:flex md:justify-around md:items-center md:mt-6'>
        <div className='md:flex md:justify-evenly font-semibold'>
            <h1 className='text-2xl font-bold pl-2 md:font-extrabold md:pl-28'>Hekto</h1>
            <ul className='md:flex md:justify-between md:gap-10 md:pl-28 font-semibold'>
               <Link href={'/home'}><li className='hidden md:block hover:text-[rgba(251,46,134,1)]'>Home <RiArrowDropDownLine className='inline-block'/></li></Link> 
               <Link href={'/pagesd'}><li className='hidden md:block hover:text-[rgba(251,46,134,1)]'>Pages</li></Link> 
               <Link href={'/product'}><li className='hidden md:block hover:text-[rgba(251,46,134,1)]'>Products</li></Link> 
               <Link href={'/blog'}><li className='hidden md:block hover:text-[rgba(251,46,134,1)]'>Blog </li></Link> 
               <Link href={'/shop'}><li className='hidden md:block hover:text-[rgba(251,46,134,1)]'>Shop</li></Link> 
               <Link href={'/contact'}><li className='hidden md:block hover:text-[rgba(251,46,134,1)]'>Contact</li></Link> 

               <button onClick={() => setNav(!nav) } className="hover:scale-105 bottom-5 text-black font-extrabold ml-7 mt-1 md:hidden">
                  
                  {nav ? <RxCross2 /> : <RxHamburgerMenu />}

                </button>
                  {nav && <NavSlider />}
            </ul>
        </div>
        <div className='flex ml-1 md:mr-24'>
            <input className='border-gray-300 border-2 hidden md:block w-12 md:w-28' type="search" />
            <p className='bg-[rgba(251,46,134,1)] md:px-4 md:py-2 md:w-10 px-3 py-1 w-5 text-white hidden md:block'><CiSearch /></p>
        </div>

    </div>
  )
}

export default Header