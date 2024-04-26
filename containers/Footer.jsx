'use client'

import { RevealWrapper } from 'next-reveal'
import Social from "@/components/Social"

const Footer = () => {
    return (
        <footer className="py-12">
            <div className="container mx-auto">
                <RevealWrapper
                    // rotate={{ x: 12, y: 30, z: 0 }}
                    origin='left'
                    delay={200}
                    duration={1000}
                    distance='200px'
                    reset={false}
                    viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }} 
                    className="flex flex-col items-center justify-between">
                    {/* Social */}
                    <Social
                        containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-6'
                        iconsStyles='text-black text-[20px] dark:text-white/70 hover:text-primary dark:hover:text-primary'
                    />

                    <div className="text-muted-foreground text-center">
                        Copyright &copy; Anthony Davi. Todos os direitos reservados.
                    </div>
                </RevealWrapper>
            </div>
        </footer>
    )
}

export default Footer