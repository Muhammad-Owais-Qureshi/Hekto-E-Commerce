import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Eroor404 = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Image src='/images/Group 123.png' alt='404' width={600} height={600} />
      </div>
      <div className='flex justify-center mb-10'>
     <Link href="/home"><button className='bg-[rgba(251,46,134,1)] px-5 py-2 rounded-sm text-white'>Back To Home</button></Link> 
      </div>
    </div>
  )
}

export default Eroor404