import PageHeader from '@/components/PageHeader'
import React from 'react'
import Footer from '@/components/Footer'
import sheBaller from '../public/she-baller2.png'
import Image from 'next/image'
import Link from 'next/link'
import placeholder from '../public/coach-placeholder.png'

const Coaches = () => {
  return (
    <div className='relative flex flex-col h-screen w/screen snap-start'>
        <PageHeader pageTitle='Coaches' />
        <section className='flex-grow bg-slate-400 w-screen overflow-x-hidden overflow-y-scroll'>

          <div className='grid p-8 mr-28 text-sm gap-4
            sm:ml-100
            lg:grid-cols-2 lg:grid-rows-3 lg:ml-80 '>

            <Link href='/'>
              <div id='1' className='coachProfile'>
                <Image 
                  src={placeholder}
                  alt='coach headshot'
                  width='90'
                  height='auto'
                  className='cursor-pointer'
                />
                <div className='text-center'>
                  <h1>Coach Tim</h1>
                  <h2>Head Coach</h2>
                </div>
              </div>
            </Link>

              <Link href='/'>
                <div id='2' className='coachProfile'>
                  <Image 
                      src={placeholder}
                      alt='coach headshot'
                      width='90'
                      height='auto'
                      className='cursor-pointer'
                  />
                  <div className='text-center'>
                    <h1>Coach Name</h1>
                    <h2>Coach of what</h2>
                  </div>
                </div>
              </Link>

              <Link href='/'>
                <div id='3' className='coachProfile'>
                  <Image 
                    src={placeholder}
                    alt='coach headshot'
                    width='90'
                    height='auto'
                    className='cursor-pointer'
                  />
                  <div className='text-center'>
                    <h1>Next Coach</h1>
                    <h2>Coach of Something</h2>
                  </div>
                </div>
              </Link>

              <Link href='/'>
                <div id='4' className='coachProfile'>
                  <Image 
                      src={placeholder}
                      alt='coach headshot'
                      width='90'
                      height='auto'
                      className='cursor-pointer'
                  />
                  <div className='text-center'>
                    <h1>Another Coach</h1>
                    <h2>Coach of Team</h2>
                  </div>
                </div>
              </Link>

              <Link href='/'>
                <div id='5' className='coachProfile'>
                  <Image 
                      src={placeholder}
                      alt='coach headshot'
                      width='90'
                      height='auto'
                      className='cursor-pointer'
                    />
                  <div className='text-center'>
                    <h1>Coach Name</h1>
                    <h2>Coach of what</h2>
                  </div>
                </div>
              </Link>

              <Link href='/'>
                <div id='6' className='coachProfile'>
                <Image 
                      src={placeholder}
                      alt='coach headshot'
                      width='100'
                      height='auto'
                      className='cursor-pointer'
                    />
                  <div className='text-center'>
                    <h1>Coach Name</h1>
                    <h2>Coach of what</h2>
                  </div>
                </div>
              </Link>

            {/* <div id='7' className='bg-cyan-400'>coach 4 pic</div>
            <div id='8' className='bg-orange-600'>coach 5 pic</div>
            <div id='9' className='bg-amber-300'>coach 6 pic</div>
            <div id='10' className='bg-yellow-800'>coach 4 name</div>
            <div id='11' className='bg-lime-700'>coach 5 name</div>
            <div id='12' className='bg-sky-900'>coach 6 name</div> */}
          </div>

          {/* sm:right-8 sm:-rotate-[18deg] sm:-top-20 */}
          <div className='absolute animate-pulse -top-32 right-0
              lg:-top-32 lg:-left-20
              xl:right-10 
              2xl:right-12'>
            <Image 
                src={sheBaller}
                alt='Divas Logo'
                width='150'
                className='mt-40 xs:w-[9rem] sm:w-[20rem] 
                lg:w-[26rem] xl:w-[20rem] 2xl:w-[24rem]'
            />
          </div>

          <div className='flex justify-center items-center w-[100%] pb-8 sm:py-3 xl:py-6
          '>
              <button
                id="basic-button"
                className=' flex items-center text-white bg-deep-red transition duration-300 ease-in-out rounded-[2rem]
                hover:bg-navy-blue hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                h-[2.5rem] px-6 text-sm lg:text-lg lg:px-8 lg:py-4 xl:py-6
              '>
                  <Link href='/about'>
                    <div className='flex items-center'>
                        Return to About Page
                    </div>
                  </Link>
              </button>
          </div>
        </section>
        <footer className='sticky bottom-0'>
            <Footer />
        </footer>
    </div>
  )
}

export default Coaches