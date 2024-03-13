import Image from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardHeader
} from '@/components/ui/card'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'

const PostCard = ({ post }) => {
    return (
        <Link
            href={`blog/${post.slug}`}
        >
            <Card className='flex lg:h-[250px] cursor-pointer overflow-hidden lg:flex-row flex-col items-center'>
                <CardHeader>
                    <Image
                        src={urlForImage(post.imgUrl)}
                        width={200}
                        height={200}
                        priority
                        alt={post.title}
                        className='hidden rounded-sm lg:flex max-w-[200px] max-h-[200px]'
                    />
                </CardHeader>
                <CardContent className='w-full max-w-[700px] flex flex-col items-center lg:items-start text-center lg:text-start'>
                    <h2>
                        {post.title}
                    </h2>
                    <p className='pt-2 pb-3'>
                        {post.excerpt}
                    </p>
                    <div className=''>
                        <span className='font-semibold bg-primary px-[8px] py-[4px] rounded-lg text-white'>
                            {post.tag}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default PostCard