import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'

function Footer() {
  return (
    <footer className='flex items-center w-full p-6 bg-background dark:bg-[#1f1f1f] z-50'>
        <Logo />
        <div className='md:ml-auto flex w-full justify-between md:justify-end items-center gap-x-2 text-muted-foreground'>
            <Button variant="ghost" size="sm">
                Privacy Policy
            </Button>
            <Button variant="ghost" size="sm">
                Terms & Conditions
            </Button>
        </div>
    </footer>
  )
}

export default Footer