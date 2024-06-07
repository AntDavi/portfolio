'use client'

import Link from 'next/link';

import { TypeAnimation } from 'react-type-animation';

import { Button } from '@/components/ui/button';
import Badge from '@/components/Badge';
import Social from '@/components/Social';
import DevImg from '@/components/DevImg';

import { RevealWrapper } from 'next-reveal'
import { motion } from 'framer-motion'

import { Download, Send } from 'lucide-react';
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri';


const Hero = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2022; // Ano inicial
    const yearsOfExperience = currentYear - startYear;

    // Definição do número de projetos entregues
    const numberOfProjectsDelivered = 6;

    const handleDownload = () => {
        const downloadUrl = '/curriculum_Anthony.pdf'; // ajuste o caminho conforme necessário
        window.open(downloadUrl, '_blank');
    };

    return (
        <section className='py-12 xl:py-24 h-[84vh] flex items-center xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none '>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>

                    {/* Social */}
                    <RevealWrapper
                        rotate={{ x: 12, y: 40, z: 0 }}
                        origin='left'
                        delay={200}
                        duration={1000}
                        distance='500px'
                        reset={false}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                    >
                        <Social
                            containerStyles='hidden xl:flex flex-col gap-y-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                        />
                    </RevealWrapper>

                    {/* Left */}
                    <RevealWrapper
                        rotate={{ x: 12, y: 40, z: 0 }}
                        origin='top'
                        delay={200}
                        duration={1000}
                        distance='500px'
                        reset={false}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                        className='flex max-w-[650px] flex-col justify-center mx-auto xl:mx-8 text-center xl:text-left'
                    >
                        <div className='flex items-center mb-4 gap-x-2'>
                            <div className='w-[70px] h-[1px] bg-primary'></div>
                            <TypeAnimation
                                sequence={[
                                    'UX Designer',
                                    1500,
                                    'FrontEnd Dev',
                                    1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className=' text-sm font-semibold uppercase text-primary tracking-[4px]'
                            />
                        </div>
                        <h1 className='mb-4 h1'>
                            Oi, sou Anthony{' '}
                            <motion.span
                                style={{
                                    display: "inline-block",
                                    transformOrigin: "70% 70%",
                                }}
                                animate={{
                                    rotate: [0, 14, -8, 14, -4, 10, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "linear",
                                }}
                            >
                                👋
                            </motion.span>
                        </h1>
                        <p className='subtitle max-w-[520px] max-auto xl:mx-0'>
                            Como UX designer e programador frontend, busco criar experiências digitais impactantes, combinando design intuitivo com habilidades técnicas sólidas.
                        </p>

                        {/* Buttons */}
                        <div className='flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0'>
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Entre em contato
                                    <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant='secondary' className='gap-x-2' onClick={handleDownload}>
                                Download CV
                                <Download size={18} />
                            </Button>
                        </div>

                        <Social containerStyles='xl:hidden flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />

                    </RevealWrapper>


                    {/* Right */}
                    <RevealWrapper
                        rotate={{ x: 12, y: 40, z: 0 }}
                        origin='right'
                        delay={200}
                        duration={1000}
                        distance='500px'
                        reset={false}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                        className='relative hidden xl:flex'
                    >
                        {/* <Badge
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            icon={<RiBriefcase4Fill />}
                            endCountNum={yearsOfExperience}
                            badgeText='Anos de experiência'
                        />
                        <Badge
                            containerStyles='absolute top-[55%] -right-20'
                            icon={<RiTodoFill />}
                            endCountNum={numberOfProjectsDelivered}
                            badgeText='Projetos entregues'
                        />
                        <Badge
                            containerStyles='absolute top-[80%] -left-[1rem]'
                            icon={<RiTeamFill />}
                            endCountNum={6}
                            badgeText='Clientes felizes'
                        /> */}

                        <motion.div
                            className='bg-hero_shape2_light dark:hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'
                            animate={{ rotate: 360 }} // Animação de rotação
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: "linear",
                            }} // Repetição infinita a cada 5 segundos
                        ></motion.div>

                        <DevImg
                            containerStyle='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                            imgSrc='/hero/developer.png'
                        />
                    </RevealWrapper>
                </div>
                <div className='absolute hidden md:flex left-2/4 bottom-10 mx:bottom-12 animate-bounce z-2'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    )
}

export default Hero