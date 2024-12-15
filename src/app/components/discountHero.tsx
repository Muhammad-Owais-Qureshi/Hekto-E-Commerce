import Link from "next/link";
import React from "react";
import Image from "next/image";
const DiscountHero = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-[42px] text-[rgba(26,11,91,1)] font-bold mt-5">
          Discount Item
        </h1>
      </div>
      <div>
        <ul className="flex justify-center gap-4">
          <Link href={"/"}>
            {" "}
            <li className="text-[rgba(251,73,151,1)] font-semibold">
              Wood Chair
            </li>{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <li className="text-[rgba(21,24,117,1)] font-semibold">
              Plastic Chair
            </li>
          </Link>
          <Link href={"/"}>
            {" "}
            <li className="text-[rgba(21,24,117,1)] font-semibold">
              Sofa Colletion
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex justify-around">
        <div className="">
          <div>
            <h1 className="text-[42px] text-[rgba(26,11,91,1)] font-bold mt-5">
              20% Discount Of All Products
            </h1>
            <p className="text-[rgba(251,46,134,1)]">Eams Sofa Compact</p>
            <p className="text-[rgba(183,186,203,1)] w-[523px] h-[49px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="w-[523px] mt-5 grid grid-cols-2">
              <li className="text-[rgba(183,186,203,1)] w-[199px] h-[30px]">
                Material expose like metals
              </li>
              <li className="text-[rgba(183,186,203,1)] w-[238px] h-[30px]">
                Clear lines and geomatric figures
              </li>
              <li className="text-[rgba(183,186,203,1)] w-[167px] h-[30px]">
                Simple neutral colours.
              </li>
              <li className="text-[rgba(183,186,203,1)] w-[199px] h-[30px]">
                Material expose like metals
              </li>
            </ul>
            <button className="bg-[rgba(251,46,134,1)] text-white px-6 py-3 mt-4 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
        <div className="pt-6">
          <Image
            className="w-[400px] bg-purple-200 rounded-full"
            src={"/images/doc-ch.png"}
            alt="doc"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountHero;
