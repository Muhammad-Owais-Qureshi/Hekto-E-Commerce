import React from 'react'
import Image from 'next/image'
const LatexstHero2 = () => {
  return (
    <div className='flex justify-around mx-5 mt-16'>
           <div>
            <Image
            src={'/images/Component 10.png'}
            alt='chier'
            width={300}
            height={300}            />
        </div>
        <div>
            <Image
            src={'/images/Component 11.png'}
            alt='chier'
            width={300}
            height={300}            />
        </div>
        <div>
            <Image
            src={'/images/Component 12.png'}
            alt='chier'
            width={300}
            height={300}            />
        </div>
    </div>
  )
}

export default LatexstHero2