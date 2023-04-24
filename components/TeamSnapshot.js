import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TeamSnapshot = ({id, teamName, teamPhoto}) => {
  return (
    <div>
    <Link href={`/${id}`}>

    <div id={id} className='bg-slate-300 h-[30vh]'>
      <div className='media-cover-wrapper'>
        <div className='entry-media-wrapper'>
          <div className='entry-media'>
            <Image 
              src={teamPhoto}
              alt='team celebration'
              width={400}
              height={400}
            />
            <div className='flex items-end text-navy-blue h-8 px-1 media-poster font-semibold 
            hover:bg-gradient-to-t from-deep-red
            text-2xl'>
              <h2>{teamName}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </div>
            
  )
}

export default TeamSnapshot