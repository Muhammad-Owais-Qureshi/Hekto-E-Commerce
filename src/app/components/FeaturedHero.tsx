import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
export interface ProductData {

  name: string;
  price: number;
  image: string;
  discountPrice: number;
  _id: number;
}

const  FeaturedHero  = async () =>   {
   

  const quary = `
  *[_type == "product" && category == "Chair"]{
  _id,
   "image":image.asset->url,
  name,
  price,
  description,
  discountPercentage,
  }[5..8]
  `
  const data1:ProductData[] = await client.fetch(quary);
  // console.log(data1)
  return (
    
    <div className="flex flex-col justify-center items-center md:justify-around md:flex-row md:mx-20 md:mt-5 px-5 mt-3 h-auto">
      {
        data1.map((items:ProductData)=>{
           return(
            <div key={items._id}>
            <div className="md:w-[270px] md:h-[361px] w-[220px] h-[250px] flex flex-col shadow-md">
            <div className="bg-[rgba(246,247,251,1)] md:pt-[46px] md:pl-[40px] pt-[27px] pl-[32px] md:w-[270px] md:h-[236px] w-[220px] h-[150px]">
             <Link href={`product/${items._id}`}>
              <Image
              
                className="md:w-[170px] md:h-[170px] w-[125px] h-[125px]"
                src={items.image}
                alt={items.name}
                width={250}
                height={200}
              />
              </Link>
            </div>
    
            <div className="mt-4 text-center flex justify-center flex-col">
              <p className="text-[rgba(251,46,143,1)]">{items.name}</p>
    
              <div className="flex justify-around w-10 ml-28">
                <button className="bg-green-900 w-2 h-1"></button>
                <button className="bg-red-500 w-2 h-1"></button>
                <button className="bg-yellow-400 w-2 h-1"></button>
              </div>
    
              <p>Code - Y523201</p>
              <p>{items.price}</p>
            </div>
          </div>
          </div>
           )
        })
      }
      {/* <div className="md:w-[270px] md:h-[361px] w-[220px] h-[250px] flex flex-col shadow-md">
        <div className="bg-[rgba(246,247,251,1)] md:pt-[46px] md:pl-[40px] pt-[27px] pl-[32px] md:w-[270px] md:h-[236px] w-[220px] h-[150px]">
          <Image
            className="md:w-[170px] md:h-[170px] w-[125px] h-[125px]"
            src={urlFor(data1.image).url()}
            alt={data1.name}
            width={250}
            height={200}
          />
        </div>

        <div className="mt-4 text-center flex justify-center flex-col">
          <p className="text-[rgba(251,46,143,1)]">{data1.name}</p>

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
            src={data1.image}
            alt={data1.name}
            width={250}
            height={200}
          />
        </div>
        <div>
          <div className="mt-4 text-center flex justify-center flex-col">
            <p className="text-[rgba(251,46,143,1)]">{data1.name}</p>

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

      <div className="md:w-[270px] md:h-[361px] mt-4 w-[220px] h-[250px] flex flex-col shadow-md">
        <div className="bg-[rgba(246,247,251,1)] pt-[48px] pl-[79px] w-[220px] md:w-[270px] h-[236px]">
          <Image
            className="md:w-[130px] md:h-[150px] w-[100px] h-[120px]"
            src={data1.image}
            alt={data1.name}
            width={250}
            height={200}
          />
        </div>
        <div className="">
          <div className="mt-4 text-center flex justify-center flex-col ">
            <p className="text-[rgba(251,46,143,1)]">
              {data1.name}
            </p>

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

      <div className="md:w-[270px] md:h-[361px] w-[220px] h-[290px] mt-6 flex flex-col shadow-md">
        <div className="bg-[rgba(246,247,251,1)] pt-[53px] pl-[26px] w-[220px] md:w-[270px] md:h-[236px]">
          <Image
            className="md:w-[216px] md:h-[151px] w-[150px] "
            src={data1.image}
            alt={data1.name}
            width={250}
            height={200}
          />
        </div>
        <div>
          <div className="mt-4 text-center flex justify-center flex-col">
            <p className="text-[rgba(251,46,143,1)]">{data1.name}</p>

            <div className="flex justify-around w-10 ml-28">
              <button className="bg-green-900 w-2 h-1"></button>
              <button className="bg-red-500 w-2 h-1"></button>
              <button className="bg-yellow-400 w-2 h-1"></button>
            </div>

            <p>Code - Y523201</p>
            <p>$42.00</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedHero;
