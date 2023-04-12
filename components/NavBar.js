import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import divaLogo from '../public/divas.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Accordion, AccordionDetails, AccordionSummary, Grid, ListItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MobileNavBar from './MobileNavBar'
import SmNavBar from './SmNavBar'


const NavBar = () => {

  return (
    <nav className='bg-navy-blue h-16 flex lg:hidden'>
    
        <MobileNavBar />
        <SmNavBar />
        {/* small screen view of navbar */}
        {/* <div className='hidden sm:flex justify-center items-center text-white text-sm h-full w-full lg:hidden'> */}
            {/* <Link href='/'>
                <p className='px-4 transition ease-in-out hover:border-b-2 duration-300'>HOME</p>
            </Link>
            <Link href='/about'>
                <p className='px-4 hover:border-b transition duration-150 hover:ease-in-out'>ABOUT</p>
            </Link>
            <Link href='/teams'>
                <p className='px-4 hover:border-b transition duration-150 hover:ease-in-out'>TEAMS</p>
            </Link>
            <Link href='/events'>
                <p className='px-4 hover:border-b transition duration-150 hover:ease-in-out'>EVENTS</p>
            </Link>
            <Link href='/contact'>
                <p className='px-4 hover:border-b transition duration-150 hover:ease-in-out'>CONTACT</p>
            </Link> */}
        {/* </div> */}
    </nav>
  )
}

export default NavBar