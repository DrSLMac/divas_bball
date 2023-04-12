import Head from 'next/head'
import { Livvic } from 'next/font/google'
import Socials from '@/components/Socials'
import Banner from '@/components/Banner'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'


const livvic = Livvic({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Divas Basketball</title>
        <meta name="description" content="Divas Basketball" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={livvic.className}>
      <Socials />

      <Banner />

      <NavBar />

      <Hero />

      <Footer />

      </main>
    </>
  )
}
