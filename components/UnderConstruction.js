import React from 'react'
import Image from 'next/image'
import construction from '../public/under_construction.jpeg'
import { Inspiration } from 'next/font/google'
import ReturnHome from '@/components/ReturnHome'

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

const UnderConstruction = () => {
  return (
    <div className='flex flex-col items-center p-20 text-7xl text-center'>
      <div className='pb-4'>
        <h1>Please Be Patient</h1>
        <h2 className={inspiration.className}>We're Moving as Fast as We Can</h2>
      </div>
        <Image 
          src={construction}
          alt='under construction animation'
        />
        <ReturnHome />
    </div>
  )
}

export default UnderConstruction