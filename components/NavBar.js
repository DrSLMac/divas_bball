import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import divaLogo from '../public/divas.png'
import burger from '../public/burger-menu.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='bg-navy-blue h-16 flex lg:hidden'>
        <div className='flex h-full w-full justify-between items-center px-8 sm:hidden'>
            <Link href='/'>
                <Image 
                    src={divaLogo}
                    alt='Divas Logo'
                    width='150'
                    className='cursor-pointer'
                    priority
                />
            </Link>

            <div onClick={handleNav} className='cursor-pointer'>
                <AiOutlineMenu size={35} color='white'/>
            </div>
        </div>
        <div className={
            menuOpen 
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-5 ease-in duration-500' 
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
            <div className='flex w-full items-center justify-end pt-10'>
                <div onClick={handleNav} className='cursor-pointer'>
                    <AiOutlineClose size={25}/>
                </div>
                
            </div>
        </div>

        <div className='hidden sm:flex justify-center items-center text-white text-sm h-full w-full lg:hidden'>
            <Link href='/'>
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
            </Link>
        </div>

    </nav>
  )
}

export default NavBar