import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CoachSnapshot = ({id, name, title, headshot}) => {
  return (
    <div>
        <Link href={`/${id}`}>
          <div key={id} id={id} className='coachProfile'>
            <div>
                <Image 
                src={headshot}
                alt='coach headshot'
                width='80'
                height='80'
                className='coachPic lg:pt-1'
                />
            </div>

            <div className='text-center w-[13rem] 
                xs:w-[14rem] minism:w-[17rem] sm:w-[18rem] md:w-[20rem]
                midmd:w-[24rem]
                lg:w-[14rem]
            '>
              <h1 className='font-medium pb-1'>{name}</h1>
              <h2>{title}</h2>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default CoachSnapshot