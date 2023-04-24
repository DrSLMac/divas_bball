import React from 'react'
import path from 'path';
import fs from 'fs/promises'
import Image from 'next/image';
import { HomeIcon } from "@heroicons/react/24/solid"
import { Inspiration } from 'next/font/google'
import Link from 'next/link';

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

const TeamDetailsPage = () => {
  return (
    <div className='relative flex flex-col h-screen w/screen snap-start'>
        <section className='flex flex-col sticky top-0 items-center h-44 text-white w-screen
          bg-gradient-to-b from-navy-blue from-20% via-deep-red via-40% to-slate-400
          py-8
          xl:h-56 
        '>
          <div className={inspiration.className}>
              <h1 className='text-7xl xl:text-8xl'>Meet the Team</h1>
          </div>

        <div className='flex items-center'>
          <div className='xl:py-6'>
            <button
              id="basic-button"
              className='pageButtons
              h-[2rem] px-3 mx-3 text-xs
            '>
              <Link href='/teams'>
                <div className='flex items-center'>
                  {/* <HomeIcon className="text-white pr-3 h-4 md:h-7 md:w-7"/> */}
                  Back to Previous Page
                </div>
              </Link>
            </button>
          </div>
          <div className='py-4 xl:py-6'>
            <button
              id="basic-button"
              className='pageButtons
              h-[2rem] px-3 mx-3 text-xs
            '>
              <Link href='/'>
                <div className='flex items-center'>
                  <HomeIcon className="text-white pr-3 h-4 md:h-7 md:w-7"/>
                  Return to Home
                </div>
              </Link>
            </button>
          </div>
        </div>
        </section>

        <section className='flex-grow bg-slate-400 w-screen md:px-8 midmd:px-20 lg:px-28 xl:px-36 2xl:px-52'>

        </section>

    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;

  const teamId = params.teamid;

  const filePath = path.join(process.cwd(), 'data', 'team_data.json');
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData);

  const teamInfo = data.teams.find(team => team.id === teamId);

  return {
    props: {
      teamDetails: teamInfo
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { teamid: 'team1' } },
      { params: { teamid: 'team2' } },
      { params: { teamid: 'team3' } },
      { params: { teamid: 'team4' } },
      { params: { teamid: 'team5' } },
      { params: { teamid: 'team6' } },
    ],
    fallback: false
  }
}


export default TeamDetailsPage