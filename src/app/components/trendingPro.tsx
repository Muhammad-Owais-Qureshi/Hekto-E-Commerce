import React from "react";
import Image from "next/image";
const TrendingPro = () => {
  return (
    <div>
      <h1 className="text-center text-[42px] text-[rgba(26,11,91,1)] font-bold mt-5">
        Trending Products
      </h1>
      <div className="flex justify-around mt-7">
        <div className="w-[270px] h-[350px] shadow-md flex flex-col justify-center">
          <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] flex justify-center items-center bg-[rgba(245,246,248,1)]">
            <Image
              className="w-[171px] h-[171px]"
              src={"/images/image 1171.png"}
              alt="cheir"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center mt-3">
            <h1 className="text-[rgba(26,11,91,1)] font-semibold">
              Cantilever chair
            </h1>
            <p className="text-[rgba(26,11,91,1)]">
              $26.00 <span className="text-[rgba(172,171,195,1)]">$42.00</span>
            </p>
          </div>
        </div>
        <div className="w-[270px] h-[350px] shadow-md flex flex-col justify-center">
          <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] flex justify-center items-center bg-[rgba(245,246,248,1)]">
            <Image
              className="w-[171px] h-[171px]"
              src={"/images/image 1170.png"}
              alt="cheir red"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center mt-3">
            <h1 className="text-[rgba(26,11,91,1)] font-semibold">
              Cantilever chair
            </h1>
            <p className="text-[rgba(26,11,91,1)]">
              $26.00 <span className="text-[rgba(172,171,195,1)]">$42.00</span>
            </p>
          </div>
        </div>
        <div className="w-[270px] h-[350px] shadow-md flex flex-col justify-center">
          <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] flex justify-center items-center bg-[rgba(245,246,248,1)]">
            <Image
              className="w-[171px] h-[171px]"
              src={"/images/image 1173.png"}
              alt="cheir gary"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center mt-3">
            <h1 className="text-[rgba(26,11,91,1)] font-semibold">
              Cantilever chair
            </h1>
            <p className="text-[rgba(26,11,91,1)]">
              $26.00 <span className="text-[rgba(172,171,195,1)]">$42.00</span>
            </p>
          </div>
        </div>
        <div className="w-[270px] h-[350px] shadow-md flex flex-col justify-center">
          <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] flex justify-center items-center bg-[rgba(245,246,248,1)]">
            <Image
              className="w-[171px] h-[171px]"
              src={"/images/image 1172.png"}
              alt="cheir black"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center mt-3">
            <h1 className="text-[rgba(26,11,91,1)] font-semibold">
              Cantilever chair
            </h1>
            <p className="text-[rgba(26,11,91,1)]">
              $26.00 <span className="text-[rgba(172,171,195,1)]">$42.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPro;
