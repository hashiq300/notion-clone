import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400", "600"],
})

function Logo() {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
      <Image className='dark:hidden' src="/logo.svg" height={40} width={40} alt='Logo' />
      <Image className='hidden dark:block' src="/logo-dark.svg" height={40} width={40} alt='Logo' />
        <p className={cn(
            "font-semibold",
            poppins.className
        )}>Joshan</p>
    </div>
  )
}

export default Logo