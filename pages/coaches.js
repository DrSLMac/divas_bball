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

          <div className='lg:flex lg:justify-around'>

            <div className='grid p-8 mr-28 text-sm gap-4
              xs:mr-32
              sm:mr-60
              md:mr-80
              midmd:ml-10 midmd:text-lg
              lg:grid-cols-2 lg:grid-rows-3 
              lg:mr-0 lg:ml-0 lg:pl-12 lg:p-0 lg:pt-4
              xl:pt-0
            '>

              <Link href='/'>
                <div id='1' className='coachProfile'>
                  <Image 
                    src={placeholder}
                    alt='coach headshot'
                    width='90'
                    height='auto'
                    className='coachPic'
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
                        className='coachPic'
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
                      className='coachPic'
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
                        className='coachPic'
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
                        className='coachPic'
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
                        width='90'
                        height='auto'
                        className='coachPic'
                      />
                    <div className='text-center'>
                      <h1>Coach Name</h1>
                      <h2>Coach of what</h2>
                    </div>
                  </div>
                </Link>
            </div>

            <div className='lg:flex'>
              <div className='absolute animate-pulse -top-32 right-1
                  xs:right-2
                  midmd:right-4
                  lg:-top-32 lg:right-6
                  xl:right-10 
                  2xl:right-12'>
                <Image 
                    src={sheBaller}
                    alt='Divas Logo'
                    width='150'
                    className='mt-40 
                    xs:w-[10.5rem]
                    sm:w-[16rem]
                    md:w-[18rem]
                    lg:w-[23rem] 
                    xl:w-[24rem] 
                    2xl:w-[26rem]'
                />
              </div>
              <div className='flex justify-center items-center w-[100%] pb-8 sm:py-3 
              lg:pl-6 lg:pb-0 lg:pt-[64vh]
              
              '>
                  <button
                    id="basic-button"
                    className='pageButtons
                    h-[2.5rem] px-6 text-sm 
                    lg:text-lg lg:px-8 lg:py-4 lg:mr-12
                    xl:py-6
                  '>
                      <Link href='/about'>
                        <div className='flex items-center'>
                            Return to About Page
                        </div>
                      </Link>
                  </button>
              </div>
          </div>

          </div>
        </section>
        <footer className='sticky bottom-0'>
            <Footer />
        </footer>
    </div>
  )
}

export default Coaches