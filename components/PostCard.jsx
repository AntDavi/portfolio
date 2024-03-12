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
            <Card className='flex h-[250px] cursor-pointer overflow-hidden'>
                <CardHeader>
                    <Image
                        src={urlForImage(post.imgUrl)}
                        width={200}
                        height={200}
                        priority
                        alt={post.title}
                        className='overflow-hidden rounded-sm'
                    />
                </CardHeader>
                <CardContent className='w-full max-w-[700px] relative'>
                    <h2>
                        {post.title}
                    </h2>
                    <p className='pt-2 pb-3'>
                        {post.excerpt}
                    </p>
                    <div className='absolute bottom-6 '>
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