import React from 'react'
import Shopcard from '@/app/components/shopcard'
const Page = ({params}:{params:{products:string}}) => {
  console.log(params.products)
  return (
    <div>
        <h1 className='text-[rgba(16,23,80,1)] text-center mt-7 text-3xl font-bold'>Product Details</h1>
      <p>hello {params.products}</p>
    </div>
  )
}

export default Page