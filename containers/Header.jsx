'use client'

import React, { useState, useEffect } from "react";

//Components
import Logo from "@/components/Logo";
import ThemeToggler from "@/components/ThemeToggler";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import { usePathname } from "next/navigation";

const Header = () => {

    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        })

        return () => {
            window.removeEventListener('scroll', scrollYPos)
        }
    })


    return (
        <header className={`${header
            ? 'py-4 shadow-lg dark:bg-accent'
            : 'py-6 dark:bg-transparent'
            } sticky top-0 z-30 transition-all bg-[#f5fcfec7] backdrop-blur-md`}
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/* nav */}
                        {/* <Nav
                            containerStyles='hidden xl:flex gap-x-8 items-center'
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        /> */}
                        <ThemeToggler />

                        {/* mobile nav */}
                        <div className="">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 