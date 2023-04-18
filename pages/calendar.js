import PageHeader from '@/components/PageHeader'
import React from 'react'
import Footer from '@/components/Footer'
import sheBaller from '../public/she-baller2.png'
import hoopBg from '../public/bball-hoop-bg.jpeg'
import Image from 'next/image'


const Calendar = () => {
  return (
    <div className='relative flex flex-col h-screen'>
        <PageHeader pageTitle='Calendar' />
        <section className='h-full bg-bball-hoop bg-center bg-no-repeat bg-cover'>

        {/* <div className='absolute right-10 -top-40'>
          <Image 
              src={sheBaller}
              alt='Divas Logo'
              width='190'
              className='mt-48'
          />
        </div> */}

        </section>

        <section className='sticky bottom-0'>
            <Footer />
        </section>
    </div>
  )
}

export default Calendar