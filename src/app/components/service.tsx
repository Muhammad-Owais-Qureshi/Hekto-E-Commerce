import React from 'react'
import Image from 'next/image'
const Service = () => {
  return (
    <div className='flex justify-around mt-5'>
        <div className='flex flex-col items-center leading-8 w-[270px] h-[320px] shadow-md pt-16'>
            <Image
            className='w-[65px] h-[65px]'
            src={'/images/Group.png'}
            alt='truck'
            height={150}
            width={150}
            />
            <h1 className='text-center pt-5 text-[rgba(21,24,117,1)] font-semibold'>24/7 Support</h1>
            <p className='text-center pt-5 text-[rgba(26,11,91,0.3)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>

        <div className='flex flex-col items-center leading-8 w-[270px] h-[320px] shadow-md pt-16'>
            <Image
            className='w-[65px] h-[65px]'
            src={'/images/cashback 1.png'}
            alt='cash'
            height={200}
            width={150}
            />
            <h1 className='text-center pt-5 text-[rgba(21,24,117,1)] font-semibold'>24/7 Support</h1>
            <p className='text-center pt-5 text-[rgba(26,11,91,0.3)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
         <div className='flex flex-col items-center leading-8 w-[270px] h-[320px] shadow-md pt-16'>
            <Image
            className='w-[65px] h-[65px]'
            src={'/images/premium-quality 1.png'}
            alt='quality'
            height={200}
            width={150}
            />
            <h1 className='text-center pt-5 text-[rgba(21,24,117,1)] font-semibold'>24/7 Support</h1>
            <p className='text-center pt-5 text-[rgba(26,11,91,0.3)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        <div className='flex flex-col items-center leading-8 w-[270px] h-[320px] shadow-md pt-16'>
            <Image
            className='w-[65px] h-[65px]'
            src={'/images/24-hours-support 1.png'}
            alt='24hours'
            height={150}
            width={150}
            />
            <h1 className='text-center pt-5 text-[rgba(21,24,117,1)] font-semibold'>24/7 Support</h1>
            <p className='text-center pt-5 text-[rgba(26,11,91,0.3)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    </div>
  )
}

export default Service