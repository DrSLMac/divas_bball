import React from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"
import Image from 'next/image'
import doomSquad from '../public/doomsquad.jpeg'
import { Inspiration } from 'next/font/google'
import path from 'path';
import fs from 'fs/promises'
import TeamSnapshot from '@/components/TeamSnapshot'

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

const Teams = ({teams}) => {
  const eachTeam = teams.map(team => {
    const { id, teamName, teamPhoto} = team
    return (
      <TeamSnapshot 
        key={id}
        id={id}
        teamName={teamName}
        teamPhoto={teamPhoto}
      />
    )
  })

  return (
    <div className='relative flex flex-col h-screen snap-start'>

        <section className='flex flex-col sticky top-0 items-center h-44 text-white w-screen
          bg-gradient-to-b from-navy-blue from-20% via-deep-red via-40% to-slate-400
          py-8
          xl:h-56 
        '>
          <div className={inspiration.className}>
              <h1 className='text-7xl xl:text-8xl'>Divas Teams</h1>
          </div>
          <div className='py-4 xl:py-6'>
            <button
              id="basic-button"
              className='pageButtons
              h-[2rem] px-6 text-sm
            '>
              <Link href='/'>
                <div className='flex items-center'>
                  <HomeIcon className="text-white pr-3 h-4 md:h-7 md:w-7"/>
                  Return to Home
                </div>
              </Link>
            </button>
          </div>
        </section>

        <section className='bg-slate-400'>

          <div className='grid gap-4 py-2 px-12
            md:grid-cols-3 md:grid-rows-2 cursor-pointer
          '>
            {eachTeam}
            {/* <div id='1' className='bg-slate-300 h-[30vh]'>
              <div className='media-cover-wrapper'>
                <div className='entry-media-wrapper'>
                  <div className='entry-media'>
                    <Image 
                      src={doomSquad}
                      alt='team celebration'
                    />
                    <div className='flex items-end text-navy-blue h-8 px-1 media-poster font-semibold 
                    hover:bg-gradient-to-t from-deep-red
                    text-2xl'>
                      <h2>2025 Divas DoomSquad</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div id='2' className='bg-slate-300 h-[30vh]'>
              <div className='media-cover-wrapper'>
                <div className='entry-media-wrapper'>
                  <div className='entry-media'>
                    <Image 
                      src={doomSquad}
                      alt='team celebration'
                    />
                    <div className='flex items-end text-navy-blue h-8 px-1 media-poster font-semibold 
                    hover:bg-gradient-to-t from-deep-red
                    text-2xl'>
                      <h2>2025 Divas DoomSquad</h2>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            
            <div id='3' className='bg-slate-300 h-[30vh]'>
              <div className='media-cover-wrapper'>
                <div className='entry-media-wrapper'>
                  <div className='entry-media'>
                    <Image 
                      src={doomSquad}
                      alt='team celebration'
                    />
                    <div className='flex items-end text-navy-blue h-8 px-1 media-poster font-semibold 
                    hover:bg-gradient-to-t from-deep-red
                    text-2xl'>
                      <h2>2025 Divas DoomSquad</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div id='4' className='bg-slate-300 h-[30vh]'>Team 4
            
            </div>
            
            <div id='5' className='bg-slate-300 h-[30vh]'>Team 5
            
            </div>
            
            <div id='6' className='bg-slate-300 h-[30vh]'>Team 6
            
            </div> */}
          </div>

        </section>

        <section className='fixed bottom-0'>
            <Footer />
        </section>
    </div>
  )
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'team_data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData)

  return {
    props: {
      teams: data.teams
    },
  };
}

export default Teams