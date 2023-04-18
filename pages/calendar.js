import PageHeader from '@/components/PageHeader'
import React from 'react'
import Footer from '@/components/Footer'

const Calendar = () => {
  return (
    <div className='relative flex flex-col h-screen'>
        <PageHeader pageTitle='Calendar' />
        <section className='h-full bg-bball-hoop bg-center bg-no-repeat bg-cover'>

        </section>

        <section className='sticky bottom-0'>
            <Footer />
        </section>
    </div>
  )
}

export default Calendar