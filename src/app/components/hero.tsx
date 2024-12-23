import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="mt-5 flex justify-between w-screen h-[580px] md:w-full md:h-[764px] bg-[rgba(247,247,247,1)]">
      <div>
        <Image
          className="md:w-[387px] md:h-[387px] w-[200px] h-[150px]"
          src={"/images/image 32.png"}
          alt="Hero"
          width={400}
          height={200}
        />
        </div>

        <div className="md:mt-52 md:w-[600px] md:h-[248px] md:mr-20 box-content mt-20 w-[420px] h-[170px]">

        <p className="text-[rgba(251,46,134,1)]">Best Furniture For Your Castle....</p>
        <h1 className="text-[rgba(0,0,0,1)] text-2xl leading-9 md:text-4xl font-bold md:leading-[50px]">New Furniture Collection Trends in 2020 </h1>
        <p className="text-[rgba(138,146,185,1)] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Magna in est adipiscing in phasellus non in justo.
        </p>

        <button className="bg-[rgba(251,46,134,1)] text-white md:px-6 md:py-3 md:mt-4 px-3 py-[12px] mt-2 rounded-md">Shop Now</button>
      </div>

      <div className="mt-5 mr-12">
      <Image
          className="md:w-[706px] md:h-[689px] w-[350px] h-[300px]"
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
