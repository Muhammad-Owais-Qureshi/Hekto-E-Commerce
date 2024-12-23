import React from "react";
import Image from "next/image";
const Hero2 = () => {
  return (
    <div className="bg-[rgba(241,240,255,1)] mt-28 flex md:justify-around md:flex-row flex-col w-screen px-44 pt-14 bg-clip-border md:h-[569px] items-center">
      <div className="pl-[-9px] w-[550px] ">
        <Image
          className="pl-[40px] bg-pink-100 rounded-full md:w-[509px] w[360px]"
          src={"/images/home-sofa.png"}
          alt="sofa"
          width={600}
          height={500}
        />
      </div>
      <div>
        <div className="pl-10">
          <h1 className="md:text-[42px] text-3xl mb-3 text-[rgba(26,11,91,1)] font-bold mt-5">
            Unique Features Of leatest & Trending Poducts
          </h1>
          {/* <p ">
            

          </p> */}
          <li className="text-[rgba(251,46,134,1)]"> <span className="text-[rgba(172,171,195,1)]"> All frames constructed with hardwood solids and laminates </span></li>
          <li className="text-blue-800">
           <span className="text-[rgba(172,171,195,1)]">  Reinforced with double wood dowels, glue, screw-nails corner
            blocks and machine nails
            </span>
          </li>
          <li className="text-green-500"> <span className="text-[rgba(172,171,195,1)]">Arms, backs and seats are structurally reinforced</span></li>
          <button className="bg-[rgba(251,46,134,1)] text-white px-6 py-3 mt-4 rounded-md">
            Add To Cart
          </button>
          <p className="text-[rgba(21,24,117,1)] pt-4 font-semibold">
            B&B Italian Sofa $32.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
