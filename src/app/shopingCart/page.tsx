"use client"
import {useState,useEffect} from 'react'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IData } from '../product/[id]/page';


const ShoppingCart = () => {
  
    const [cartItems, setCartItems] = useState<{ [key: string]: IData }>({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    setCartItems(storedCart);
  }, []);
  
   const handleRemove = (id:string) => {
    const newCartItems = { ...cartItems };
    delete newCartItems[id];
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
   }
  return (
    <>
       <div className="flex justify-between md:flex-row md:justify-between mx-24 mt-16">
       <div>
      <h2 className="text-lg font-bold">Shopping Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {Object.values(cartItems).map((item) => (
            <div key={item._id} className="flex flex-col justify-between md:flex-row md:justify-between mx-24 mt-16 gap-10">
                <div className="flex justify-between md:flex-row md:justify-between mx-24 mt-16 gap-10 w-full">
                <div>
                 <h1 className="text-[rgba(29,49,120,1)] font-bold">Product</h1>
                 <div className="flex mt-8 mr-10 w-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={83}
                    height={50}
                  />
                  <div className="flex flex-col ml-3">
                    <h1 className='w-5'>{item.name}</h1>
                    <p className="text-[rgba(161,168,193,1)]">Color:Brown</p>
                    <p className="text-[rgba(161,168,193,1)]">Size:XL</p>
                  </div>
                </div>
                 </div>
                <div>
                <h1 className="text-[rgba(29,49,120,1)] font-bold mt-3 md:mt-0">Prize</h1>
                <div className="">
                  <p className="md:mt-8 mt-4">{item.price}</p>
                </div>
                </div>
                <div>
                <h1 className="text-[rgba(29,49,120,1)] font-bold md:mt-0 mt-3">Quantity</h1>
                <div>
                <p className="md:mt-8 mt-4">{item.quantity}</p>
                   {/* <button className="md:mt-8 mt-4">+</button>
                   <button className="md:mt-8 mt-4">-</button>
                    */}
                 </div>
                </div>
                <div>
                <h1 className="text-[rgba(29,49,120,1)] md:mt-0 mt-3 font-bold">Total</h1>
                <div>
                    <p className="md:mt-8 mt-4">{item.price * item.quantity}</p>
                  </div>
                  <button onClick={()=>handleRemove(item._id)} className='bg-[rgba(251,46,134,1)] text-white md:px-6 md:py-2 px-4 py-2 mt-4'>Remove</button>
                </div>
              
                </div>
            </div>
          ))}
        
        </ul>
      )}
    </div>
                {/* <div className="flex justify-around w-full">
                <div>
                 <h1 className="text-[rgba(29,49,120,1)] font-bold">Product</h1>
                 <div className="flex mt-8">
                  <Image
                    src={"/images/Rectangle 34.png"}
                    alt="purse"
                    width={83}
                    height={87}
                  />
                  <div className="flex flex-col ml-3">
                    <h1>Ut diam consequat</h1>
                    <p className="text-[rgba(161,168,193,1)]">Color:Brown</p>
                    <p className="text-[rgba(161,168,193,1)]">Size:XL</p>
                  </div>
                </div>
                 </div>
                <div>
                <h1 className="text-[rgba(29,49,120,1)] font-bold mt-3 md:mt-0">Prize</h1>
                <div className="">
                  <p className="md:mt-8 mt-4">$32.00</p>
                </div>
                </div>
                <div>
                <h1 className="text-[rgba(29,49,120,1)] font-bold md:mt-0 mt-3">Quantity</h1>
                <div>
                   
                   <button className="md:mt-8 mt-4">+</button>
                   <button className="md:mt-8 mt-4">-</button>
                   
                 </div>
                </div>
                <div>
                <h1 className="text-[rgba(29,49,120,1)] md:mt-0 mt-3 font-bold">Total</h1>
                <div>
                    <p className="md:mt-8 mt-4">$219.00</p>
                  </div>
                </div>
                </div> */}
              
              </div>
      <div className="">
          <h1 className="text-[rgba(29,49,120,1)] font-bold text-center text-2xl">
            Cart Totals
          </h1>

          <div className="w-[371px] h-[284px] bg-[rgba(244,244,252,1)] md:mr-0 mr-10">
            <div className="flex justify-around mt-5">
              <div className="pt-5 text-[rgba(29,49,120,1)] text-2xl font-semibold">
                Subtotals:
              </div>
              <div className="pt-5 text-[rgba(29,49,120,1)] text-2xl font-semibold">
                £219.00
              </div>
            </div>
            <p className="border-b-2 border-[rgba(232,230,241,1)] mt-4 mx-4"></p>

            <div className="flex justify-around mt-5">
              <div className="pt-5 text-[rgba(29,49,120,1)] text-2xl font-semibold">
                Totals:
              </div>
              <div className="pt-5 text-[rgba(29,49,120,1)] text-2xl font-semibold">
                £325.00
              </div>
            </div>
            <p className="border-b-2 border-[rgba(232,230,241,1)] pt-4 px-4"></p>
            <p className="pt-7 text-[rgba(138,145,171,1)] text-center">
              Shipping & taxes calculated at checkout
            </p>
            <div className="flex justify-center items-center mt-4 mb-4">
              <button className="md:px-16 px-8 py-3 bg-[rgba(25,209,111,1)] text-white">
                Proceed To Checkout
              </button>
            </div>
          </div>
          <div className="">
            <h1 className="text-[rgba(29,49,120,1)] font-bold text-center mt-5 text-2xl">
              Calculate Shopping
            </h1>
            <div className="w-[371px] h-[284px] bg-[rgba(244,244,252,1)] mt-5">
              <div className="ml-3 pt-4">
                <p className="text-[rgba(197,203,227,1)]">Bangladesh</p>
                <p className="border-b-2 border-[rgba(232,230,241,1)] pt-4 px-4"></p>
              </div>
              <div className="ml-3 pt-4">
                <p className="text-[rgba(197,203,227,1)]">
                  Mirpur Dhaka - 1200
                </p>
                <p className="border-b-2 border-[rgba(232,230,241,1)] pt-4 px-4"></p>
              </div>
              <div className="ml-3 pt-4">
                <p className="text-[rgba(197,203,227,1)]">Postal Code</p>
                <p className="border-b-2 border-[rgba(232,230,241,1)] pt-4 px-4"></p>
              </div>
              <div className="mt-5 ml-5">
                <button className="bg-[rgba(251,46,134,1)] md:px-12 px-8 py-4 text-white">
                  Calculate Shiping
                </button>
              </div>
            </div>
          </div>
        </div>
      <div className="flex justify-around mt-5">
        <div >
           <Link href={'/comCart'}><button className="bg-[rgba(251,46,134,1)] px-12 py-3 text-white">Update Curt</button></Link> 
        </div>
        <div>
            <button className="bg-[rgba(251,46,134,1)] px-12 py-3 text-white">Clear Curt</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
