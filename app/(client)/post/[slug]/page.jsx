
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import urlBuilder from '@sanity/image-url'

async function getPost(slug) {
    const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
        title,
        slug,
        publishedAt,
        excerpt,
        _id,
        "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
        body,
        tags[]
    }
    `;

    const post = await client.fetch(query);
    return post;
}

export const revalidate = 60;

const Post = ({params}) => {

    const post = getPost(params?.slug);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <div className='container mx-auto'>
                <div className="pt-5 pb-[300px] bg-[url('/cover-blog.webp')] bg-no-repeat bg-center bg-cover mb-5">
                    <Link
                        href='/blog'
                        className='flex gap-2 ml-4 font-semibold text-white opacity-50 hover:opacity-100'
                    >
                        <ArrowLeft />
                        Voltar
                    </Link>
                </div>
                <div className='flex flex-col mx-auto w-full max-w-[800px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-center text-3xl font-bold tracking-[4px] max-w-max'>
                            {post?.title}
                        </h1>
                        <div className='flex items-end justify-between w-full m-8'>
                            <span className='font-semibold bg-primary px-[8px] py-[4px] rounded-lg text-white'>
                                tag
                            </span>
                            <span>
                                02 de Fevereiro de 2024
                            </span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptate enim facilis incidunt ipsa officiis quia iste dolorem eveniet doloremque assumenda sed corporis laudantium earum voluptas, quos recusandae, error quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptate enim facilis incidunt ipsa officiis quia iste dolorem eveniet doloremque assumenda sed corporis laudantium earum voluptas, quos recusandae, error quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptate enim facilis incidunt ipsa officiis quia iste dolorem eveniet doloremque assumenda sed corporis laudantium earum voluptas, quos recusandae, error quam.</p>
                    </div>
                    <p className='text-[14px] font-semibold w-full text-right mt-2'>por: Anthony Davi</p>
                </div>
            </div>
        </section >
    )
}

export default Post