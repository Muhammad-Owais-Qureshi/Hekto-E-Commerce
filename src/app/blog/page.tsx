import React from "react";
import { client } from "@/sanity/lib/client";
import BlogCard from "../components/blogCard";


export interface Post {
  image: string;
  name: string;
  date: string;
  heading: string;
  text: string;
  buttonText: string;
  slug: string;
}
const Page = async () => {
  const query = `*[_type == "post"] | order(_createdAt asc){
    image,
    name,
    date,
    heading,
    text,
    buttonText,
     "slug":slug.current
  }`;

  const data3:Post[] = await client.fetch(query);

  // console.log(data3);


  return (
    <div className="flex flex-col items-center">
      {data3.map( (post:Post) => {
        return <BlogCard post = {post} key = {post.slug} />
      })}
      
      {/* <ul>
        {data3.map((post:Post , i:number) => {
          return (
            <div className="container mt-10 ml-10 w-[870px] h-auto">
              <div>
                <img key={post.slug} src={urlFor(post.image).url()} alt={post.name} />
              </div>
              <div className="">
                <p
                  key={post.slug}
                  className="w-[360px] text-[rgba(21,24,117,1)] text-sm font-bold mt-4"
                >
                  {post.name} {post.date}
                </p>
                <h1
                  key={post.slug}
                  className="text-[rgba(21,24,117,1)] text-2xl font-bold w-[400px] mt-4"
                >
                  {post.heading}
                </h1>
                <p
                  key={post.slug}
                  className="text-[rgba(138,143,185,1)] text-sm w-[400px] mt-4 leading-6"
                >
                  {post.text}
                </p>
               <Link href={`blog/${post.slug}`}><button key={post.slug} className="text-[rgba(21,24,117,1)] font-semibold mt-4 hover:text-red-600">
                  {post.buttonText}
                  <span className="text-red-600 text-2xl font-bold">.</span>
                </button>
                </Link> 
              </div>
            </div>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Page;
