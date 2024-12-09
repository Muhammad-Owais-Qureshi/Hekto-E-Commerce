import React from 'react'
import Image from 'next/image'
const LatestHero = () => {
  return (
    <div className='flex justify-around mx-5'>
        <div>
            <Image
            src={'/images/Component 9.png'}
            alt='chier'
            width={300}
            height={300}            />
        </div>
        <div>
            <Image
            src={'/images/Leatest product.png'}
            alt='chier'
            width={300}
            height={300}            />
        </div>
        <div>
            <Image
            src={'/images/Component 8.png'}
            alt='chier'
            width={300}
            height={300}            />
        </div>
     
    </div>
  )
}

export default LatestHero