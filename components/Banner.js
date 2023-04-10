import React from 'react'
import Image from 'next/image'
import divaLogo from '../public/divas.png'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='hidden sm:flex justify-around items-center bg-navy-blue
        h-full px-36 pt-3'
    >
        <Image 
            src={divaLogo}
            alt='Diva text over outline of Texas'
            className='lg:h-[28vh] w-auto pb-3'
            priority
        />
        <div className='hidden lg:flex flex-col justify-center items-end text-white text-lg h-full w-full ml-5
        xl:text-xl xl:tracking-wide
        2xl:text-2xl 2xl:tracking-widest'>
            <Link href='/'>
                <p className='px-4 py-3 transition ease-in-out hover:border-b-2 duration-300'>HOME</p>
            </Link>
            <Link href='/about'>
                <p className='px-4 py-3 hover:border-b transition duration-150 hover:ease-in-out'>ABOUT</p>
            </Link>
            <Link href='/teams'>
                <p className='px-4 py-3 hover:border-b transition duration-150 hover:ease-in-out'>TEAMS</p>
            </Link>
            <Link href='/events'>
                <p className='px-4 py-3 hover:border-b transition duration-150 hover:ease-in-out'>EVENTS</p>
            </Link>
            <Link href='/contact'>
                <p className='px-4 py-3 mb-2 hover:border-b transition duration-150 hover:ease-in-out'>CONTACT</p>
            </Link>
        </div>
    </div>
  )
}

export default Banner