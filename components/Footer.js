import React from 'react'
import Link from 'next/link'
import divaLogo from '../public/divas.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import SmNavBar from './SmNavBar'

const Footer = () => {
  return (
    <div className='flex justify-around items-center h-[8vh] w-screen bg-navy-blue'>
        <Link href='#/'>
            <Image 
                src={divaLogo}
                alt='Divas Logo'
                width='150'
                className='cursor-pointer pl-1'
                priority
            />
        </Link>
        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.2
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5}}
            className='flex text-white cursor-pointer'
        >
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
            <SocialIcon 
                network="email"
                fgColor="white"
                bgColor="transparent"
                url="/contact"
                
            />
        </motion.div>
      </div>
  )
}

export default Footer