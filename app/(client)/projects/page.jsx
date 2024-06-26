'use client'

import React, { useState, useEffect } from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import { client } from "@/sanity/lib/client";

import { RevealWrapper } from 'next-reveal'

const Projects = () => {
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState('todos');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Consulta à API do Sanity para buscar os projetos
        const query = '*[_type == "works"]{title, description, imgUrl, tag, category, link, repository}';
        client.fetch(query)
            .then((data) => {
                // Extrair tags únicas dos projetos
                const uniqueTags = ['todos', ...new Set(data.map((item) => item.tag))];
                setTags(uniqueTags);
                setProjects(data);
            })
            .catch((error) => console.error("Erro ao buscar projetos:", error));
    }, []);

    const filteredProjects = projects.filter((project) => {
        return tag === 'todos' ? project : project.tag === tag;
    });

    return (
        <section className='min-h-screen pt-12'>
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
                        Meus Projetos
                    </h2>
                </RevealWrapper>

                <RevealWrapper
                    rotate={{ x: 12, y: 30, z: 0 }}
                    origin='bottom'
                    delay={350}
                    duration={1000}
                    distance='200px'
                    reset={false}
                    viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                >

                    {/* Tabs*/}
                    <Tabs defaultValue={tag} className='mb-24 xl:mb-48'>
                        <TabsList className='grid w-full h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none justify-center'>
                            {tags.map((tag, index) => (
                                <TabsTrigger
                                    value={tag}
                                    key={index}
                                    className='uppercase w-[162px] md:w-auto'
                                    onClick={() => setTag(tag)}
                                >
                                    {tag}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Content */}
                        <div className='grid gap-4 text-lg xl:mt-8-cols-1 lg:grid-cols-3'>
                            {filteredProjects.map((project, index) => (
                                <TabsContent
                                    value={tag} // Passando o valor da tag específica do projeto
                                    key={index}
                                >
                                    <ProjectCard project={project} />
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </RevealWrapper>

            </div>
        </section>
    );
};

export default Projects;
