'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import {
    User,
    MailIcon,
    ArrowRightIcon,
    MessageSquare
} from 'lucide-react'

const Form = () => {
    return (
        <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type='name' id='name' placeholder='Seu nome'/>
                <User className="absolute right-6" size={20}/>
            </div>
            
            <div className="relative flex items-center">
                <Input type='email' id='email' placeholder='Seu email'/>
                <MailIcon className="absolute right-6" size={20}/>
            </div>

            <div className="relative flex items-center">
                <Textarea type='message' id='message' placeholder='Sua mensagem' className='resize-none'/>
                '<MessageSquare className="absolute top-2 right-6" size={20}/>
            </div>

            <Button className='flex items-center max-w-[250px] gap-x-5'>
                Vamos conversar!
                <ArrowRightIcon size={20}/>
            </Button>
        </form>
    )
}

export default Form