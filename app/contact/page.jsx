import React from 'react'

import {
    MailIcon,
    HomeIcon,
    PhoneIcon
} from 'lucide-react'
import Form from '@/components/Form'

const Contact = () => {
    return (
        <section className='pb-12'>
            <div className='container mx-auto'>
                {/* Left */}
                <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 l:mb-24'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center mb-4 text-lg gap-x-4 text-primary'>
                            <span className='w-[30px] h-[2px] bg-primary'></span>
                            Pegue um ☕ e diga oi!
                        </div>
                        <h1 className='mb-8 h1 ma-w-md'>Vamos trabalhar juntos.</h1>
                        <p className='subtitle max-w-[400px]'>Se prepare para dar vida ao seu projeto!</p>
                    </div>
                    <div className='hidden w-full bg-top bg-no-repeat bg-contain xl:flex bg-contact_illustration'>
                    </div>

                </div>

                {/* Right */}
                <div className='grid xl:grid-cols-2 gap-y-8'>
                    <div className='text-base xl:text-lg'>
                        <div className='flex items-center gap-x-8'>
                            <MailIcon size={18} className='text-primary' />
                            <div>ant.davi07@gmail.com</div>
                        </div>
                    </div>

                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact