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
        <section className=' bg-slate-400'>
          <div className='absolute right-8 -top-40'>
            <Image 
                src={sheBaller}
                alt='Divas Logo'
                width='140'
                className='mt-44'
            />
          </div>
          <div className='px-8 pt-8 pb-4'>
            <div>
              <h2 className='text-xl font-medium uppercase pb-2'>History</h2>
            </div>
            <div>
              <p className='sm:block indent-6 sm:space-y-2'>
              Divas Basketball was founded in ~year~ by ~person~ as a girls&apos; club basketball program. It was created to provide an elite platform for families who are looking for amore rigorous, competitive environment for their athletes. Our Girls AAU Basketball team in North Texas promotes player development and college recruitment. 
              </p>
              <br></br>
              <div>
                <h2 className='text-xl font-medium uppercase pb-2'>Player Development</h2>
              </div>
              <p className='sm:block indent-6 sm:space-y-2'>
              The goal of Divas Basketball is to develop players, through individual and team training, so that they are well-rounded and marketable to college recruiters. While the goal may be a college scholarship, the hope is that each player is challenged to thrive as a basketball player. The athletes are exposed to multiple programs designed to grow their skill sets, instill fundamentally sound habits, increase their conditioning, strength and agility to prevent injuries, and expand their basketball IQ. The Divas coaches train them in a way that allows them to consistently perform against national competition. 
              </p>
              <br></br>
              <div>
                <h2 className='text-xl font-medium uppercase pb-2'>Knowing the C.O.S.T.</h2>
              </div>
              <p className='sm:block indent-6 sm:space-y-2'>
              In order to maximize overall growth, development, and opportunities for college exposure, each player must understand the COST:
              <br></br>
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
          <div className='flex justify-center w-[100%] pb-8
            '>
            <button
                id="basic-button"
                className='text-white bg-deep-red transition duration-300 ease-in-out rounded-[2rem]
                hover:bg-navy-blue hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                h-[2.5rem] px-6 text-sm
                '>
                <Link href='/coaches'>
                <div className='flex items-center'>
                    Meet the Coaches
                </div>
                </Link>
            </button>
        </div>
          <footer className='sticky bottom-0'>
              <Footer />
          </footer>
        </section>
    </div>
  )
}

export default About