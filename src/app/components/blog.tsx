import React from "react";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
  return (
    <div>
      <h1 className="text-center text-[42px] text-[rgba(26,11,91,1)] font-bold mt-5">
        Leatest Blog
      </h1>
      <div className="flex justify-around mt-6">
        <div className="w-[370px] h-[493px] shadow-md">
          <div>
            <Image
              className="w-[370px] h-[255px]"
              src={"/images/Frame 2 .png"}
              alt="home"
              width={200}
              height={200}
            />
          </div>

          <div className="ml-3">
            <div className="mt-3">
            <div className="flex">
              <Image
                className="w-[11.33px] h-[11.33px]"
                src={"/images/Vector.png"}
                alt="pin"
                width={12}
                height={12}
              />
              <p>SaberAli</p>
            </div>
            <div className="flex mt-3">
              <Image
                className="w-[11.33px] h-[11.33px]"
                src={"/images/Uil.png"}
                alt="celender"
                width={12}
                height={12}
              />
              <p>21 August,2020</p>
              </div>
            </div>

            <div>
              <h1 className='text-[rgba(26,11,91,1)] w-[248px] h-[18px] font-semibold mt-5'>Top esssential Trends in 2021</h1>
              <p className="w-[297px] h-[60px] pt-5 text-[rgba(114,113,143,1)]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <Link href={"/"}>
                <p className="pt-10 text-[rgba(21,24,117,1)]">Read More</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[493px] shadow-md">
          <div>
            <Image
              className="w-[370px] h-[255px]"
              src={"/images/Frame3.png"}
              alt="home"
              width={200}
              height={200}
            />
          </div>

          <div className="ml-3">
            <div className="mt-3">
            <div className="flex">
              <Image
                className="w-[11.33px] h-[11.33px]"
                src={"/images/Vector.png"}
                alt="pin"
                width={12}
                height={12}
              />
              <p>SaberAli</p>
            </div>
            <div className="flex mt-3">
              <Image
                className="w-[11.33px] h-[11.33px]"
                src={"/images/Uil.png"}
                alt="celender"
                width={12}
                height={12}
              />
              <p>21 August,2020</p>
              </div>
            </div>

            <div>
              <h1 className='text-[rgba(26,11,91,1)] w-[248px] h-[18px] font-semibold mt-5'>Top esssential Trends in 2021</h1>
              <p className="w-[297px] h-[60px] pt-5 text-[rgba(114,113,143,1)]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <Link href={"/"}>
                <p className="pt-10 text-[rgba(21,24,117,1)]">Read More</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[370px] h-[493px] shadow-md">
          <div>
            <Image
              className="w-[370px] h-[255px]"
              src={"/images/Frame.png"}
              alt="home"
              width={200}
              height={200}
            />
          </div>

          <div className="ml-3">
            <div className="mt-3">
            <div className="flex">
              <Image
                className="w-[11.33px] h-[11.33px]"
                src={"/images/Vector.png"}
                alt="pin"
                width={12}
                height={12}
              />
              <p>SaberAli</p>
            </div>
            <div className="flex mt-3">
              <Image
                className="w-[11.33px] h-[11.33px]"
                src={"/images/Uil.png"}
                alt="celender"
                width={12}
                height={12}
              />
              <p>21 August,2020</p>
              </div>
            </div>

            <div>
              <h1 className='text-[rgba(26,11,91,1)] w-[248px] h-[18px] font-semibold mt-5'>Top esssential Trends in 2021</h1>
              <p className="w-[297px] h-[60px] pt-5 text-[rgba(114,113,143,1)]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <Link href={"/"}>
                <p className="pt-10 text-[rgba(21,24,117,1)]">Read More</p>
              </Link>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Blog;
