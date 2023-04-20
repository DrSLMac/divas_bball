import React from 'react'
import PageHeader from '@/components/PageHeader'
import Footer from '@/components/Footer'
import { Inspiration } from 'next/font/google'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

const Teams = () => {
  return (
    <div className='relative flex flex-col h-screen'>
        <section className='flex flex-col items-center h-44 text-white w-screen
          bg-gradient-to-b from-navy-blue from-20% via-deep-red via-40% to-slate-400
          py-8
          xl:h-56 
        '>
          <div className={inspiration.className}>
              <h1 className='text-7xl xl:text-8xl'>Divas Teams</h1>
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

        <section className='h-full bg-bball-hoop bg-center bg-no-repeat bg-cover'>

          <div className='grid gap-4 py-16 px-12 text-center
            md:grid-cols-3 md:grid-rows-2 
          '>
            <div id='1' className='bg-slate-300 h-[30vh] '>
            Team 1
            
            </div>
            
            <div id='2' className='bg-slate-300 h-[30vh]'>Team 2
            
            </div>
            
            <div id='3' className='bg-slate-300 h-[30vh]'>Team 3
            
            </div>
            
            <div id='4' className='bg-slate-300 h-[30vh]'>Team 4
            
            </div>
            
            <div id='5' className='bg-slate-300 h-[30vh]'>Team 5
            
            </div>
            
            <div id='6' className='bg-slate-300 h-[30vh]'>Team 6
            
            </div>
          </div>

        </section>

        <section className='sticky bottom-0'>
            <Footer />
        </section>
    </div>
  )
}

export default Teams