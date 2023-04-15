import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import SmNavBar from './SmNavBar'
import MobileNavBar from './MobileNavBar'
import Image from 'next/image'
import divaLogo from '../public/divas.png'

const Socials = () => {
  return (
    <section className='flex items-center
         w-screen bg-gradient-to-r from-navy-blue from-20% to-deep-red
        h-11   
        xl:px-10
        2xl:px-1'
    >

        {/* <div className='flex'> */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.3,
                }}
                animate={{ x: 0, opacity: 1, scale: 1.1 }}
                transition={{ duration: 1.5 }}
                className='flex items-center pl-4 w-[100%]'
            >
                <Link href='/'>
                    <Image 
                        src={divaLogo}
                        alt='Divas Logo'
                        width='125'
                        className='cursor-pointer'
                        priority
                    />
                </Link>
                <SocialIcon 
                    url="https://www.facebook.com/texasdivasbasketball" 
                    fgColor="white"
                    bgColor="transparent"
                />
                <SocialIcon 
                    url='https://www.instagram.com/divasbasketball/?fbclid=IwAR0Yq9rhf63FQOW9AxEwOpqaCT1xJAvjAs-5lUKox_r8WjTCQNqnyDkL2OU'
                    fgColor="white"
                    bgColor="transparent"
                />
                <SocialIcon 
                    url='https://twitter.com/LSUwbkb'
                    fgColor="white"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.3
                }}
                animate={{ x: 0, opacity: 1, scale: 0.9 }}
                transition={{ duration: 1.5}}
                className='flex text-white cursor-pointer'
            >
                <SocialIcon 
                    network="email"
                    fgColor="white"
                    bgColor="transparent"
                    url="/contact"
                />
                <Link href='/contact'>
                    <p className='uppercase hidden sm:inline-flex text-sm'>
                        GET IN TOUCH
                    </p>
                </Link>
            </motion.div>
        {/* </div> */}

        <SmNavBar />

        <MobileNavBar />
    </section>
  )
}

export default Socials