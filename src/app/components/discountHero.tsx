import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ProductData } from "./FeaturedHero";
import { client } from "@/sanity/lib/client";

const DiscountHero = async () => {
  const quary = `
    *[_type == "product" && category == "Chair"]{
    _id,
     "image":image.asset->url,
    name,
    price,
    description,
    discountPercentage,
    }[0..1]
    `
    const data1:ProductData[] = await client.fetch(quary);
  return (
    <div>
      <div>
        <h1 className="text-center md:text-[42px] text-3xl text-[rgba(26,11,91,1)] font-bold mt-5">
          Discount Item
        </h1>
      </div>
      <div>
        <ul className="flex justify-center mt-5 gap-4">
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

      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="">
          <div>
            <h1 className="md:text-[42px] text-2xl text-center text-[rgba(26,11,91,1)] font-bold mb-4 mt-5">
              20% Discount Of All Products
            </h1>
            <p className="text-[rgba(251,46,134,1)] text-center">Eams Sofa Compact</p>
            <p className="text-[rgba(183,186,203,1)] md:w-[523px] md:h-[49px] w-[330px] h-[200px] text-center leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="md:w-[523px] w-[340px] mt-5 grid grid-rows-4 ml-10 md:grid-cols-2">
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
            <button className="bg-[rgba(251,46,134,1)] text-white ml-10 px-6 py-3 mt-4 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
        <div className="pt-6">
          <Link href={`product/${data1[0]._id}`}>
          <Image
            className="w-[400px] bg-purple-200 rounded-full"
            src={"/images/doc-ch.png"}
            alt="doc"
            width={300}
            height={300}

          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscountHero;
