'use client'

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
import { REVIEW_DATA } from "@/constants"


const Reviews = () => {
    return (
        <section className='py-32'>
            <div className='container mx-auto'>
                <h2 className="mx-auto mb-12 text-center section-title">Reviews</h2>

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
                    {REVIEW_DATA.map((person, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <Card className='p-8 bg-tertiary dark:bg-secondary/40 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className="flex items-center gap-x-4">
                                            {/* Image */}
                                            <Image
                                                src={person.avatar}
                                                width={70}
                                                height={70}
                                                alt={person.name}
                                                priority
                                            />
                                            {/* Name */}
                                            <div className="flex flex-col">
                                                <CardTitle>
                                                    {person.name}
                                                </CardTitle>
                                                <p>
                                                    {person.job}
                                                </p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews