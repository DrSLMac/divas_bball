import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import { useForm } from "react-hook-form"
import Link from 'next/link'
import divaLogo from '../public/divas.png'
import Image from 'next/image'
import SmNavBar from './SmNavBar'
import { Inspiration } from 'next/font/google'
import MobileNavBar from './MobileNavBar'

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

// import { useForm, SubmitHandler } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log("contact form data: ", data);

    console.log(watch("example"))

  return (
    <div className='relative h-screen flex flex-col text-center  md:flex-row  md:px-10 px-2 items-center'>
        <div className='flex 
        md:justify-around items-center top-0
            w-screen bg-gradient-to-r from-navy-blue from-20% to-deep-red
            h-16
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
            viewport={{ once: true}}
            className='flex items-center pl-2 pr-2 w-[100%]
            xl:pl-10
            '>
            {/* <div className='sm:hidden'>
                <Link href='/'>
                    <Image 
                        src={divaLogo}
                        alt='Divas Logo'
                        width='150'
                        className='cursor-pointer'
                        priority
                    />
                </Link>
            </div> */}
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
            <MobileNavBar />
    </div>
        
    <div className='-z-10 flex flex-col'>
        <h3 className='uppercase
            py-4 tracking-[15px] text-xl
            md:top-20 md:tracking-[20px] md:text-2xl
            lg:text-3xl lg:tracking-[22px]'>
            Contact
        </h3>

        <div className='flex flex-col items-center z-0
             space-y-[3vh]
             lg:space-y-12
             '>
            <h4 className='font-semibold text-center
                text-lg 
                md:text-xl
                lg:text-3xl
                xl:text-4xl 
                2xl:text-4xl
            '>
                Want to know more?{" "}
                <br></br>
                Looking for ways to get involved?{" "}
                <br></br>
                <span className='decoration-deep-red underline'>Get in touch!</span>
            </h4>

            <div className='z-0   
                space-y-1 text-base 
                md:space-y-4 md:text-lg
                lg:space-y-10 lg:text-xl
            '>
                <div className='flex z-0 items-center space-x-2 md:space-x-5  justify-center'>
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
           

            <form className='flex flex-col
            text-sm space-y-2 w-[300px]
            md:w-[450px]
            lg:w-[600px] lg:text-base
            '
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex justify-evenly
                    flex-col space-y-2
                    lg:flex-row lg:space-y-0 lg:justify-between
                    '>
                    <input  placeholder='Name' className='contactInput lg:w-[298px]' type="text" {...register('name')}/>
                    <input placeholder='Email' className='contactInput lg:w-[298px]' type="email" {...register('email')}/>
                </div>
                <div className='flex flex-col space-y-2' >
                    <input placeholder='Subject' className='contactInput' type="text" {...register('subject')}/>
                    <textarea  placeholder='Message' className='contactInput' {...register('message')}/>
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

    </div>
    </div>
  )
}

export default Contact