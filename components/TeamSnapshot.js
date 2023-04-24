import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TeamSnapshot = ({id, teamName, teamPhoto}) => {
  return (
    <div>
      <Link href={`/teams/${id}`}>
        <div id={id} className='teamSnapshot'>

          {/* <div className='media-cover-wrapper'> */}

            {/* <div className='entry-media-wrapper'> */}
              
              <div className='flex flex-col items-center justify-between hover:bg-gradient-to-t from-deep-red'>
              <div >
                <Image 
                  src={teamPhoto}
                  alt='team celebration'
                  width='280'
                  height='280'
                  // fill
                  className='object-contain'
                />
              </div>
                <div className='flex items-end font-semibold text-navy-blue 
                  
                  h-8 px-1
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