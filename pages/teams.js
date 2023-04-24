import React from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"
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
    <div className='relative flex flex-col h-screen w-screen snap-start'>

        <section className='flex flex-col sticky top-0 items-center h-44 text-white w-screen z-90
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

        <section className='flex-grow bg-slate-400 w-screen pb-72 '>
          <div className='grid gap-4 py-2 px-12
            md:grid-cols-3 md:grid-rows-2 
          '>
            {eachTeam}
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