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
        <form className="flex flex-col gap-y-4" action="https://getform.io/f/667dd1e0-d5b1-4f4d-a592-ec3da0b147b8" method="POST">
            <div className="relative flex items-center">
                <Input type='name' name='name' placeholder='Seu nome'/>
                <User className="absolute right-6" size={20}/>
            </div>
            
            <div className="relative flex items-center">
                <Input type='email' name='email' placeholder='Seu email'/>
                <MailIcon className="absolute right-6" size={20}/>
            </div>

            <div className="relative flex items-center">
                <Textarea type='message' name='message' placeholder='Sua mensagem' className='resize-none'/>
                <MessageSquare className="absolute top-2 right-6" size={20}/>
            </div>

            <Button className='flex items-center w-full gap-x-5' type="submit">
                Vamos conversar!
                <ArrowRightIcon size={20}/>
            </Button>
        </form>
    )
}

export default Form