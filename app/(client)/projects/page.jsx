'use client'

import React, { useState, useEffect } from 'react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'
import { PROJECTS_DATA } from '@/constants'

const uniqueTags = [
    'todos',
    ...new Set(PROJECTS_DATA.map((item) => item.tag))
]

const Projects = () => {
    const [tags, setTags] = useState(uniqueTags)
    const [tag, setTag] = useState('todos')

    const filteredProjects = PROJECTS_DATA.filter((project) => {
        return tag === 'todos'
            ? project
            : project.tag === tag
    })



    return (
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h2 className='mx-auto mb-8 text-center section-title xl:mb-16'>Meus Projetos</h2>

                {/* Tabs*/}

                <Tabs defaultValue={tag} className='mb-24 xl:mb-48'>
                    <TabsList className='grid w-full h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none justify-center'>
                        {tags.map((tag, index) => {
                            return (
                                <TabsTrigger
                                    value={tag}
                                    key={index}
                                    className='uppercase w-[162px] md:w-auto'
                                    onClick={() => setTag(tag)}
                                >
                                    {tag}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>

                    {/* Content */}

                    <div className='grid gap-4 text-lg xl:mt-8-cols-1 lg:grid-cols-3'>
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent
                                    value={tag} // Passando o valor da tag específica do projeto
                                    key={index}
                                >
                                    <ProjectCard project={project} />
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default Projects