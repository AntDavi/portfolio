'use client'

import React, { useState, useEffect } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Image from 'next/image';
import { SKILLS_DATA } from '@/constants';


const Tools = ({ containerStyle }) => {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    } 


    const [activeTool, setActiveTool] = useState(null);

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

                    {getData(SKILLS_DATA, 'tools').data.map((item, index) => {
                        const {imgPath} = item;
                        return (
                            <div key={index}>
                                <Image
                                    src={imgPath}
                                    width={48}
                                    height={48}
                                    alt=''
                                    priority
                                />
                            </div>
                        )
                    })}
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