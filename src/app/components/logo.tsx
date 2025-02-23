import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='flex justify-center'>
        <Image
        className='md:w-[904px] w-[360px] h-[93px]'
        src={'/images/image 1174.png'}
        alt='logo'
        width={700}
        height={700}
        />
    </div>
  )
}

export default Logo