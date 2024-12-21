"use client"
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
const NavSlider= () => {
 
  return (
    <div className="text-orange w-[100%] bg-white text-slate-900">
        <nav>
            <ul className="ml-2">
                <Link href={"/"} className="p-1 hover:text-[rgba(251,46,134,1)] md:hidden" ><li>Home</li><RiArrowDropDownLine className='inline-block'/></Link>
                <Link href={"/pagesd"} className="p-1 hover:text-[rgba(251,46,134,1)] md:hidden" ><li>Pages</li></Link>
                <Link  href={"/product"} className="p-1 hover:text-[rgba(251,46,134,1)] md:hidden"><li>Products</li></Link>
                <Link href={"/blog"} className="p-1 hover:text-[rgba(251,46,134,1)] md:hidden" ><li>Blog</li></Link>
                <Link href={'/shop'}><li className='p-1 md:hidden hover:text-[rgba(251,46,134,1)]'>Shop</li></Link>
                <Link href={'/contact'}><li className='p-1 md:hidden hover:text-[rgba(251,46,134,1)]'>Contact</li></Link> 
            </ul>
                    <div className='md:flex md:mr-24 flex items-center'>
                      
                        <input className='border-gray-300 border-2 ml-2 mt-1 md:hidden h-[36px]' type="search" />
                        <p className='bg-[rgba(251,46,134,1)] md:px-4 md:py-2 px-2 py-2 h-7 rounded-sm text-white md:hidden'><CiSearch /></p>
            
                    </div>
        </nav>
    </div>
  )
}

export default NavSlider