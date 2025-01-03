import React from "react";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between mx-24 mt-16 ">
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
          <div className="flex mt-8">
            <Image
              src={"/images/Rectangle 35.png"}
              alt="purse5"
              width={83}
              height={87}
            />
            <div className="flex flex-col ml-3">
              <h1>Ut diam consequat</h1>
              <p className="text-[rgba(161,168,193,1)]">Color:Brown</p>
              <p className="text-[rgba(161,168,193,1)]">Size:XL</p>
            </div>
          </div>
          <div className="flex mt-8">
            <Image
              src={"/images/Rectangle 36.png"}
              alt="purse6"
              width={83}
              height={87}
            />
            <div className="flex flex-col ml-3">
              <h1>Ut diam consequat</h1>
              <p className="text-[rgba(161,168,193,1)]">Color:Brown</p>
              <p className="text-[rgba(161,168,193,1)]">Size:XL</p>
            </div>
          </div>
          <div className="flex mt-8">
            <Image
              src={"/images/Rectangle 37.png"}
              alt="purse7"
              width={83}
              height={87}
            />
            <div className="flex flex-col ml-3">
              <h1>Ut diam consequat</h1>
              <p className="text-[rgba(161,168,193,1)]">Color:Brown</p>
              <p className="text-[rgba(161,168,193,1)]">Size:XL</p>
            </div>
          </div>
          <div className="flex mt-8">
            <Image
              src={"/images/Rectangle 38.png"}
              alt="purse8"
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
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:gap-40">
          <div className="">
            <h1 className="text-[rgba(29,49,120,1)] font-bold mt-3 md:mt-0">Prize</h1>
            <p className="md:mt-8 mt-4">$32.00</p>
            <p className="md:mt-24 mt-12">$32.00</p>
            <p className="md:mt-24 mt-12">$32.00</p>
            <p className="md:mt-24 mt-12">$32.00</p>
            <p className="md:mt-24 mt-12">$32.00</p>
          </div>
          <div>
            <div>
              <h1 className="text-[rgba(29,49,120,1)] font-bold md:mt-0 mt-3">Quantity</h1>
              <p className="md:mt-8 mt-4">+ | -</p>
              <p className="md:mt-24 mt-12">+ | -</p>
              <p className="md:mt-24 mt-12">+ | -</p>
              <p className="md:mt-24 mt-12">+ | -</p>
              <p className="md:mt-24 mt-12">+ | -</p>
            </div>
          </div>
          <div>
            <h1 className="text-[rgba(29,49,120,1)] md:mt-0 mt-3 font-bold">Total</h1>
            <div>
              <p className="md:mt-8 mt-4">$219.00</p>
              <p className="md:mt-24 mt-12">$219.00</p>
              <p className="md:mt-24 mt-12">$219.00</p>
              <p className="md:mt-24 mt-12">$219.00</p>
              <p className="md:mt-24 mt-12">$219.00</p>
            </div>
          </div>
        </div>
       
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

export default Page;
