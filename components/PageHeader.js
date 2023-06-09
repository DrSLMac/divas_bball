import React from 'react'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"
import { Inspiration } from 'next/font/google'

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
        <div className='py-4 xl:py-6'>
            <button
                id="basic-button"
                className='pageButtons
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