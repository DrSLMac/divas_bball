import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

const Socials = () => {
  return (
    <section className='bg-deep-red flex items-start justify-between
        mx-auto w-screen
        h-11  px-3
        md:px-6
        lg:px-20    
        xl:px-40
        2xl:px-60'
    >
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.3,
            }}
            animate={{ x: 0, opacity: 1, scale: 0.8 }}
            transition={{ duration: 1.5 }}
            className='flex flex-row items-center'
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
        </motion.div>

        <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.3
                }}
                animate={{ x: 0, opacity: 1, scale: 0.9 }}
                transition={{ duration: 1.5}}
                className='flex flex-row items-center text-white cursor-pointer px-4 sm:px-3'
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
    </section>
  )
}

export default Socials