import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="mt-5 flex justify-between w-full h-[764px] bg-[rgba(247,247,247,1)]">
      <div>
        <Image
          className="w-[387px] h-[387px] "
          src={"/images/image 32.png"}
          alt="Hero"
          width={400}
          height={200}
        />
        </div>

        <div className="mt-52 w-[600px] h-[248px] mr-20 box-content">

        <p className="text-[rgba(251,46,134,1)]">Best Furniture For Your Castle....</p>
        <h1 className="text-[rgba(0,0,0,1)] text-4xl font-bold leading-[50px]">New Furniture Collection Trends in 2020 </h1>
        <p className="text-[rgba(138,146,185,1)] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Magna in est adipiscing in phasellus non in justo.
        </p>

        <button className="bg-[rgba(251,46,134,1)] text-white px-6 py-3 mt-4 rounded-md">Shop Now</button>
      </div>

      <div className="mt-5 mr-12">
      <Image
          className="w-[706px] h-[689px] "
          src={"/images/sofa.png"}
          alt="Hero"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default Hero;
