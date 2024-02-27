'use client'
import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

// swiper
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules'
import ProjectCard from '@/components/ProjectCard'

import { PROJECTS_DATA } from '@/constants'

const BestProjects = () => {

    return (
        <section className='relative py-24'>
            <div className='container mx-auto'>
                {/* left */}
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='mb-4 section-title'>Alguns Projetos</h2>
                    <p className='mb-8 subtitle'>Alguns dos projetos que julgo serem os melhores que já produzi.</p>
                    <Link href='/projects'>
                        <Button>Ver todos</Button>
                    </Link>
                </div>

                {/* right */}
                <div className='xl:max-w-[900px] xl:absolute right-0 top-20'>
                    <Swiper
                        className='h-[480px]'
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            }
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true
                        }}
                    >
                        {/* Show projects */}

                        {PROJECTS_DATA.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default BestProjects