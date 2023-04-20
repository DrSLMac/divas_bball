import PageHeader from '@/components/PageHeader'
import React from 'react'
import Footer from '@/components/Footer'
import sheBaller from '../public/she-baller.png'
import Image from 'next/image'
import Link from 'next/link'


const About = () => {
  return (
    <div className='relative flex flex-col h-screen snap-start'>
        <PageHeader pageTitle='About' />

        <section className='flex-grow bg-slate-400'>

          <div className='absolute right-8 -top-36
            sm:right-14 animate-pulse xl:right-10 
            2xl:right-32 2xl:-top-28
          '>

              <Image 
                  src={sheBaller}
                  alt='Divas Logo'
                  width='120'
                  className='mt-44 xs:w-[8rem] sm:w-[9rem] lg:w-64 xl:w-[20rem] 2xl:w-[24rem]'
              />

          </div>

          <div className='px-8 pt-8 pb-4
              sm:px-10 sm:pt-11
              md:px-16 md:leading-7
              xl:px-24
              2xl:px-48
          '>

            <div>
              <h2 className='text-xl xl:text-2xl font-medium uppercase pb-2 sm:pb-4'>History</h2>
            </div>

            <div>
              <p className='sm:block indent-6 lg:pr-[20vw] xl:text-lg'>
              Divas Basketball was founded in ~year~ by ~person~ as a girls&apos; club basketball program. It was created to provide an elite platform for families who are looking for a more rigorous, competitive environment for their athletes. Our Girls AAU Basketball teams in North Texas promote player development and college recruitment. 
              </p>

              <br></br>

              <div>
                <h2 className='text-xl xl:text-2xl font-medium uppercase pb-2 sm:pb-4
                '>Player Development</h2>
              </div>

              <p className='sm:block indent-6 sm:space-y-2 lg:pr-[20vw] xl:pr-[21vw] xl:text-lg'>
              The goal of Divas Basketball is to develop players, through individual and team training, so that they are well-rounded athletes and marketable to college recruiters. While the goal may be a college scholarship, the hope is that each player is challenged to thrive as a basketball player. The athletes are exposed to multiple programs designed to grow their skill sets, instill fundamentally sound habits, increase their conditioning, strength and agility to prevent injuries, and expand their basketball IQ. The Divas coaches train them in a way that allows them to consistently perform against national competition. 
              </p>

              <br></br>

              <div>
                <h2 className='text-xl xl:text-2xl font-medium uppercase pb-2 sm:pb-4'>Knowing the C.O.S.T.</h2>
              </div>

              <p className='indent-6 sm:space-y-4 xl:text-lg'>
              In order to maximize overall growth, development, and opportunities for college exposure, each player must understand the COST:
              </p>

              <div className='indent-0 px-2 py-1 sm:leading-7 xl:text-lg xl:leading-8 xl:px-8'>
                <p>
                  <span className='font-semibold'>C</span> stands for the commitment required of each athlete
                  <br></br>
                  <span className='font-semibold'>O</span> stands for the obligation to team and self in order to achieve greatness
                  <br></br>
                  <span className='font-semibold'>S</span> stands for the sacrifice required in order to remain consistent in training and focus
                  <br></br>
                  <span className='font-semibold'>T</span> stands for the team that each player has committed to be a part of.
                </p>
              </div>

            </div>
          </div>
          <div className='flex justify-center items-center w-[100%] pb-8 sm:py-3 xl:py-6
            '>
            <button
                id="basic-button"
                className='pageButtons
                h-[2.5rem] px-6 text-sm lg:text-lg lg:px-8 lg:py-4 xl:py-6
                '>
                <Link href='/coaches'>
                <div className='flex items-center'>
                    Meet the Coaches
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

export default About