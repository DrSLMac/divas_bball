import React from 'react'
import { Inspiration } from 'next/font/google'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})


const PageHeader = ({pageTitle}) => {
  return (
    <section className='flex flex-col items-center h-44 text-white w-screen
        bg-gradient-to-b from-navy-blue from-20% via-deep-red via-40% to-slate-400
        pr-40 space-y-4 py-6
        lg:pr-0
        xl:h-56 
    '>
        <div className={inspiration.className}>
            <h1 className='text-7xl xl:text-8xl'>{pageTitle}</h1>
        </div>
        <div className='py-4 xl:py-8'>
            <button
                id="basic-button"
                className='text-white bg-deep-red transition duration-300 ease-in-out rounded-[2rem]
                hover:bg-navy-blue hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                h-[2rem] px-6 text-sm
                '>
                <Link href='/'>
                <div className='flex items-center'>
                    <HomeIcon className="text-white pr-3 h-4 md:h-7 md:w-7"/>
                    Return to Home
                </div>
                </Link>
            </button>
        </div>
    </section>
  )
}

export default PageHeader