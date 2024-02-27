import Link from "next/link"
import Image from "next/image"
import {
    Card,
    CardHeader
} from '@/components/ui/card'
import {
    RiGithubFill,
    RiDribbbleFill,
    RiLink
} from 'react-icons/ri'
import { Badge } from "./ui/badge"


const ProjectCard = ({ project }) => {
    return (
        <Card className='relative overflow-hidden group'>
            <CardHeader className='p-0'>
                {/* Image */}
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden">
                    <Image
                        className="absolute bottom-0 shadow-2xl"
                        src={project.imgPath}
                        width={247}
                        height={250}
                        alt={project.title}
                        priority
                    />

                    {/* btns */}

                    <div className="flex gap-x-4">
                        {project.category.includes('link') && (
                            <Link href={project.link} className="bg-tertiary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:shadow-xl dark:bg-primary">
                                <RiLink />
                            </Link>
                        )}
                        {project.category.includes('github') && (
                            <Link href={project.repository} target="_blank" className="bg-tertiary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:shadow-xl dark:bg-primary">
                                <RiGithubFill />
                            </Link>
                        )}
                        {project.category.includes('ui') && (
                            <Link href={project.link} target="_blank" className="bg-tertiary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:shadow-xl dark:bg-primary">
                                <RiDribbbleFill />
                            </Link>
                        )}
                    </div>

                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className='absolute mb-2 text-sm font-medium uppercase top-4 left-5'>
                    {project.tag}
                </Badge>
                <h4 className="mb-1 h4">
                    {project.title}
                </h4>
                <p className="text-lg text-muted-foreground">
                    {project.description}
                </p>
            </div>
        </Card>
    )
}

export default ProjectCard;