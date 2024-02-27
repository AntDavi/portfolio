import {
    RiLinkedinFill,
    RiGithubFill,
    RiDribbbleFill,
    RiInstagramFill
} from 'react-icons/ri'

import {
    User2,
    MailIcon,
    HomeIcon,
} from 'lucide-react'

import { 
    GanttChartSquare, 
    Blocks, 
    Gem 
} from 'lucide-react'

export const NAV_LINKS = [
    { path: '/', label: 'home' },
    { path: '/projects', label: 'meus projetos' },
    { path: '/contact', label: 'contato' },
];

export const SOCIAL_LINKS = [
    { path: 'https://www.linkedin.com/in/antdavi', name: <RiLinkedinFill /> },
    { path: 'https://github.com/AntDavi', name: <RiGithubFill /> },
    { path: 'https://dribbble.com/AntDavi', name: <RiDribbbleFill /> },
    { path: 'https://www.instagram.com/anthony.front/', name: <RiInstagramFill /> }
]

export const INFO_DATA = [
    {
        icon: <User2 size={20} />,
        label: 'Anthony Davi',
    },
    {
        icon: <MailIcon size={20} />,
        label: 'ant.davi07@gmail.com',
    },
    {
        icon: <HomeIcon size={20} />,
        label: 'Fortaleza - BR',
    },
]

export const SKILLS_DATA = [
    {
        title: 'skills',
        data: [
            {
                name: 'UI/UX'
            },
            {
                name: 'FrontEnd Dev'
            },
            {
                name: 'Motion'
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                title: 'figma',
                imagePath: '/about/figma.svg',
                description: 'O Figma é uma ferramenta de design colaborativo para criação de interfaces.'
            },
            {
                title: 'vscode',
                imagePath: '/about/vscode.svg',
                description: 'O VSCode é um editor de código leve extensível da Microsoft.'
            },
            {
                title: 'javascript',
                imagePath: '/about/javascript.svg',
                description: 'JavaScript é uma linguagem de programação para desenvolvimento web.'
            },
            {
                title: 'notion',
                imagePath: '/about/notion.svg',
                description: 'O Notion é uma plataforma para organização de notas e projetos.'
            },
        ]
    }
]

export const QUALIFICATIONS_DATA = [
    {
        title: 'educação',
        data: [
            {
                university: 'IFCE - CE',
                qualification: 'Bacharel em Engenharia da Computação',
                years: '2019 - Em curso'
            },
        ]
    },
    {
        title: 'experiencia',
        data: [
            {
                company: 'Freelancer',
                qualification: 'UX Desginer e FrontEnd-Dev',
                years: '2020 - Presente'
            },
        ]
    },
]

export const SERVICES_DATA = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'UX Desgin',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'App Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
]

export const WORKS_DATA = [
    {
        image: '/work/2.png',
        category: 'ux',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        repository: '/'
    },
    {
        image: '/work/1.png',
        category: 'web design',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        repository: '/'
    },
    {
        image: '/work/3.png',
        category: 'ux',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        repository: '/'
    },
]

export const REVIEW_DATA = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Frances Farias',
        job: 'CEO',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Cassio Coach',
        job: 'CEO',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'DDidico Junior',
        job: 'CEO',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
]