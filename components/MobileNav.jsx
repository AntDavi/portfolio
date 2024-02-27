import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Link from 'next/link';

import Nav from './Nav'
import Logo from './Logo'
import Social from './Social';
import { Button } from './ui/button';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer ' />
            </SheetTrigger>
            <SheetContent>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-32'>
                        <Logo />
                        <Nav containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-2xl capitalize' />
                    </div>
                    <div className='flex flex-col justify-between gap-y-6'>
                        <Social containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
                        <Button>
                            <Link
                                href='https://anthony-adm.vercel.app/'
                                target='_blank'
                            >
                                Login
                            </Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav