import React, { useState, useEffect} from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'

const Carousel = ({images}) => {

  return (
    <section>
        <motion.div className=' scroll-smooth overflow-hidden
        flex justify-evenly items-center mx-auto'>
            <div className='w-full flex space-x-36 snap-x snap-mandatory overflow-x-scroll p-10 '>
                {images.map((image) => (
                    <Image 
                        key={image.id}
                        src={image.src.src}
                        alt='carousel images'
                        height={500}
                        width={300}
                        className='rounded-xl border-4 border-navy-blue shadow-4xl h-auto'
                        priority
                    />
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default Carousel