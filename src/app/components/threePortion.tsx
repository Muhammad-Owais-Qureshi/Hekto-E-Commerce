import React from "react";
import Image from "next/image";
const ThreePortion = () => {
  return (
    <div className="mt-16 mx-7 flex justify-around">
      <div className="bg-[rgba(255,246,251,1)] w-[420px] h-[270px]">
        <div className="pt-5 pl-5">
          <h1 className="text-[rgba(21,24,117,1)] font-bold text-2xl">
            23% off in all products
          </h1>
          <button className="text-[rgba(251,46,134,1)]">Shop Now</button>
        </div>
        <div className="ml-48">
          <Image
            className="w-[213px] h-[207px] pb-4"
            src={"/images/image 1162.png"}
            alt="clock"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="bg-[rgba(238,239,251,1)]  w-[420px] h-[270px]">
        <div className="pt-5 pl-5">
          <h1 className="text-[rgba(21,24,117,1)] font-bold text-2xl">
            23% off in all products
          </h1>
          <button className="text-[rgba(251,46,134,1)]">View Collection</button>
        </div>
        <div className="ml-48">
          <Image
            className="w-[312px] h-[173px] pb-4"
            src={"/images/image 1161.png"}
            alt="box"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex mt-4">
          <div className="bg-[rgba(238,239,251,1)] w-[107px] h-[74px] flex justify-center">
            <Image
              className="w-[64px] h-[71px]"
              src={"/images/image 30.png"}
              alt="chear"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[151px] h-[33px] mt-2 ml-2">
            <h1 className="text-[rgba(21,24,117,1)] font-semibold">
              Executive Seat chair $32.00
            </h1>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="bg-[rgba(238,239,251,1)] w-[107px] h-[74px] flex justify-center">
            <Image
              className="w-[64px] h-[71px]"
              src={"/images/image 19.png"}
              alt="chear"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[151px] h-[33px] mt-2 ml-2">
            <h1 className="text-[rgba(21,24,117,1)] font-semibold">
              Executive Seat chair $32.00
            </h1>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="bg-[rgba(238,239,251,1)] w-[107px] h-[74px] flex justify-center">
            <Image
              className="w-[64px] h-[71px]"
              src={"/images/image 28.png"}
              alt="chear"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[151px] h-[33px] mt-2 ml-2">
            <h1 className="text-[rgba(21,24,117,1)] font-semibold">
              Executive Seat chair $32.00
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreePortion;
