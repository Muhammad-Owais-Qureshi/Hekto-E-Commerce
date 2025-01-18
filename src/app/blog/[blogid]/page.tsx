import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const Blog = async ({ params: { slug } }: { params: { slug: string } }) => {

  const query = `*[_type == "post" && slug.current == slug.current] {
    image,
    name,
    heading,
    text,
  }[0]`;
  
    const data = await client.fetch(query)
    console.log(data)
  
    

  return (
    <div>
      
        <div className="container mt-10 ml-10 w-[870px] h-auto">

                    <div>
                      <Image
                       src={urlFor(data.image).url()} 
                       alt={data.name} 
                        width={870}
                        height={400}
                       />
                    </div>
                    <div className="">
                      <p
                      
                        className="w-[360px] text-[rgba(21,24,117,1)] text-sm font-bold mt-4"
                      >
                        {data.name}
                      </p>
                      <h1
                    
                        className="text-[rgba(21,24,117,1)] text-2xl font-bold w-[400px] mt-4"
                      >
                        {data.heading}
                      </h1>
                      <p
                        
                        className="text-[rgba(138,143,185,1)] text-sm w-[400px] mt-4 leading-6"
                      >
                        {data.text}
                      </p>
                   </div>
            </div> 
    </div>
  )
}

export default Blog;