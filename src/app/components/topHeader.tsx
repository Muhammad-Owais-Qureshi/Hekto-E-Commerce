import React from 'react'
import Link from 'next/link'
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
const TopHeader = () => {
  return (
    <div className='bg-[rgba(126,51,224,1)] w-screen md:w-full text-white flex flex-col leading-8 pl-3 py-2 h-[265px] 
                    md:h-10 md:flex md:justify-around md:flex-row md:px-10 '>
        <div className='md:flex md:justify-between md:flex-row md:gap-5'>
            <p className='pt-1 '><MdOutlineMailOutline /></p>
          <Link href={'/'}> <p>mhhasanul@gmail.com</p> </Link> 
          <p className='pt-1'><FiPhoneCall /></p>
          <p>(12345)67890</p>
        </div>
        <div className='flex flex-col md:flex md:justify-between md:flex-row md:gap-4'>
            <ul className='md:flex md:justify-between md:flex-row md:gap-6 md:items-center'>
                <li>English <RiArrowDropDownLine className='inline-block' /> </li>
                <li>USD <RiArrowDropDownLine className='inline-block'/></li>
             <Link href={'/login'}> <li>Login <VscAccount className='inline-block' /></li></Link>
                <li>Wishlist <CiHeart className='inline-block'/></li>
                <Link href={"/shopingCart"}>  <li className='hover:text-pink-500'><LuShoppingCart /></li></Link> 
            </ul>
        </div>
    </div>
  )
}

export default TopHeader