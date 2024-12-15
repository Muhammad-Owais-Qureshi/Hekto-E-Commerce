import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-around items-center mt-6'>
        <div className='flex justify-evenly '>
            <h1 className='text-2xl font-extrabold pl-28'>Hekto</h1>
            <ul className='flex justify-between gap-10 pl-28 font-semibold'>
               <Link href={'/'}><li className='hover:text-[rgba(251,46,134,1)]'>Home <RiArrowDropDownLine className='inline-block'/></li></Link> 
               <Link href={'/pagesd'}><li className='hover:text-[rgba(251,46,134,1)]'>Pages</li></Link> 
               <Link href={'/product'}><li className='hover:text-[rgba(251,46,134,1)]'>Products</li></Link> 
               <Link href={'/blog'}><li className='hover:text-[rgba(251,46,134,1)]'>Blog </li></Link> 
               <Link href={'/shop'}><li className='hover:text-[rgba(251,46,134,1)]'>Shop</li></Link> 
               <Link href={'/contact'}><li className='hover:text-[rgba(251,46,134,1)]'>Contact</li></Link> 
            </ul>
        </div>
        <div className='flex mr-24'>
            <input className='border-gray-300 border-2' type="search" />
            <p className='bg-[rgba(251,46,134,1)] px-4 py-2 text-white'><CiSearch /></p>

        </div>
    </div>
  )
}

export default Header