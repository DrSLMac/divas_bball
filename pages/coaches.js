import PageHeader from '@/components/PageHeader'
import React from 'react'
import Footer from '@/components/Footer'
import sheBaller from '../public/she-baller2.png'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path';
import fs from 'fs/promises'
import CoachSnapshot from '@/components/CoachSnapshot'

const Coaches = ({coaches}) => {

  const coachSnapShots = coaches.map(coach => {
      const { id, name, title, headshot } = coach
      return (
        <CoachSnapshot
          key={id}
          id={id}
          name={name}
          title={title}
          headshot={headshot}
        />
      )
    })

  return (
    <div className='relative flex flex-col h-screen w-screen snap-start'>
      <PageHeader pageTitle='Coaches' />
      
      <section className='flex-grow bg-slate-400 w-screen'>
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
            {coachSnapShots}
          </div> 
        
          <div className='lg:flex'>
            <div className='absolute animate-pulse -top-32 right-1
                xs:right-2
                midmd:right-4
                lg:-top-32 lg:right-6
                xl:right-10 
                2xl:right-20'>
              <Image 
                  src={sheBaller}
                  alt='Divas Logo'
                  width='150'
                  priority
                  className='mt-40 
                  xs:w-[10.5rem]
                  sm:w-[16rem]
                  md:w-[18rem]
                  lg:w-[23rem] 
                  xl:w-[24rem] 
                  2xl:w-[28rem]'
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

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'coach_data.json');
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      coaches: data.coaches
    },
  };
}

export default Coaches