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
    <div className='bg-purple-600 flex justify-evenly text-white items-center h-10'>
        <div className='flex justify-between gap-5'>
            <p className='pt-1'><MdOutlineMailOutline /></p>
          <Link href={'/'}> <p>mhhasanul@gmail.com</p> </Link> 
          <p className='pt-1'><FiPhoneCall /></p>
          <p>(12345)67890</p>
        </div>
        <div >
            <ul className='flex justify-between gap-6 items-center'>
                <li>English <RiArrowDropDownLine className='inline-block' /> </li>
                <li>USD <RiArrowDropDownLine className='inline-block'/></li>
                <li>Login <VscAccount className='inline-block' /></li>
                <li>Wishlist <CiHeart className='inline-block'/></li>
                <li><LuShoppingCart /></li>
            </ul>
        </div>
    </div>
  )
}

export default TopHeader