import React from 'react'
import Link from 'next/link'
import divaLogo from '../public/divas.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='sticky bottom-0 h-24 w-screen bg-navy-blue'>
        <div className='flex justify-center items-center h-full'>
            <Link href='/'>
                <Image 
                    src={divaLogo}
                    alt='Divas Logo'
                    width='150'
                    className='cursor-pointer'
                    priority
                />
            </Link>
        </div>
    </footer>
  )
}

export default Footer