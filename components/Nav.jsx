import React from 'react'

import { NAV_LINKS } from '@/constants'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'
import { SheetClose } from '@/components/ui/sheet';

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {NAV_LINKS.map((link, index) => {
                return (
                    <SheetClose asChild>
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
                    </SheetClose>
                )
            })}
        </nav>
    )
}

export default Nav