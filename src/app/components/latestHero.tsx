import React from 'react'
import Image from 'next/image'
import { ProductData } from './FeaturedHero'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
const LatestHero = async () => {
  const quary = `
  *[_type == "product" && category == "Chair"]{
  _id,
   "image":image.asset->url,
  name,
  price,
  description,
  discountPercentage,
}[9..11]
  `
  const data1:ProductData[] = await client.fetch(quary);
  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-around mx-5 mt-5'>
      {
        data1.map((items:ProductData)=>{
          return(
            <div key={items._id} className='md:w-[360px] w-[260px] h-[326px] md:mt-0 mt-3 shadow-md'>

          
          <div className='bg-[rgba(247,247,247,1)] pl-[73px] pt-[33px]'>
          <Link href={`product/${items._id}`}>
            <Image
            className='md:w-[223px] w-[150px] h-[200px] md:h-[229px]'
            src={items.image}
            alt={items.name}
            width={200}
            height={200}            
            />
            </Link>
            </div>
           
            <div className='flex justify-between'>
              <p className='text-[rgba(21,24,117,1)]'>{items.name}</p>
              <p>
              ${items.price} <span className='text-pink-600 font-semibold'></span> </p>
            </div>
            
        </div>
          )
        })
      }
        {/* <div className='md:w-[360px] w-[260px] h-[326px] md:mt-0 mt-3 shadow-md'>
          <div className='bg-[rgba(247,247,247,1)] pl-[73px] pt-[33px]'>
            <Image
            className='md:w-[223px] w-[150px] h-[200px] md:h-[229px]'
            src={'/images/image 1166.png'}
            alt='chier'
            width={200}
            height={200}            
            />
            </div>
            <div className='flex justify-between'>
              <p className='text-[rgba(21,24,117,1)]'>SaleComfort Handy Craft</p>
              <p> $42.00 <span className='text-pink-600 font-semibold'> $65.00 </span> </p>
            </div>
        </div> */}

        {/* <div className='md:w-[360px] md:h-[306px] md:mt-0 mt-3 w-[260px] h-[326px] shadow-md'>
          <div className='pl-[73px] pt-[33px]'>
            <Image
            className='md:w-[223px] md:h-[229px]  w-[150px] h-[200px]'
            src={'/images/image 15.png'}
            alt='chier 2'
            width={200}
            height={200}            
            />
            </div>
            <div className='flex justify-between'>
              <p className='text-[rgba(21,24,117,1)]'>SaleComfort Handy Craft</p>
              <p> $42.00 <span className='text-pink-600 font-semibold'> $65.00 </span> </p>
            </div>
        </div>

       <div className='md:w-[360px] md:h-[306px] mt-3 md:mt-0 w-[260px] h-[326px] shadow-md'>
          <div className='bg-[rgba(247,247,247,1)] pl-[73px] pt-[33px]'>
            <Image
            className='md:w-[223px] md:h-[229px]  w-[150px] h-[200px]'
            src={'/images/image 1168.png'}
            alt='chier 3'
            width={200}
            height={200}            
            />
            </div>
            <div className='flex justify-between'>
              <p className='text-[rgba(21,24,117,1)]'>SaleComfort Handy Craft</p>
              <p> $42.00 <span className='text-pink-600 font-semibold'> $65.00 </span> </p>
            </div>
        </div> */}
     
    </div>
  )
}

export default LatestHero