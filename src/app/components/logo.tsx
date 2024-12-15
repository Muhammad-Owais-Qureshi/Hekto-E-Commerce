import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='flex justify-center'>
        <Image
        className='w-[904px] h-[93px]'
        src={'/images/image 1174.png'}
        alt='logo'
        width={700}
        height={700}
        />
    </div>
  )
}

export default Logo