import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 bg-[rgba(238,239,251,1)] flex flex-col pt-5 pl-4 w-[330px] md:h-[479px] md:w-full md:px-16 md:flex md:flex-row md:gap-24 md:pt-14'>
        <div>
            <div className=''>
                <h1 className='w-[110px] h-[38px] mt-3 text-[rgba(0,0,0,1)] font-bold text-3xl'>Hekto</h1>
                <div className=' mt-5'>
                <input type="search" placeholder='Enter Your Address' className='bg-[rgba(255,255,255,1)] h-[44px] w-[377px] pl-5' />
                <button className="bg-[rgba(251,46,134,1)] text-white px-6 py-2 mt-4">Sign Up</button>
                </div>
                <p className='text-[rgba(138,143,185,1)] py-2 mt-5'>Contact Info</p>
                <p className='text-[rgba(138,143,185,1)] py-2'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
        </div>
        <div>
            <div>
                <h1 className='w-[111px] h-[22px] font-semibold py-3'>Catagories</h1>
                <ul className='text-[rgba(138,143,185,1)] leading-9 mt-3'>
                    <li>Laptops & Computers</li>
                    <li>Cameras & Photography</li>
                    <li>Smart Phones & Tablets</li>
                    <li>Video Games & Consoles</li>
                    <li>Waterproof Headphones</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h1 className='w-[152px] h-[22px] font-semibold'>Customer Care</h1>
                <ul className='text-[rgba(138,143,185,1)] leading-9'>
                    <li>My Account</li>
                    <li>Discount</li>
                    <li>Returns</li>
                    <li>Orders History</li>
                    <li>Order Tracking</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h1 className='font-semibold w-[62px] h-[22px]'>Pages</h1>
                <ul className='text-[rgba(138,143,185,1)] leading-9'>
                    <li>Blog</li>
                    <li>Browse the Shop</li>
                    <li>Category</li>
                    <li>Pre-Built Pages</li>
                    <li>Visual Composer Elements</li>
                    <li>WooCommerce Pages</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer