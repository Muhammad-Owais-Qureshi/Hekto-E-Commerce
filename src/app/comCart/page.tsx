"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
const CompeletCart = () => {
  
  return (
    <div className="flex flex-col items-center justify-center w-[635px] h-[326px] mx-auto mt-20">
        <Image
        src={'/images/Vector 15.png'}
        alt="tic"
        width={46}
        height={36}
        />
      <h1 className="text-[rgba(16,23,80,1)] text-2xl font-bold pt-4">Your Order Is Completed! </h1>
      <p className="text-[rgba(141,146,167,1)] pt-4 text-center">
        Thank you for your order! Your order is being processed and will be
        completed within 3-6
        hours. You will receive an email confirmation when your order is completed.
      </p>
     <Link href={'/home'}> <button className="px-5 py-2 rounded-sm bg-[rgba(251,46,134,1)] text-white mt-7">Continue Shopping</button></Link>
    </div>
  );
};

export default CompeletCart;
