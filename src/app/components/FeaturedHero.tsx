import React from 'react'
import Image from 'next/image'
const FeaturedHero = () => {
  return (
    <div className='flex justify-around mx-20'>
        <div>
        <Image
        className='w-[270px] h-[361px]'
        src={'/images/Component 8.png'}
        alt='white ch'
        width={250}
        height={200}
        />
        </div>
        <div>
        <Image
           className='w-[270px] h-[361px]'
           src={'/images/Featured product (1).png'}
           alt='white ch'
           width={250}
           height={200}
        />
        </div>
        <div>
        <Image
        className='w-[270px] h-[361px]'
         src={'/images/Component 3.png'}
         alt='white ch'
         width={250}
         height={200}
        />
        </div>
        <div>
        <Image
        className='w-[270px] h-[361px]'
         src={'/images/Component 4.png'}
         alt='white ch'
         width={250}
        height={200}
        />
        </div>
    </div>
  )
}

export default FeaturedHero