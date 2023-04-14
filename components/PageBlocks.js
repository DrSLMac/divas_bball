import React from 'react'
import Image from 'next/image'
import teamPic from '../public/pic3.jpeg'
import divas from '../public/pic1.jpeg'
import breakAway from '../public/pic23.jpeg'
import Link from 'next/link'
import bball from '../public/bball.png'

const PageBlocks = () => {
  return (
    <div className='h-screen grid md:grid-cols-2 grid-rows-3'>
        <div className='hidden md:block relative bg-deep-red bg-opacity-60 border border-navy-blue'>
            <Image 
                src={teamPic}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 object-cover shadow-2xl'
            />
        </div>

        <div className='flex flex-col overflow-y-scroll border bg-slate-200
                border-navy-blue p-4
                justify-evenly
                xs:p-6
                
        '>
            <div className='text-center text-lg font-bold
                xs:text-xl
                md:mt-4
            '>
                <h1>
                    Basketball Skills Prepare
                </h1>
                <h1>Athletes for Life</h1>
            </div>
            <div className='mx-4 text-sm line-clamp-4 leading-4
                xxs:leading-5
                xs:leading-6 xs:line-clamp-6
                sm:mx-5 sm:text-md 
                lg:line-clamp-none
            '>
                <p className='indent-6'>Based out of Allen, TX, Divas Basketball is dedicated to the growth and development of the overall athlete. Divas Basketball is here to promote women&apos;s basketball from kindergarten all the way to adulthood. </p>
                <p className='sm:block indent-6 sm:space-y-2'>We offer skill sessions to match every level out of Allen, Texas, so whether your child wants to learn basic skills, or wants to compete for college scholarships, we will provide an excellent learning environment, clean gym space, and plenty of great coaching to achieve those goals.</p>

            </div>
            <div className='flex w-[100%] justify-around items-center
            '>
                <button
                    id="basic-button"
                    className='text-white bg-deep-red transition duration-300 ease-in-out rounded-[2rem]
                    hover:bg-navy-blue hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                    h-[2rem] px-6 text-sm
                    '>
                    <Link href='/about'>
                        Find Out More
                    </Link>
                </button>
                <div>
                    <Image 
                        src={bball}
                        alt='Basketball'
                        className='rounded-md w-auto h-12'
                    />
                </div>
            </div>
        </div>
        
        
        <div className='flex flex-col overflow-y-scroll border bg-slate-200
                border-navy-blue p-4
                justify-evenly
                xs:p-6
        '>
            <div className='text-center text-lg font-bold
                xs:text-xl
            '>
                <h1>
                    Basketball Skills Prepare
                </h1>
                <h1>Athletes for Life</h1>
            </div>
            <div className='mx-4 text-sm line-clamp-4 leading-4
                xxs:leading-5
                xs:leading-6 xs:line-clamp-6
                sm:mx-5 sm:text-md 
                lg:line-clamp-none
            '>
                <p className='indent-6'>Based out of Allen, TX, Divas Basketball is dedicated to the growth and development of the overall athlete. Divas Basketball is here to promote women&apos;s basketball from kindergarten all the way to adulthood. </p>
                <p className='sm:block indent-6 sm:space-y-2'>We offer skill sessions to match every level out of Allen, Texas, so whether your child wants to learn basic skills, or wants to compete for college scholarships, we will provide an excellent learning environment, clean gym space, and plenty of great coaching to achieve those goals.</p>

            </div>
            <div className='flex w-[100%] justify-around items-center
            '>
                <button
                    id="basic-button"
                    className='text-white bg-deep-red transition duration-300 ease-in-out rounded-[2rem]
                    hover:bg-navy-blue hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                    h-[2rem] px-6 text-sm
                    '>
                    <Link href='/about'>
                        Find Out More
                    </Link>
                </button>
                <div>
                    <Image 
                        src={bball}
                        alt='Basketball'
                        className='rounded-md w-auto h-12'
                    />
                </div>
            </div>
        </div>
        
        <div className='hidden md:block relative bg-navy-blue bg-opacity-60 border border-navy-blue'>
            <Image 
                src={divas}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 object-cover'
            />
        </div>
        
        <div className='hidden md:block relative bg-deep-red bg-opacity-60 border border-navy-blue'>
            <Image 
                src={breakAway}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 object-cover'
            />
        </div>
        
        <div className='flex flex-col overflow-y-scroll border bg-slate-200
                border-navy-blue p-4
                justify-evenly
                xs:p-6
        '>
            <div className='text-center text-lg font-bold
                xs:text-xl
            '>
                <h1>
                    Basketball Skills Prepare
                </h1>
                <h1>Athletes for Life</h1>
            </div>
            <div className='mx-4 text-sm line-clamp-4 leading-4
                xxs:leading-5
                xs:leading-6 xs:line-clamp-6
                sm:mx-5 sm:text-md 
                lg:line-clamp-none
            '>
                <p className='indent-6'>Based out of Allen, TX, Divas Basketball is dedicated to the growth and development of the overall athlete. Divas Basketball is here to promote women&apos;s basketball from kindergarten all the way to adulthood. </p>
                <p className='sm:block indent-6 sm:space-y-2'>We offer skill sessions to match every level out of Allen, Texas, so whether your child wants to learn basic skills, or wants to compete for college scholarships, we will provide an excellent learning environment, clean gym space, and plenty of great coaching to achieve those goals.</p>

            </div>
            <div className='flex w-[100%] justify-around items-center
            '>
                <button
                    id="basic-button"
                    className='text-white bg-deep-red transition duration-300 ease-in-out rounded-[2rem]
                    hover:bg-navy-blue hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg
                    h-[2rem] px-6 text-sm
                    '>
                    <Link href='/about'>
                        Find Out More
                    </Link>
                </button>
                <div>
                    <Image 
                        src={bball}
                        alt='Basketball'
                        className='rounded-md w-auto h-12'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageBlocks