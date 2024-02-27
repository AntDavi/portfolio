'use client'

import Link from 'next/link'
import { SOCIAL_LINKS } from '@/constants'

const Social = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {SOCIAL_LINKS.map((icons, index) => {
                return (
                    <Link href={icons.path} key={index} target='_blank'>
                        <div className={`${iconsStyles}`}>
                            {icons.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Social