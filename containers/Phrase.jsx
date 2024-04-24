'use client'

import { RevealWrapper } from  'next-reveal'

const Phrase = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto">
                <RevealWrapper
                    className="flex flex-col items-center"
                    rotate={{x:  12,y:40,z:0}} 
                    origin='top' 
                    delay={200} 
                    duration={1000} 
                    distance='500px' 
                    reset={false} 
                    viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}
                >
                    <h2 className="max-w-4xl mb-8 text-center tracking-[2px] text-[20px] lg:text-[32px]">
                        Sou apaixonado por tecnologia, especialmente pela programação front-end e UX, onde posso unir a beleza do design digital com a interação humana, criando experiências incríveis para as pessoas.
                    </h2>
                    {/* <span className="text-primary">- Charles Kettering</span> */}
                </RevealWrapper>
            </div>
        </section>
    )
}

export default Phrase