"use client";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { useParams } from "next/navigation"; 
import { useEffect, useState } from "react"; 
import { client } from "@/sanity/lib/client";



export interface IData {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
  category: string;
  quantity: number;
}

const Product = () => {
  const { id } = useParams(); // ✅ Dynamic ID from URL
  const [product, setProduct] = useState<IData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!id) return;

    const fetchData = async () => {
      try {
        const query = `
          *[_type == "product" && _id == $id][0] {
            _id,
            "image": image.asset->url,
            name,
            price,
            description,
            discountPercentage,  
            stockLevel,
            category
          }
        `;
        const data: IData = await client.fetch(query, { id });
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id])

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

    
      const handleClike = (product:IData) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "{}")  
        if(cart[product._id]){
          cart[product._id].quantity += 1
       }else{
        cart[product._id] = { ...product, quantity: 1 }
       }
       localStorage.setItem("cart", JSON.stringify(cart))
     
      }
      
      
    
  return (
    <>
     <div className="">
        <h1 className="text-[rgba(16,23,80,1)] text-center mt-7 text-3xl font-bold">
          Product Details
        </h1>
        <div className="flex justify-around mt-10 md:w-[1170px] h-[509px] w-screen shadow-xl md:mx-auto">
          <div className="flex flex-col">
            <Image
              className="mb-3 md:w-[151px] md:h-[155px] w-[90px] h-[90px]"
              src={product.image}
              alt={product.name}
              width={151}
              height={155}
            />
            <Image
              className="mb-3 md:w-[151px] md:h-[155px] w-[90px] h-[90px]"
              src={product.image}
              alt={product.name}
              width={151}
              height={155}
            />
            <Image
              className="mb-3md:w-[151px] md:h-[155px] w-[90px] h-[90px]"
              src={product.image}
              alt={product.name}
              width={155}
              height={155}
            />
          </div>
          <div className="flex leading-9">
            <Image
              className="md:w-[375px] md:h-[487px] w-[300px] h-[300px] md:ml-10 ml-4"
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col pl-10">
            <h1 className="text-[rgba(13,19,78,1)] text-2xl md:text-3xl font-semibold">
              {product.name}
            </h1>
            <div className="flex gap-2 text-yellow-300 mt-3">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <p className="text-[rgba(21,24,117,1)]">(22)</p>
            </div>

            <p className="text-[rgba(21,24,117,1)]">
              ${product.price}
              <span className="line-through text-[rgba(251,46,134,1)] ml-4">
                ${product.price + 10}
              </span>
            </p>
            <h3 className="mt-2 text-[rgba(21,24,117,1)]">Color</h3>
            <p className="mt-2 text-[rgba(169,172,198,1)] md:w-[400px] w-[200px] md:h-[45px] h-auto">
              {product.description}
            </p>
            <button onClick={()=>handleClike(product)} className="text-center mt-4 text-[rgba(21,24,117,1)] font-semibold">
              Add To Cart <CiHeart className="inline-block" />
            </button>
            <h2 className="text-[rgba(21,24,117,1)] my-2">Categories: {product.category}</h2>
            <h2 className="text-[rgba(21,24,117,1)] my-2">Tags</h2>
            <div className="flex gap-5">
              <h2 className="text-[rgba(21,24,117,1)]">Share</h2>
              <FaFacebook className="text-blue-600" />
              <RiInstagramFill className="text-pink-600" />
              <IoLogoTwitter className="text-blue-800" />
            </div>
          </div>
        </div>
      </div>

   
       
      <div className="px-5 py-8 mt-10 bg-[rgba(249,248,254,1)] ">
        <div className="flex flex-col md:flex-row gap-5 mt-10 text-[rgba(21,24,117,1)] text-2xl font-semibold">
          <div>Description</div>
          <div>Additional Info</div>
          <div>Reviews</div>
          <div>Video</div>
        </div>
        <div className="mt-10">
          <h2 className="text-[rgba(21,24,117,1)] font-semibold">Varius tempor.</h2>
          <p className="text-[rgba(169,172,198,1)] mt-4">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>
        <div className="text-[rgba(169,172,198,1)] mt-10">
          <h2 className="text-[rgba(21,24,117,1)] font-semibold">More details</h2>
          <p className="mt-4">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
      </div>
      <h1 className="text-[rgba(16,23,80,1)] font-bold text-2xl mt-5 ml-5">Related Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:w-[1170px] md:h-[509px] h-auto shadow-xl mx-auto">
       
        <div>
          <div className="w-[270px]">
            <Image
            src={"/images/Rectangle 128.png"}
            alt="Product"
            width={300}
            height={300}
            />
            <div className="flex justify-between  my-2 pl-3">
              <div className="text-[rgba(21,24,117,1)] font-semibold">Mens Fashion Wear</div>
              <div className="text-yellow-300 flex gap-1">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              
            </div>
            <p className="text-[rgba(21,24,117,1)] font-semibold pl-3">$32.00</p>
          </div>
        </div>
        <div >
          <div className="w-[270px]">
            <Image
            src={"/images/Group 233.png"}
            alt="Product"
            width={300}
            height={300}
            />
            <div className="flex justify-between  my-2 pl-3">
              <div className="text-[rgba(21,24,117,1)] font-semibold">Mens Fashion Wear</div>
              <div className="text-yellow-300 flex gap-1">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              
            </div>
            <p className="text-[rgba(21,24,117,1)] font-semibold pl-3">$32.00</p>
          </div>
      
        </div>
        <div className="">
          <div className="w-[270px]">
            <Image
            className="rounded-md"
            src={"/images/Rectangle 130.png"}
            alt="Product"
            width={300}
            height={300}
            />
            <div className="flex justify-between  my-2 pl-3">
              <div className="text-[rgba(21,24,117,1)] font-semibold">Mens Fashion Wear</div>
              <div className="text-yellow-300 flex gap-1">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              
            </div>
            <p className="text-[rgba(21,24,117,1)] font-semibold pl-3">$32.00</p>
          </div>
        </div>
        <div className="">
          <div className="w-[270px]">
            <Image
            className="rounded-md"
            src={"/images/Rectangle 131.png"}
            alt="Product"
            width={300}
            height={300}
            />
            <div className="flex justify-between  my-2 pl-3">
              <div className="text-[rgba(21,24,117,1)] font-semibold">Mens Fashion Wear</div>
              <div className="text-yellow-300 flex gap-1">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              
            </div>
            <p className="text-[rgba(21,24,117,1)] font-semibold pl-3">$32.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
