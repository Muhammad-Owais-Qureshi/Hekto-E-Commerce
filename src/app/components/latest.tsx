import Link from 'next/link'
import React from 'react'

const Latest = () => {
  return (
    <div >
        <div className='text-center text-2xl md:text-[42px] text-[rgba(26,11,91,1)] font-bold mt-5'>
        <h1>Leatest Products</h1>
        </div>
        <div className='flex md:flex-row justify-center mt-5'>
            <ul className='flex flex-col md:flex-row md:justify-between gap-5'>
             <Link href={'/'}>  <li>New Arrival</li> </Link> 
             <Link href={'/'}>   <li>Best Seller</li> </Link>
             <Link href={'/'}>   <li>Featured</li> </Link>
             <Link href={'/'}>  <li>Special Offer</li> </Link> 
            </ul>
        </div>
    </div>
  )
}

export default Latest