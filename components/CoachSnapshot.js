import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CoachSnapshot = ({id, name, title, bio, headshot}) => {
  return (
    <div>
        <Link href='/'>
          <div key={id} id={id} className='coachProfile'>
            <div>
                <Image 
                src={headshot}
                alt='coach headshot'
                width='80'
                height='80'
                className='coachPic'
                />
            </div>

            <div className='text-center w-[13rem] 
                xs:w-[14rem] sm:w-[16rem] md:w-[18rem]
                midmd:w-[24rem]
                lg:w-[14rem]
            '>
              <h1 className='font-semibold pb-1'>{name}</h1>
              <h2>{title}</h2>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default CoachSnapshot