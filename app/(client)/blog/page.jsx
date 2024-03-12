'use client'

import React, { useState, useEffect } from 'react';

import PostCard from '@/components/PostCard'
import { client } from "@/sanity/lib/client";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "post"]{title, excerpt, imgUrl, tag, slug}';

    client.fetch(query)
      .then((data) => setPosts(data))
      .catch((error) => console.error("Erro ao buscar posts:", error))
      console.log(posts)
      ;
  }, []);

  return (
    <section className='py-12'>
      <div className='container mx-auto'>
        <h2 className='mx-auto mb-8 text-center section-title xl:mb-16'>Meu Blog</h2>

        <div className='flex flex-col items-center gap-4'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
