import Head from 'next/head'

import Socials from '@/components/Socials'
import Banner from '@/components/Banner'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import AboutBlock from '@/components/AboutBlock'
import PageBlocks from '@/components/PageBlocks'




export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll'>
      <Head>
        <title>Divas Basketball</title>
        <meta name="description" content="Divas Basketball" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='snap-center'>
        <Socials />
        <Banner />
        {/* <NavBar /> */}
      </header>

      <main>
        <section >
          <Hero />
        </section>

        <section className='snap-center' >
          {/* <AboutBlock /> */}
          <PageBlocks />
        </section>

      </main>
      <section className='snap-end'>
        <Footer />
      </section>
    </div>
  )
}
