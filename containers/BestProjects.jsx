'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from '@/components/ProjectCard';
import { client } from "@/sanity/lib/client";

import { RevealWrapper } from 'next-reveal'


const BestProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]{title, description, imgUrl, tag, category, link, repository}';

        client.fetch(query)
            .then((data) => setProjects(data))
            .catch((error) => console.error("Erro ao buscar projetos:", error));
    }, []);

    return (
        <section className='relative py-24'>
            <RevealWrapper 
                rotate={{ x: 12, y: 30, z: 0 }}
                origin='left'
                delay={200}
                duration={1000}
                distance='200px'
                reset={false}
                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }} className='container mx-auto'>
                {/* left */}
                <div
                    className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='mb-4 section-title'>Alguns Projetos</h2>
                    <p className='mb-8 subtitle'>Alguns dos projetos que julgo serem os melhores que já produzi.</p>
                    <Link href='/projects'>
                        <Button>Ver todos</Button>
                    </Link>
                </div>

                {/* right */}
                <div
                    className='xl:max-w-[900px] xl:absolute right-0 top-20'
                >
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
                        {projects.slice(0, 3).map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </RevealWrapper>
        </section>
    );
};

export default BestProjects;
