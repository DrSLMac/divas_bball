import React from 'react'
import Image from 'next/image'
import divaLogo from '../public/divas.png'
import Link from 'next/link'
import VerticalMenu from './VerticalMenu';

const items = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'About',
      url: '/about',
      submenus: [
        {
            title: 'About Divas Basketball',
            url: '/about'
        },
        {
            title: 'Coaching Staff',
            url: '/coaches'
        }
      ]
    },
    {
      id: 3,
      title: 'Teams',
      url: '/teams',
      submenus: [
        {
            title: 'Overview of Teams',
            url: '/team-overview'
        },
        {
            title: 'Doom Squad',
            url: '/doom-squad'
        },
        {
            title: 'Diva Squad',
            url: '/diva-squad'
        }
      ]
    },
    {
        id: 4,
        title: 'Events',
        url: '/events',
        submenus: [
            {
                title: 'Calendar',
                url: '/calendar'
            },
            {
                title: 'Upcoming Events',
                url: '/upcoming-events'
            }
        ],
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
        submenus: [
            {
                title: 'Contact Us',
                url: '/contact'
            },
            {
                title: "How to Get Involved",
                url: '/get-involved'
            }
        ]
    }
  ]

const Banner = () => {

  return (
    <div className='hidden sm:flex sticky top-11 justify-around items-center bg-navy-blue
        h-full pt-2 lg:px-[12%]'
    >
        <div className='sm:px-48 lg:px-8'>
            <Link href='/'>
                <Image 
                    src={divaLogo}
                    alt='Diva text over outline of Texas'
                    className='lg:h-[20vh] w-auto'
                    priority
                />
            </Link>
        </div>
        {/* <div className='mr-4'>
            <VerticalMenu items={items} />
        </div> */}
       
    </div>
  )
}

export default Banner