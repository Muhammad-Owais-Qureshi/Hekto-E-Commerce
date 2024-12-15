import Link from 'next/link'
import React from 'react'

const Latest = () => {
  return (
    <div >
        <div className='text-center text-[42px] text-[rgba(21,24,117,1)] font-bold mt-5'>
        <h1>Leatest Products</h1>
        </div>
        <div className='flex justify-center mt-5'>
            <ul className='flex justify-between gap-5'>
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