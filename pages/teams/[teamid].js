import React from 'react'
import path from 'path';
import fs from 'fs/promises'
import Image from 'next/image';
import { HomeIcon } from "@heroicons/react/24/solid"
import { Inspiration } from 'next/font/google'
import Link from 'next/link';

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

const TeamDetailsPage = () => {
  return (
    <div className='relative flex flex-col h-screen w/screen snap-start'>
        <section className='flex flex-col sticky top-0 items-center h-44 text-white w-screen
          bg-gradient-to-b from-navy-blue from-20% via-deep-red via-40% to-slate-400
          py-8
          xl:h-56 
        '>
          <div className={inspiration.className}>
              <h1 className='text-7xl xl:text-8xl'>Meet the Coach</h1>
          </div>

        <div className='flex items-center'>
          <div className='xl:py-6'>
            <button
              id="basic-button"
              className='pageButtons
              h-[2rem] px-3 mx-3 text-xs
            '>
              <Link href='/coaches'>
                <div className='flex items-center'>
                  {/* <HomeIcon className="text-white pr-3 h-4 md:h-7 md:w-7"/> */}
                  Back to Previous Page
                </div>
              </Link>
            </button>
          </div>
          <div className='py-4 xl:py-6'>
            <button
              id="basic-button"
              className='pageButtons
              h-[2rem] px-3 mx-3 text-xs
            '>
              <Link href='/'>
                <div className='flex items-center'>
                  <HomeIcon className="text-white pr-3 h-4 md:h-7 md:w-7"/>
                  Return to Home
                </div>
              </Link>
            </button>
          </div>
        </div>
        </section>

        <section className='flex-grow bg-slate-400 w-screen md:px-8 midmd:px-20 lg:px-28 xl:px-36 2xl:px-52'>

        </section>

    </div>
  )
}

export default TeamDetailsPage