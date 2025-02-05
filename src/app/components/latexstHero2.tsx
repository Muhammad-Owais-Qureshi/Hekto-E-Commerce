import React from "react";
import Image from "next/image";
import { ProductData } from "./FeaturedHero";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const LatexstHero2 = async () => {

    const quary = `
    *[_type == "product" && category == "Chair"]{
     _id,
     "image":image.asset->url,
    name,
    price,
    description,
    discountPercentage,
  }[12..14]
    `
    const data1:ProductData[] = await client.fetch(quary);
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-around md:mx-5 mt-16">
      {
        data1.map((items:ProductData)=>{
          return(
            <div key={items._id} className="md:w-[360px] md:h-[306px] w-[260px] h-[326px] shadow-md">
           
            <div className="bg-[rgba(247,247,247,1)] pl-[73px] pt-[33px]">
            <Link href={`product/${items._id}`}>
              <Image
                className="w-[223px] h-[229px]"
                src={items.image}
                alt={items.name}
                width={200}
                height={200}
              />
              </Link>
            </div>
            
            <div className="flex justify-between">
              <p className="text-[rgba(21,24,117,1)]">{items.name}</p>
              <p>
                
                ${items.price}
                  
                  
                
              </p>
            </div>
          </div>
          )
        })
      }
      {/* <div className="md:w-[360px] md:h-[306px] w-[260px] h-[326px] shadow-md">
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
      </div> */}
    </div>
  );
};

export default LatexstHero2;
