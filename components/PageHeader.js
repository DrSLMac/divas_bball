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
    <div className='bg-gradient-to-b from-navy-blue from-20% via-deep-red via-40% to-slate-400'>
        <section className='sticky flex justify-start top-0 px-16 h-28 text-white w-screen
        '>
            <div className={inspiration.className}>
                <h1 className='text-7xl mt-6' >{pageTitle}</h1>
            </div>
        </section>
        <div className='flex w-[100%] px-12 py-4
            '>
            <button
                id="basic-button"
                className='text-white bg-deep-red transition duration-300 ease-in-out rounded-[2rem]
                hover:bg-navy-blue hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                h-[2rem] px-5 text-sm
                '>
                <Link href='/'>
                <div className='flex items-center'>
                    <HomeIcon className="text-white pr-2 h-4 md:h-7 md:w-7"/>
                    Return to Home
                </div>
                </Link>
            </button>
        </div>
    </div>
  )
}

export default PageHeader