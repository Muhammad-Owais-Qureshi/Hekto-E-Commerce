import React from 'react'
import Image from 'next/image'
import { ProductData } from './FeaturedHero'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

const TopCet = async () => {
     const quary = `
          *[_type == "product" && category == "Chair"]{
            _id,
           "image":image.asset->url,
          name,
          price,
          description,
          discountPercentage,
        }[8..11]
          `
          const data1:ProductData[] = await client.fetch(quary);
  return (
    <div>
        <h1 className='text-center md:text-[42px] text-3xl text-[rgba(26,11,91,1)] font-bold mt-5'>Top Categories</h1>

        <div className='flex flex-col justify-center items-center md:flex-row md:justify-around mt-8'>
          {
            data1.map((items:ProductData)=>{
              return(
                <div key={items._id} className='w-[269px] h-[345px]'> 
                <div className='bg-[rgba(246,247,251,1)] rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                  <Link href={`product/${items._id}`}>
                <Image
                  className='w-[178px] h-[178px]'
                  src={items.image}
                  alt={items.name}
                  width={200}
                  height={200}          
                />
                </Link>
                </div>
                <p className='text-[rgba(21,24,117,1)] text-center pt-3'>{items.name}</p>
                <p className='text-[rgba(21,24,117,1)] text-center py-3'>${items.price}</p>
            </div>
              )
            })
          }
            {/* <div className='w-[269px] h-[345px]'> 
                <div className='bg-[rgba(246,247,251,1)] rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                <Image
                  className='w-[178px] h-[178px]'
                  src={'/images/image 20.png'}
                  alt='chier'
                  width={200}
                  height={200}          
                />
                </div>
                <p className='text-[rgba(21,24,117,1)] text-center pt-3'>Mini LCW Chair</p>
                <p className='text-[rgba(21,24,117,1)] text-center py-3'>$56.00</p>
            </div>
            <div className='w-[269px] h-[345px]'> 
                <div className='bg-[rgba(246,247,251,1)] rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                <Image
                  className='w-[178px] h-[178px]'
                  src={'/images/image 1168.png'}
                  alt='chier2'
                  width={200}
                  height={200}          
                />
                </div>
                <p className='text-[rgba(21,24,117,1)] text-center pt-3'>Mini LCW Chair</p>
                <p className='text-[rgba(21,24,117,1)] text-center py-3'>$56.00</p>
            </div>
            <div className='w-[269px] h-[345px]'> 
                <div className='bg-[rgba(246,247,251,1)] rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                <Image
                  className='w-[178px] h-[178px]'
                  src={'/images/image 1171.png'}
                  alt='chier3'
                  width={200}
                  height={200}          
                />
                </div>
                <p className='text-[rgba(21,24,117,1)] text-center pt-3'>Mini LCW Chair</p>
                <p className='text-[rgba(21,24,117,1)] text-center py-3'>$56.00</p>
            </div>
            <div className='w-[269px] h-[345px]'> 
                <div className='bg-[rgba(246,247,251,1)] rounded-full w-[269px] h-[269px] flex justify-center items-center'>
                <Image
                  className='w-[178px] h-[178px]'
                  src={'/images/image 20.png'}
                  alt='chier'
                  width={200}
                  height={200}          
                />
                </div>
                <p className='text-[rgba(21,24,117,1)] text-center pt-3'>Mini LCW Chair</p>
                <p className='text-[rgba(21,24,117,1)] text-center py-3'>$56.00</p>
            </div> */}
        </div>
    </div>
  )
}

export default TopCet