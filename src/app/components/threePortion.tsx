import React from "react";
import Image from "next/image";
import { ProductData } from "./FeaturedHero";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const ThreePortion = async () => {
     const quary = `
        *[_type == "product" && category == "Chair"]{
          _id,
         "image":image.asset->url,
        name,
        price,
        description,
        discountPercentage,
      }[2..6]
        `
        const data1:ProductData[] = await client.fetch(quary);
  return (
    <div className="mt-16 mx-7 flex flex-col gap-4 md:flex-row md:justify-around">
      {

      }
      <div className="bg-[rgba(255,246,251,1)] md:w-[420px] w-[340px] h-[270px]">
        <div className="pt-5 pl-5">
          <h1 className="text-[rgba(21,24,117,1)] font-bold text-2xl">
            23% off in all products
          </h1>
          <button className="text-[rgba(251,46,134,1)]">Shop Now</button>
        </div>
        <div className="ml-48">
          <Link href={`product/${data1[0]._id}`}>
          <Image
            className="w-[213px] h-[207px] pb-4"
            src={data1[0].image}
            alt={data1[0].name}
            width={200}
            height={200}
          />
          </Link>
        </div>
      </div>
      <div className="bg-[rgba(238,239,251,1)]  md:w-[420px] w-[340px] h-[270px]">
        <div className="pt-5 pl-5">
          <h1 className="text-[rgba(21,24,117,1)] font-bold text-2xl">
            23% off in all products
          </h1>
          <button className="text-[rgba(251,46,134,1)]">View Collection</button>
        </div>
        <div className="ml-48">
          <Link href={`product/${data1[1]._id}`}>
          <Image
            className="w-[312px] h-[173px] pb-4"
            src={data1[1].image}
            alt={data1[1].name}
            width={200}
            height={200}
          />
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex mt-4">
          <div className="bg-[rgba(238,239,251,1)] w-[107px] h-[74px] flex justify-center">
            <Link href={`product/${data1[2]._id}`}>
            <Image
              className="w-[64px] h-[71px]"
              src={data1[2].image}
              alt={data1[2].name}
              width={100}
              height={100}
            />
            </Link>
          </div>
          <div className="w-[151px] h-[33px] mt-2 ml-2">
            <h1 className="text-[rgba(21,24,117,1)] font-semibold">
              {data1[2].name} ${data1[2].price}
            </h1>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="bg-[rgba(238,239,251,1)] w-[107px] h-[74px] flex justify-center">
            <Link href={`product/${data1[3]._id}`}>
            <Image
              className="w-[64px] h-[71px]"
              src={data1[3].image}
              alt={data1[3].name}
              width={100}
              height={100}
            />
            </Link>
          </div>
          <div className="w-[151px] h-[33px] mt-2 ml-2">
            <h1 className="text-[rgba(21,24,117,1)] font-semibold">
              {data1[3].name} ${data1[3].price}
            </h1>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="bg-[rgba(238,239,251,1)] w-[107px] h-[74px] flex justify-center">
            <Link href={`product/${data1[4]._id}`}>
            <Image
              className="w-[64px] h-[71px]"
              src={data1[4].image}
              alt={data1[4].name}
              width={100}
              height={100}
            />
            </Link>
          </div>
          <div className="w-[151px] h-[33px] mt-2 ml-2">
            <h1 className="text-[rgba(21,24,117,1)] font-semibold">
              {data1[4].name} ${data1[4].price}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreePortion;
