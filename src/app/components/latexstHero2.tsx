import React from "react";
import Image from "next/image";
const LatexstHero2 = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-around md:mx-5 mt-16">
      <div className="md:w-[360px] md:h-[306px] w-[260px] h-[326px] shadow-md">
        <div className="bg-[rgba(247,247,247,1)] pl-[73px] pt-[33px]">
          <Image
            className="w-[223px] h-[229px]"
            src={"/images/image 23.png"}
            alt="chier"
            width={200}
            height={200}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-[rgba(21,24,117,1)]">SaleComfort Handy Craft</p>
          <p>
            {" "}
            $42.00 <span className="text-pink-600 font-semibold">
              {" "}
              $65.00{" "}
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="md:w-[360px] md:h-[306px] w-[260px] h-[326px] shadow-md">
        <div className="bg-[rgba(247,247,247,1)] pl-[73px] pt-[33px]">
          <Image
            className="w-[223px] h-[229px]"
            src={"/images/image 1172.png"}
            alt="chier 2"
            width={200}
            height={200}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-[rgba(21,24,117,1)]">SaleComfort Handy Craft</p>
          <p>
            {" "}
            $42.00 <span className="text-pink-600 font-semibold">
              {" "}
              $65.00{" "}
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="md:w-[360px] md:h-[306px] w-[260px] h-[326px] shadow-md">
        <div className="bg-[rgba(247,247,247,1)] pl-[73px] pt-[33px] flex items-center justify-center">
          <Image
            className="md:w-[300px] w-[251px] h-[229px]"
            src={"/images/image 3.png"}
            alt="chier 3"
            width={250}
            height={200}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-[rgba(21,24,117,1)]">SaleComfort Handy Craft</p>
          <p>
            {" "}
            $42.00 <span className="text-pink-600 font-semibold">
              {" "}
              $65.00{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatexstHero2;
