import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { IoLogoTwitter } from "react-icons/io";
const FooterTwo = () => {
  return (
    <div className='bg-[rgba(231,228,248,1)] md:w-full w-[330px] flex justify-around h-[53px] items-center'>
        <div>
            <h1>©Webecy - All Rights Reserved</h1>
        </div>
        <div className='flex gap-5'>
            <p><FaFacebook /></p>
            <p><TbBrandLinkedinFilled /></p>
            <p><IoLogoTwitter /></p>
        </div>
    </div>
  )
}

export default FooterTwo