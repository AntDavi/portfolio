'use client'

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules'

import { client } from "@/sanity/lib/client"
import { urlForImage } from '@/sanity/lib/image'
import { RevealWrapper } from 'next-reveal'

const Reviews = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        const query = '*[_type == "review"]';

        client.fetch(query)
            .then((data) => setReview(data))
            .catch((error) => console.error("Erro ao buscar reviews:", error));
    }, [])


    return (
        <section className='py-32'>
            <div className='container mx-auto'>
                <RevealWrapper
                    rotate={{ x: 12, y: 30, z: 0 }}
                    origin='bottom'
                    delay={200}
                    duration={1000}
                    distance='200px'
                    reset={false}
                    viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                >
                    <h2
                        className="mx-auto mb-20 text-center section-title xl:mb-16"
                    >
                        Alguns clientes
                    </h2>
                </RevealWrapper>

                <RevealWrapper
                    rotate={{ x: 12, y: 30, z: 0 }}
                    origin='left'
                    delay={200}
                    duration={1000}
                    distance='200px'
                    reset={false}
                    viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                >
                    {/* slider */}
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },
                            1400: {
                                slidesPerView: 3
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        className="h-[350px]"
                    >
                        {review.map((review, index) => {

                            return (
                                <SwiperSlide
                                    key={index}
                                >
                                    <Card className='p-8 bg-tertiary/20 dark:bg-secondary/40 min-h-[300px] shadow-lg'>
                                        <CardHeader className='p-0 mb-10'>
                                            <div className="flex items-center gap-x-4">
                                                {/* Image */}
                                                <Image
                                                    src={urlForImage(review.imgUrl)}
                                                    width={70}
                                                    height={70}
                                                    alt={review.title}
                                                    priority
                                                    className='rounded-full'
                                                />
                                                {/* Name */}
                                                <div className="flex flex-col">
                                                    <CardTitle>
                                                        {review.title}
                                                    </CardTitle>
                                                    <p>
                                                        {review.job}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardDescription className='text-lg text-muted-foreground'>
                                            {review.review}
                                        </CardDescription>
                                    </Card>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </RevealWrapper>
            </div>
        </section>
    )
}

export default Reviews