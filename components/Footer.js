import React from 'react'
import Link from 'next/link'
import divaLogo from '../public/divas.png'
import Image from 'next/image'

const Footer = () => {
  return (
      <div className='flex justify-center items-center h-24 w-screen bg-navy-blue'>
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
  )
}

export default Footer