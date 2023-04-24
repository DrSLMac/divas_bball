import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TeamSnapshot = ({id, teamName, teamPhoto}) => {
  return (
    <div>
      <Link href={`/teams/${id}`}>
        <div id={id} className='teamSnapshot cursor-pointer'>

          {/* <div className='media-cover-wrapper'> */}

            {/* <div className='entry-media-wrapper'> */}
              
              <div className='flex flex-col items-center justify-between'>
                <Image 
                  src={teamPhoto}
                  alt='team celebration'
                  width='200'
                  height='200'
                  className='w-auto'
                />
                <div className='flex justify-center font-semibold text-navy-blue w-full rounded-md
                  hover:bg-gradient-to-t from-deep-red
                  px-1
                  text-2xl'
                >
                  <h2>{teamName}</h2>
                </div>

              </div>

            {/* </div> */}

          {/* </div> */}

        </div>
      </Link>
    </div>
            
  )
}

export default TeamSnapshot