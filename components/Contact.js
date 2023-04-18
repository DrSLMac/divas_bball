import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import { useForm } from "react-hook-form"
import Link from 'next/link'
import SmNavBar from './SmNavBar'
import Footer from './Footer'
import { Inspiration } from 'next/font/google'

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

// import { useForm, SubmitHandler } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (formData) => {
        window.location.href = `mailto:texas.divas.basketball@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className='relative h-screen flex flex-col text-center bg-contact-bg bg-center bg-no-repeat bg-cover w-screen'>
        <div className='z-90 flex h-16 w-screen items-center sticky top-0 justify-around 
            bg-gradient-to-r from-navy-blue from-20% to-deep-red
            '>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.3,
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: false}}
                className='flex items-center w-[100%] pl-6
                xl:pl-10
                '>
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
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.3
                }}
                animate={{ x: 0, opacity: 1, scale: 0.9 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true}}
                className='flex text-white cursor-pointer'
            >
            <div>
                <SmNavBar />
            </div>
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.2
                }}
                whileInView={{ opacity: 1, X: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5}}
                className='flex text-white cursor-pointer sm:hidden'
            >
                <Link href='#/'>
                    <HomeIcon className="text-white pr-10 h-7 md:h-7 md:w-7"/>
                </Link>
            </motion.div>
        </div>
        
        {/* <div className='flex flex-col overflow-y-auto z-0'> */}

            <div className='flex flex-col overflow-y-auto items-center h-full
                space-y-[1vh] py-6
                xs:space-y-6
                sm:space-y-10 sm:py-8
                md:py-10
                lg:space-y-12
                '>
                <h4 className='font-semibold text-center
                    text-xl py-1
                    xs:space-y-4 xs:text-2xl
                    md:text-3xl
                    lg:text-4xl lg:space-y-6
                    xl:text-4xl 
                    2xl:text-4xl
                '>
                    Want to know more?{" "}
                    <br></br>
                    Looking for ways to get involved?{" "}
                    <br></br>
                    <div className={inspiration.className}>
                    <span className='text-6xl lg:text-7xl'>
                        Get in touch!
                    </span>
                    </div>
                </h4>

                <div className=' 
                    text-base space-y-1
                    sm:space-y-2 sm:text-lg
                    md:space-y-4 md:text-xg
                    lg:text-2xl
                '>
                    <div className='flex items-center space-x-2 md:space-x-5  justify-center'>
                        <PhoneIcon className="text-navy-blue h-5 md:h-7 md:w-7 animate-pulse"/>
                        <p>+1 (469) 545-5260</p>
                    </div>

                    <div className='flex items-center justify-center
                        space-x-1
                        md:space-x-5
                    '>
                        <EnvelopeIcon className="text-navy-blue h-5 md:h-7 md:w-7 animate-pulse"/>
                        <p>texas.divas.basketball@gmail.com</p>
                    </div>

                    <div className='flex items-center md:space-x-5 space-x-1 justify-center'>
                        <MapPinIcon className="text-navy-blue h-7 w-7 animate-pulse"/>
                        <p>Allen, TX</p>
                    </div>
                </div>
            

                <form onSubmit={handleSubmit(onSubmit)}     
                        className='flex flex-col
                        text-sm space-y-2 w-[300px] shadow-xl
                        sm:w-[375px]
                        md:w-[450px]
                        lg:w-[600px] lg:text-base
                '>
                    <div className='flex justify-evenly
                        flex-col space-y-2
                        lg:flex-row lg:space-y-0 lg:justify-between
                    '>
                        <input {...register('name')} placeholder='Name' className='contactInput lg:w-[298px]' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput lg:w-[298px]' type="email" />
                    </div>
                    <div  className='flex flex-col space-y-2'>
                        <input {...register('subject')} placeholder='Subject' className='contactInput' type="text"/>
                        <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    </div>
                    <button className='bg-gradient-to-r from-deep-red from-20% to-navy-blue rounded-md text-white
                        font-bold uppercase
                        text-lg tracking-[4px] py-3 px-4
                        lg:text-2xl lg:tracking-[10px] lg:py-5'
                    >
                        Submit
                    </button>
                </form>
            </div>
            {/* <div className='relative snap-center' > */}
            <footer className='sticky bottom-0'>
                <Footer />
            </footer>
        {/* </div> */}
    </div>
  )
}

export default Contact