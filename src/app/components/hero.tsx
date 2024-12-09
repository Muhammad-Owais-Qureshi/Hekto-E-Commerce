import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='mt-5'>
        <Image
        className='w-full'
        src={'/images/promotional.png'}
        alt='Hero'
        width={1100}
        height={1100}
        />
    </div>
  )
}

export default Hero