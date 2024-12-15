import React from "react";
import Image from "next/image";
import Logo from "./logo";
import Link from "next/link";
const Shopcard = () => {
  return (
    <>
    <div>
      <div className="flex justify-around mt-16 mx-5">
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
           <Link href={"product/products1"}><Image
            id = "1"
            className="w-[201px] h-[201px]"
              src={"/images/image 9.png"}
              alt="gary"
              width={150}
              height={150}
            />
            </Link> 
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Vel elit euismod</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Link href={"product/products2"}><Image
          
            id="2"
            className="w-[169px] h-[169px]"
              src={"/images/image 1165.png"}
              alt="pink sofa"
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Ultricies condimentum imperdiet</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Link href={`product/products3`}>
            <Image
            id="3"
            className="w-[201px] h-[201px]"
              src={"/images/image-gray 1173.png"}
              alt="gary"
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Vitae suspendisse sed</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Image
            id="4"
            className="w-[188px] h-[188px]"
              src={"/images/10011 1.png"}
              alt="gary"
              width={150}
              height={150}
            />
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Sed at fermentum</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex justify-around mt-16 mx-5">
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Link href={"/product/products"}>
            <Image
            id = "5"
            className="w-[128px] h-[139px]"
              src={"/images/watch.png"}
              alt="watch"
              width={150}
              height={150}
            />
            </Link>
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Vel elit euismod</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Image
             id = "6"
            className="w-[154px] h-[158px]"
              src={"/images/watch2.png"}
              alt="watch2"
              width={150}
              height={150}
            />
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Vestibulum magna laoreet</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Image
            id="7"
            className="w-[114px] h-[144px]"
              src={"/images/head.png"}
              alt="head"
              width={150}
              height={150}
            />
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Sollicitudin amet orci</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Image
            id="8"
            className="w-[167px] h-[167px]"
              src={"/images/image 1164.png"}
              alt="gary"
              width={150}
              height={150}
            />
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Ultrices mauris sit</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex justify-around mt-16 mx-5">
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Image
            id="9"
            className="w-[170px] h-[151px]"
              src={"/images/watch3.png"}
              alt="watch3"
              width={150}
              height={150}
            />
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Vel elit euismod</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Image
            id="10"
            className="w-[169px] h-[158px]"
              src={"/images/cam 2.png"}
              alt="cam"
              width={150}
              height={150}
            />
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Cras scelerisque velit</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Image
            id="11"
            className="w-[176px] h-[176px]"
              src={"/images/head2.png"}
              alt="head2"
              width={150}
              height={150}
            />
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Lectus vulputate faucibus</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[rgba(246,247,251,1)] w-[270px] h-[280px] flex justify-center items-center">
            <Image
            id="12"
            className="w-[188px] h-[188px]"
              src={"/images/10011 1.png"}
              alt="gary"
              width={150}
              height={150}
            />
          </div>
          <div >
            <h2 className="text-[rgba(21,24,117,1)] text-center mt-2">Vestibulum magna laoreet</h2>
            <div className=" flex justify-center mt-2">
            <button className="bg-[rgba(222,144,52,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(236,66,162,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            <button className="bg-[rgba(133,104,255,1)] rounded-full w-[10px] h-[10px] mr-1"></button>
            </div>
            <p className="text-center text-[rgba(21,24,117,1)] mt-2">
              $26.00
              <span className="text-[rgba(251,46,134,1)]"> $42.00 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10">
    <Logo/>
    </div>
   
    </>
  );
};

export default Shopcard;
