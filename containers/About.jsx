'use client'

import React, { useState, useEffect } from "react"
import DevImg from "@/components/DevImg"
import {
    Tabs,
    TabsContent,
    TabsTrigger,
    TabsList
} from '@/components/ui/tabs'

import { INFO_DATA, SKILLS_DATA, QUALIFICATIONS_DATA } from "@/constants"
import { Briefcase, GraduationCap } from "lucide-react"
import Tools from "@/components/Tools"

const About = () => {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

    return (
        <section className="xl:h-[860px] py-24">
            <div className="container mx-auto">
                <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
                    Sobre mim
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* Left */}
                    <div className="relative flex-1 hidden xl:flex ">
                        <DevImg containerStyle='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
                    </div>
                    {/* Right */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className='grid w-full xl:grid-cols-3 xl:max-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Informações</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualificações</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>

                            {/* tabs content */}
                            <div className="mt-12 text-lg xl:mt-8 ">
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="mb-4 h3">Dando o máximo para criar experiências únicas.</h3>
                                        <p className="mx-auto mx-w-xl subtitle xl:mx-0">Combinando UX design e programação frontend, busco entender usuários para criar experiências digitais cativantes, cuidando de cada detalhe em cada tela.</p>

                                        <div className="grid gap-4 mb-12 xl:grid-cols-2">
                                            {INFO_DATA.map((item, index) => {
                                                return (
                                                    <div key={index} className="flex items-center mx-auto gap-x-4 xl:mx-0">
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.label}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Línguas</div>
                                            <div className="border-b border-border"></div>
                                            <p>
                                                Ingles (A2), Espanhol (B2)
                                            </p>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* qualification */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="mb-8 text-center h3 xl:text-left">Minha jornada</h3>

                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div className="flex flex-col gap-y-6">

                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="font-medium capitalize">
                                                        Experiência
                                                    </h4>
                                                </div>

                                                {/* List */}
                                                <div className="flex flex-col text-left gap-y-8">

                                                    {getData(QUALIFICATIONS_DATA, 'experience').data.map((item, index) => {
                                                        const { company, qualification, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="mb-2 text-xl font-semibold leading-none">
                                                                        {company}
                                                                    </div>
                                                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                                                        {qualification}
                                                                    </div>
                                                                    <div className="text-base font-medium">
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap />
                                                    <h4 className="font-medium capitalize">
                                                        Educação
                                                    </h4>
                                                </div>

                                                {/* List */}
                                                <div className="flex flex-col text-left gap-y-8">

                                                    {getData(QUALIFICATIONS_DATA, 'education').data.map((item, index) => {
                                                        const { university, qualification, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="mb-2 text-xl font-semibold leading-none">
                                                                        {university}
                                                                    </div>
                                                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                                                        {qualification}
                                                                    </div>
                                                                    <div className="text-base font-medium">
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </TabsContent>


                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="mb-8 h3">O que uso diariamente</h3>

                                        {/* skills */}
                                        <div className="mb-16">
                                            <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                                            <div className="mb-4 border-b border-border"></div>

                                            {/* Lista de skills */}

                                            {getData(SKILLS_DATA, 'skills').data.map((item, index) => {
                                                const { name } = item;
                                                return (
                                                    <div className="w-2/4 mx-auto mb-1 text-center xl:text-left xl:mx-0 before:w-[10px] before:h-[10px] before:rounded-full flex justify-center xl:justify-start before:bg-primary items-center gap-x-2">
                                                        <div className="font-medium">{name}</div>
                                                    </div>
                                                )
                                            })}

                                        </div>

                                        {/* tools */}
                                        <div>
                                            <h4 className="mb-2 text-xl font-semibold xl:text-left">Ferramentas</h4>
                                            <div className="mb-4 border-b border-border"></div>

                                            <div className="flex justify-center xl:justify-normal">
                                                <Tools containerStyle='flex justify-center gap-x-8 xl:justify-start' />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About