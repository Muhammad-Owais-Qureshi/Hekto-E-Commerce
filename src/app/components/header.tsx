import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='flex justify-around items-center mt-6'>
        <div className='flex justify-evenly '>
            <h1 className='text-2xl font-extrabold pl-28'>Hekto</h1>
            <ul className='flex justify-between gap-10 pl-28'>
                <li>Home <RiArrowDropDownLine className='inline-block'/></li>
                <li>Pages</li>
                <li>Products</li>
                <li>Blog </li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='flex mr-24'>
            <input className='border-black' type="search" />
            <p className='bg-pink-600 px-4 py-2 text-white'><CiSearch /></p>

        </div>
    </div>
  )
}

export default Header