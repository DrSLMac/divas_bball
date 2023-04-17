import React from 'react'
import Image from 'next/image'
import divaLogo from '../public/divas.png'
import Link from 'next/link'
import { Inspiration } from 'next/font/google'

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

// const items = [
//     {
//       id: 1,
//       title: 'Home',
//       url: '/',
//     },
//     {
//       id: 2,
//       title: 'About',
//       url: '/about',
//       submenus: [
//         {
//             title: 'About Divas Basketball',
//             url: '/about'
//         },
//         {
//             title: 'Coaching Staff',
//             url: '/coaches'
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Teams',
//       url: '/teams',
//       submenus: [
//         {
//             title: 'Overview of Teams',
//             url: '/teams'
//         },
//         {
//             title: 'Doom Squad',
//             url: '/doom-squad'
//         },
//         {
//             title: 'Diva Squad',
//             url: '/diva-squad'
//         }
//       ]
//     },
//     {
//         id: 4,
//         title: 'Events',
//         url: '/events',
//         submenus: [
//             {
//                 title: 'Calendar',
//                 url: '/calendar'
//             },
//             {
//                 title: 'Upcoming Events',
//                 url: '/upcoming-events'
//             }
//         ],
//     },
//     {
//         id: 5,
//         title: 'Contact',
//         url: '/contact',
//         submenus: [
//             {
//                 title: 'Contact Us',
//                 url: '/contact'
//             },
//             {
//                 title: "How to Get Involved",
//                 url: '/get-involved'
//             }
//         ]
//     }
//   ]

const Banner = () => {
  return (
    <div className='hidden sm:flex justify-around items-center h-full
        bg-gradient-to-r from-navy-blue from-[42%] via-slate-300 via-[70%] to-slate-100

    '>
        <div className=''>
            <Link href='/'>
                <Image 
                    src={divaLogo}
                    alt='Diva text over outline of Texas'
                    className='sm:h-[8vh] lg:h-[9vh] xl:h-[10vh] 2xl:h-[12vh] w-auto'
                    priority
                />
            </Link>
        </div>

        <div className="text-navy-blue text-center
                text-sm py-2 tracking-wide
                sm:text-lg sm:tracking-wider
                md:text-xl md:py-3  md:tracking-widest
                lg:text-2xl lg:py-4 
                xl:text-3xl"
            >
            <div className='sm:text-3xl' >
                <h1 className={inspiration.className}>Don&apos;t Let the Name Fool You</h1>
            </div>
                <h1>Fast Feet 🏀 Fierce Hearts</h1>
                <h1>Unstoppable Spirits</h1>
        </div>
    </div>
  )
}

export default Banner