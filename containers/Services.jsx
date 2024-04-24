'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { SERVICES_DATA } from "@/constants"

import { RevealWrapper } from 'next-reveal'

const Services = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto">
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
                        className="mx-auto mb-20 text-center section-title xl:mb-32"
                    >
                        Serviços
                    </h2>
                </RevealWrapper>


                {/* Grid itens */}
                <div className="flex flex-col items-center justify-between xl:flex-row gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {SERVICES_DATA.map((item, index) => {
                        const delays = [200, 300, 400];
                        const delay = delays[index % delays.length];

                        return (
                            <RevealWrapper
                                rotate={{ x: 12, y: 30, z: 0 }}
                                origin='bottom'
                                interval={60} delay={500}
                                duration={1000}
                                distance='200px'
                                reset={false}
                                viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                            >
                                <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative rounded-2xl shadow-lg' key={index}>
                                    <CardHeader className='absolute text-primary -top-[70px]'>
                                        <div className="w-[140px] h-[100px] dark:bg-background flex justify-center items-center rounded-2xl">
                                            {item.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className='text-center'>
                                        <CardTitle className='mb-4'>{item.title}</CardTitle>
                                        <CardDescription className='text-lg'>
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </RevealWrapper>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}



export default Services