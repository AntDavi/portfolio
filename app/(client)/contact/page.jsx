'use client'

import React from 'react'
import { RevealWrapper } from 'next-reveal'

import Form from '@/components/Form'

const Contact = () => {
    return (
        <section className='pb-12'>
            <div className='container mx-auto flex flex-col items-center'>
                {/* Left */}
                <div
                    className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 l:mb-24'
                >
                    <RevealWrapper
                        rotate={{ x: 12, y: 30, z: 0 }}
                        origin='left'
                        delay={200}
                        duration={1000}
                        distance='200px'
                        reset={false}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                        className='flex flex-col justify-center'
                    >
                        <div className='flex items-center mb-4 text-lg gap-x-4 text-primary'>
                            <span className='w-[30px] h-[2px] bg-primary'></span>
                            Pegue um ☕ e diga oi!
                        </div>
                        <h1 className='mb-8 h1 ma-w-md'>Vamos trabalhar juntos.</h1>
                        <p className='subtitle max-w-[400px]'>Se prepare para dar vida ao seu projeto!</p>
                    </RevealWrapper>

                    <RevealWrapper
                        rotate={{ x: 12, y: 30, z: 0 }}
                        origin='right'
                        delay={200}
                        duration={1000}
                        distance='200px'
                        reset={false}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                        className='hidden w-full bg-top bg-no-repeat bg-contain xl:flex bg-contact_illustration'
                    >
                    </RevealWrapper>
                </div>

                {/* Right */}
                <RevealWrapper
                    rotate={{ x: 12, y: 30, z: 0 }}
                    origin='bottom'
                    delay={200}
                    duration={1000}
                    distance='200px'
                    reset={false}
                    viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                    className='w-full max-w-[700px]'>
                    <Form />
                </RevealWrapper>
            </div>
        </section>
    )
}

export default Contact