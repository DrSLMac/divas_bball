import React from 'react'
import PageHeader from '@/components/PageHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"
import Image from 'next/image'
import doomSquad from '../public/doomsquad.jpeg'
import { Inspiration } from 'next/font/google'

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

const Teams = () => {
  return (
    <div className='relative flex flex-col h-screen'>
        <section className='flex flex-col sticky top-0 items-center h-44 text-white w-screen
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

        <section className='h-full bg-bball-hoop bg-fixed bg-center bg-no-repeat bg-cover overflow-y-scroll'>

          <div className='grid gap-4 py-16 px-12
            md:grid-cols-3 md:grid-rows-2 cursor-pointer
          '>
            <div id='1' className='bg-slate-300 h-[30vh] '>
              <Image 
                src={doomSquad}
                className='center'
              />
              {/* <div className='flex flex-col h-full'> */}
                <div className='flex font-semibold text-xl hover:bg-gradient-to-t from-deep-red via-20% to-slate-300/40 to-60% '>
                  <h2>2025 Divas DoomSquad</h2>
                </div>
              {/* </div> */}
            </div>
            
            <div id='2' className='bg-slate-300 h-[30vh]'>Team 2
            
            </div>
            
            <div id='3' className='bg-slate-300 h-[30vh]'>Team 3

            <div className='media-cover-wrapper'>
              <div className='entry-media-wrapper'>
                <div className='entry-media'>
                  <Image src={doomSquad}/>
                  <div className='media-poster'>

                  </div>
                </div>
              </div>
            </div>
            
            </div>
            
            <div id='4' className='bg-slate-300 h-[30vh]'>Team 4
            
            </div>
            
            <div id='5' className='bg-slate-300 h-[30vh]'>Team 5
            
            </div>
            
            <div id='6' className='bg-slate-300 h-[30vh]'>Team 6
            
            </div>
          </div>

        </section>

        <section className='fixed bottom-0'>
            <Footer />
        </section>
    </div>
  )
}

export default Teams