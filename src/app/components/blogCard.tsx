import Link from 'next/link'
import React from 'react'
import { urlFor } from  '@/sanity/lib/image'
import { Post } from '../blog/page'
import Image from 'next/image'


const BlogCard = ({post}:{post:Post}) => {

  

  return (
    <div>
         <div className="container mt-10 ml-10 w-[870px] h-auto">

              <div>
                <Image
                 key={post.slug} 
                 src={urlFor(post.image).url()} 
                 alt={post.name} 
                 width={870}
                 height={400}
              
                 />
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
               <Link href={`/blog/${post.slug}`}><button key={post.slug} className="text-[rgba(21,24,117,1)] font-semibold mt-4 hover:text-red-600">
                  {post.buttonText}
                  <span className="text-red-600 text-2xl font-bold">.</span>
                </button>
                </Link> 

            </div>
        </div>
    </div>
  )
}


export default BlogCard;