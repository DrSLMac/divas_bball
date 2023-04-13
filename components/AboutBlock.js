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
        className='relative bg-bball-bg h-screen flex items-center'
    >
        <div className='flex items-center justify-center border-r-8 border-deep-red h-[90%] px-8'>
            <div className='w-[100%]'>
                <Image 
                    src={teamPic}
                    alt='Girls team photo op'
                    height={'auto'}
                    width={1000}
                    className='rounded-lg shadow-4xl border-8 border-navy-blue'
                />
            </div>

        </div>
        <div className='flex items-center justify-center w-[80%] mx-4'>
            <div className='p-4 bg-gray-400/90 text-center text-4xl font-bold'>
                <h1>
                    Basketball Skills Prepare
                </h1>
                <h1>Athletes for Life</h1>
                <p></p>
            </div>
        </div>
    </motion.div>
  )
}

export default AboutBlock