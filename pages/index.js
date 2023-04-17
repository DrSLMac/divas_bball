import Head from 'next/head'
import Socials from '@/components/Socials'
import Banner from '@/components/Banner'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import PageBlocks from '@/components/PageBlocks'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll'>
      <Head>
        <title>Divas Basketball</title>
        <meta name="description" content="Divas Basketball" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id='/' className='snap-start'>
        <Socials />
        <Banner />
        {/* <NavBar /> */}
      </header>

      <main>
        <section >
          <Hero />
        </section>

        <section className='snap-center' >
          <PageBlocks />
        </section>

        <section className='snap-center'>
          <Contact />
        </section>

        {/* <div className='relative snap-center' >
            <footer className='inset-x-0 bottom-0'>
                <Footer />
            </footer>
        </div> */}
      </main>

    </div>
  )
}
