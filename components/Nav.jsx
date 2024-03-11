import React from 'react'

import { NAV_LINKS } from '@/constants'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'
import { Button } from './ui/button';

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {NAV_LINKS.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.path}
                        className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.label}
                    </Link>
                )
            })}
            {/* <Button className="">
                <Link
                    href='/studio'
                    target='_blank'
                >
                    Login
                </Link>
            </Button> */}
        </nav>
    )
}

export default Nav