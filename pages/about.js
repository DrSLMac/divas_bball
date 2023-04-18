import PageHeader from '@/components/PageHeader'
import React from 'react'
import Footer from '@/components/Footer'
import sheBaller from '../public/she-baller.png'
import Image from 'next/image'


const About = () => {
  return (
    <div className='relative flex flex-col h-screen'>
        <PageHeader pageTitle='About' />
        <section className='h-full bg-slate-400'>

        <div className='absolute right-8 -top-40'>
          <Image 
              src={sheBaller}
              alt='Divas Logo'
              width='160'
              className='mt-48'
          />
        </div>

        </section>

        <section className='sticky bottom-0'>
            <Footer />
        </section>
    </div>
  )
}

export default About