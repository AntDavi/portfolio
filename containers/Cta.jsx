'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

import { RevealWrapper } from 'next-reveal'

const Cta = () => {
    return (
        <section className="py-24 bg-tertiary/40 dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <RevealWrapper
                        rotate={{ x: 12, y: 30, z: 0 }}
                        origin='bottom'
                        delay={200}
                        duration={1000}
                        distance='200px'
                        reset={false}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                    >
                        <h2 className="max-w-xl mb-8 text-center h2 ">
                            Preparado para tornar sua ideia realidade? Estou aqui pra te ajudar!
                        </h2>
                    </RevealWrapper>
                    <RevealWrapper
                        rotate={{ x: 12, y: 30, z: 0 }}
                        origin='bottom'
                        delay={300}
                        duration={1000}
                        distance='200px'
                        reset={false}
                        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                    >
                        <Link href='/contact'>
                            <Button>Entre em contato</Button>
                        </Link>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    )
}

export default Cta