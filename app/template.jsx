'use client'

import { motion } from 'framer-motion';

//hooks
import useScrollProgress from '@/hooks/useScrollProgress';

//variants
const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 }
}

const Template = ({ children }) => {
    const completion = useScrollProgress()
    return <>
        <motion.main
            variants={variants}
            initial='hidden'
            animate='enter'
            transition={{
                type: 'linear',
                delay: 0.2,
                duration: 0.4
            }}
        >
            {children}
        </motion.main>
        {/* Completion bar */}
        <span
            style={{ height: `${completion}%`, transition: 'width 0.2s ease-in-out' }}
            className='fixed top-0 bottom-0 right-0 z-50 w-1 transition-all duration-700 bg-primary'>
        </span>
    </>
}

export default Template