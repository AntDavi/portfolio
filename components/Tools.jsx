import React, { useState, useEffect } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Image from 'next/image';
import { client } from "@/sanity/lib/client";
import { urlForImage } from '@/sanity/lib/image';

const Tools = ({ containerStyle }) => {
    const [tools, setTools] = useState([]);
    const [activeTool, setActiveTool] = useState(null);

    useEffect(() => {
        const query = '*[_type == "tools"]';

        client.fetch(query)
            .then((data) => setTools(data))
            .catch((error) => console.error("Erro ao buscar ferramentas:", error));
    }, []);

    const handleMouseEnter = (index) => {
        setActiveTool(index);
    };

    const handleMouseLeave = () => {
        setActiveTool(null);
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={`${containerStyle}`}>
                    {tools.map((tool, index) => (
                        <div key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                            <Image
                                src={urlForImage(tool.imgUrl)}
                                width={48}
                                height={48}
                                alt={tool.title}
                                priority
                            />
                        </div>
                    ))}
                </TooltipTrigger>
                <TooltipContent>
                    {activeTool !== null && (
                        <p>{tools[activeTool].description}</p>
                    )}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default Tools
