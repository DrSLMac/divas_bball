import React from 'react'
import { Inspiration } from 'next/font/google'
import Image from 'next/image'
import sheBaller from '../public/she-baller.png'

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})


const PageHeader = ({pageTitle}) => {
  return (
    <div>
        <section className='sticky flex justify-evenly items-center z-20 top-0 h-28 text-white w-screen
        bg-gradient-to-b from-navy-blue from-20% via-deep-red via-40% to-slate-400
        '>
            <div className={inspiration.className}>
                <h1 className='text-7xl mt-8' >{pageTitle}</h1>
            </div>
            <div>
                <Image 
                    src={sheBaller}
                    alt='Divas Logo'
                    width='150'
                    className='mt-48'
                />
            </div>

        </section>


    </div>
  )
}

export default PageHeader