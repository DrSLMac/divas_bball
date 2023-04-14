import React from 'react'
import Image from 'next/image'
import teamPic from '../public/pic3.jpeg'
import divas from '../public/pic1.jpeg'
import breakAway from '../public/pic23.jpeg'
import Link from 'next/link'
import bball from '../public/bball.png'

const PageBlocks = () => {
  return (
    <div className='h-screen grid md:grid-cols-2 grid-rows-3 border-2  border-navy-blue'>
        <div className='hidden md:block relative bg-red-500 border border-navy-blue rounded-md'>
            <Image 
                src={teamPic}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 rounded-md object-cover'
            />
        </div>

        <div className='flex flex-col overflow-y-scroll border bg-slate-200
                border-navy-blue p-4
                justify-evenly
                xs:p-6
        '>
            <div className='text-center text-md font-bold
                sm:text-xl sm:my-8
            '>
                <h1>
                    Basketball Skills Prepare
                </h1>
                <h1>Athletes for Life</h1>
            </div>
            <div className='mx-4 text-sm
                    sm:mx-5 sm:text-md sm:leading-6
            '>
                <p className='indent-6'>Based out of Allen, TX, Divas Basketball is dedicated to the growth and development of the overall athlete. Divas Basketball is here to promote women&apos;s basketball from kindergarten all the way to adulthood. </p>
                <p className='hidden'>We offer skill sessions to match every level out of Allen, Texas, so whether your child wants to learn basic skills, or wants to compete for college scholarships, we will provide an excellent learning environment, clean gym space, and plenty of great coaching to achieve those goals.</p>

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
        
        
        <div className='border bg-amber-300 border-navy-blue place-self-auto'>
            Block 3
        </div>
        
        <div className='hidden md:block relative bg-red-500 border border-navy-blue rounded-md'>
            <Image 
                src={divas}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 rounded-md object-cover'
            />
        </div>
        
        <div className='hidden md:block relative bg-red-500 border border-navy-blue rounded-md'>
            <Image 
                src={breakAway}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 rounded-md object-cover'
            />
        </div>
        
        <div className='bg-amber-800 border border-navy-blue'>
            Block 6
        </div>
    </div>
  )
}

export default PageBlocks