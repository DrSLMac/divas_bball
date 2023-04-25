import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TeamSnapshot = ({id, teamName, teamPhoto}) => {
  return (
    <div>
      <Link href={`/teams/${id}`}>
        <div id={id} className='teamSnapshot cursor-pointer '>  
          <div style={{backgroundImage: `url(${teamPhoto})`}}
          className='flex font-semibold w-full text-navy-blue bg-no-repeat bg-cover bg-center hover:bg-gradient-to-t from-deep-red mb-8 hover:text-white
          
          '>
            <div className='h-full w-full hover:bg-gradient-to-t from-deep-red'>
              <div className='p-1 
                text-xl mt-[20vh]
                xxs:mt-[20.7vh]
                2xl:mt-[27vh]
              '>
                <h2>{teamName}</h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
            
  )
}

export default TeamSnapshot