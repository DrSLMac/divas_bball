import Image from 'next/image'
import React from 'react'
import teamPic from '../public/pic3.jpeg'
import { motion } from 'framer-motion'

const AboutBlock = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='relative flex items-center justify-evenly h-screen mx-auto'
    >
        <div>
            <Image 
                src={teamPic}
                alt='Girls team photo op'
                height={'auto'}
                width={700}
            />

        </div>
        <div>
            <h2>
                Basketball Skills Prepare Athletes for Life
            </h2>
        </div>
    </motion.div>
  )
}

export default AboutBlock