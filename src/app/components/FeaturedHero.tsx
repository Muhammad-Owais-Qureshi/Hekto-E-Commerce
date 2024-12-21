import React from "react";
import Image from "next/image";
const FeaturedHero = () => {
  return (
    <div className="flex flex-col md:justify-around md:flex-row md:mx-20 md:mt-5 px-5 mt-3">
      <div className="md:w-[270px] md:h-[361px] w-[220px] h-[250px] flex flex-col shadow-md">
        <div className="bg-[rgba(246,247,251,1)] md:pt-[46px] md:pl-[40px] pt-[27px] pl-[32px] md:w-[270px] md:h-[236px] w-[220px] h-[150px]">
          <Image
            className="md:w-[170px] md:h-[170px] w-[125px] h-[125px]"
            src={"/images/image 1168.png"}
            alt="ch one"
            width={250}
            height={200}
          />
        </div>

        <div className="mt-4 text-center flex justify-center flex-col">
          <p className="text-[rgba(251,46,143,1)]">Cantilever chair</p>

          <div className="flex justify-around w-10 ml-28">
            <button className="bg-green-900 w-2 h-1"></button>
            <button className="bg-red-500 w-2 h-1"></button>
            <button className="bg-yellow-400 w-2 h-1"></button>
          </div>

          <p>Code - Y523201</p>
          <p>$42.00</p>
        </div>
      </div>
      <div className="md:w-[270px] md:h-[361px] w-[220px] h-[250px] flex flex-col shadow-md">
        <div className="bg-[rgba(246,247,251,1)] md:pt-[48px] pt-[17px] md:pl-[79px] pl-[55px] mt-4 md:w-[270px] md:h-[236px] w-[220px] h-[140px]">
          <Image
            className="md:w-[130px] md:h-[150px] w-[100px] h-[120px]"
            src={"/images/image 1.png"}
            alt="ch two"
            width={250}
            height={200}
          />
        </div>
        <div>
          <div className="mt-4 text-center flex justify-center flex-col">
            <p className="text-[rgba(251,46,143,1)]">Cantilever chair</p>

            <div className="flex justify-around w-10 ml-28">
              <button className="bg-green-900 w-2 h-1"></button>
              <button className="bg-red-500 w-2 h-1"></button>
              <button className="bg-yellow-400 w-2 h-1"></button>
            </div>

            <p>Code - Y523201</p>
            <p>$42.00</p>
          </div>
        </div>
      </div>

      <div className="md:w-[270px] md:h-[361px] w-[220px] h-[250px] flex flex-col shadow-md">
        <div className="bg-[rgba(246,247,251,1)] pt-[48px] pl-[79px] w-[270px] h-[236px]">
          <Image
            className="w-[130px] h-[150px]"
            src={"/images/image 1169.png"}
            alt="ch three"
            width={250}
            height={200}
          />
        </div>
        <div>
          <div className="mt-4 text-center flex justify-center flex-col">
            <p className="text-[rgba(251,46,143,1)]">Cantilever chair</p>

            <div className="flex justify-around w-10 ml-28">
              <button className="bg-green-900 w-2 h-1"></button>
              <button className="bg-red-500 w-2 h-1"></button>
              <button className="bg-yellow-400 w-2 h-1"></button>
            </div>

            <p>Code - Y523201</p>
            <p>$42.00</p>
          </div>
        </div>
      </div>
      <div className="md:w-[270px] md:h-[361px] w-[220px] h-[250px] flex flex-col shadow-md">
        <div className="bg-[rgba(246,247,251,1)] pt-[53px] pl-[26px] w-[270px] h-[236px]">
          <Image
            className="w-[216px] h-[151px]"
            src={"/images/image 3.png"}
            alt="ch four"
            width={250}
            height={200}
          />
        </div>
        <div>
          <div className="mt-4 text-center flex justify-center flex-col">
            <p className="text-[rgba(251,46,143,1)]">Cantilever chair</p>

            <div className="flex justify-around w-10 ml-28">
              <button className="bg-green-900 w-2 h-1"></button>
              <button className="bg-red-500 w-2 h-1"></button>
              <button className="bg-yellow-400 w-2 h-1"></button>
            </div>

            <p>Code - Y523201</p>
            <p>$42.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHero;
