import PageHeader from '@/components/PageHeader'
import React from 'react'
import Footer from '@/components/Footer'

const About = () => {
  return (
    <div className='relative flex flex-col h-screen'>
        <PageHeader pageTitle='About' />

        <section className='h-full bg-slate-400'>

        </section>

        <section className='sticky bottom-0'>
            <Footer />
        </section>
    </div>
  )
}

export default About