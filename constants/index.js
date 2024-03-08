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
    { path: '/blog', label: 'blog' },
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

export const SERVICES_DATA = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'Web Development',
        description: '“Se o seu negócio não estiver na Internet, o seu negócio ficará sem negócio” - Bill Gates'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'UX Desgin',
        description: '"Um problema bem formulado, é um problema meio resolvido" - Charles Kettering'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'App Development',
        description: '"O futuro é móvel. Tudo o que podemos fazer em um computador, poderemos fazer em um dispositivo móvel." - Marc Andreessen'
    }
]

export const PROJECTS_DATA = [
    {
        imgPath: '/work/excursio.png',
        category: [
            'ui',
        ],
        tag: 'ui',
        title: 'Excursio',
        description: 'Sua plataforma fictícia de viagens projetada para proporcionar uma jornada inesquecível com praticidade e estilo!',
        link: '',
        repository: 'https://dribbble.com/shots/23485409-Excursio'
    },
    {
        imgPath: '/work/stagetree.png',
        category: [
            'ui',
            'link'
        ],
        tag: 'frontdev',
        title: 'StageTree',
        description: 'Uma empresa de tecnologia que tem grandes soluções para os mais diversos problemas em TIC.',
        link: 'https://stagetree.com.br/',
        repository: 'https://dribbble.com/shots/23539587-StageTree'
    },
]