import React from "react";
import Image from "next/image";
import Logo from "./logo";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { IData } from "../product/[id]/page";
const Shopcard = async () => {
      const quary = ` *[_type == "product"]{
               "image":image.asset->url,
               _id,
            name,
            price,
            description,
            discountPercentage,
          }[2..13]
            `
            const data1:IData[] = await client.fetch(quary);
  return (
    <>
    <div>
      <div className="flex flex-col md:flex-row md:justify-around mt-16 md:mx-5">
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
           <Link href={`product/${data1[0]._id}`}>
           <Image
              className="w-[201px] h-[201px]"
              src={data1[0].image}
              alt={data1[0].name}
              width={150}
              height={150}
            />
            </Link> 
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[0].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[0].price}
              
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Link href={`product/${data1[1]._id}`}>
            <Image
            className="w-[169px] h-[169px]"
              src={data1[1].image}
              alt={data1[1].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[1].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[1].price}
             
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[2]._id}`}>
            <Image
            id="3"
            className="w-[201px] h-[201px]"
              src={data1[2].image}
              alt={data1[2].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[2].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[2].price}
             
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[3]._id}`}>
            <Image
            id="4"
            className="w-[188px] h-[188px]"
              src={data1[3].image}
              alt={data1[3].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[3].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[3].price}
             
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex flex-col md:flex-row md:justify-around mt-16 md:mx-5">
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            
            <Link href={`product/${data1[4]._id}`}>
            <Image
            id = "5"
            className="w-[128px] h-[139px]"
              src={data1[4].image}
              alt={data1[4].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[4].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[4].price}
              {/* <span className="text-[rgba(251,46,134,1)]"> $42.00 </span> */}
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[5]._id}`}>
            <Image
            className="w-[154px] h-[158px]"
              src={data1[5].image}
              alt={data1[5].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[5].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[5].price}
              {/* <span className="text-[rgba(251,46,134,1)]"> $42.00 </span> */}
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[6]._id}`}>
            <Image
          
            className="w-[114px] h-[144px]"
              src={data1[6].image}
              alt={data1[6].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[6].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[6].price}
            
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[7]._id}`}>
            <Image
            id="8"
            className="w-[167px] h-[167px]"
              src={data1[7].image}
              alt={data1[7].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[7].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[7].price}
             
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex flex-col md:flex-row md:justify-around mt-16 md:mx-5">
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[8]._id}`}>
            <Image
            id="9"
            className="w-[170px] h-[151px]"
              src={data1[8].image}
              alt={data1[8].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[8].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[8].price}
         
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[9]._id}`}>
            <Image
            id="10"
            className="w-[169px] h-[158px]"
              src={data1[9].image}
              alt={data1[9].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[9].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[9].price}
            
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[10]._id}`}>
            <Image
            id="11"
            className="w-[176px] h-[176px]"
              src={data1[10].image}
              alt={data1[10].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[10].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[10].price}
            
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
          <Link href={`product/${data1[11]._id}`}>
            <Image
            id="12"
            className="w-[188px] h-[188px]"
              src={data1[11].image}
              alt={data1[11].name}
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">{data1[11].name}</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              ${data1[11].price}
             
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 md:w-full w-[270px]">
    <Logo/>
    </div>
   
    </>
  );
};

export default Shopcard;
