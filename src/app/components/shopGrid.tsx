"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri";
const ShopGrid = () => {

  return (
    <>
    <div className='mt-7'>
        <Image
        className='w-full h-[286px]'
        src={'/images/hero-shop.jpg'}
        alt='heroimg'
        width={600}
        height={400}
        />
    </div>

    <div className='flex justify-between mt-10 mx-7'>
        <div>
        <h1 className='text-[rgba(21,24,117,1)] w-[389px] h-[22px] text-[22px] font-semibold'>Ecommerce Acceories & Fashion item </h1>
        <p className='w-[182px] h-[14px] text-xs text-[rgba(138,143,185,1)] pt-3'>About 9,620 results (0.62 seconds)</p>
        </div>
        <legend className='text-[rgba(63,80,158,1)] text-[16px] w-[66px] h-[19px] relative left-14'>Per Page:</legend>
        <input type="text" className="border-[rgba(231,230,239,1)] border-[1px] w-[55px] h-[25px]"/>
        <legend className='text-[rgba(63,80,158,1)] text-[16px] w-[66px] h-[19px]'>Short By:</legend>
     <span className='relative right-16'><RiArrowDropDownLine className='inline-block'/> </span>  <input type="text" placeholder='Best Match' className="border-[rgba(231,230,239,1)] relative right-[115px] border-[1px] w-[90px] h-[25px]"/>
     <div className='flex flex-row relative right-28'>
      <legend className='text-[rgba(63,80,158,1)] text-[16px] w-[66px] h-[19px] pr-2'>View:
        <Image
        className='relative left-11 bottom-4 '
        src={'/images/solid-list.png'}
        alt='list'
        width={12}
        height={12}
        />
        <Image
         className='relative left-[59px] bottom-7 '
        src={'/images/solid-grid.png'}
        alt='grid'
        width={12}
        height={12}
        />
      </legend>
      <input type="text" className="border-[rgba(231,230,239,1)] border-[1px] w-[90px] h-[25px] ml-2" />
      </div>
    </div>
    </>
  )
}

export default ShopGrid