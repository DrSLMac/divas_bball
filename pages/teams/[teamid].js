import React from 'react'
import path from 'path';
import fs from 'fs/promises'
import { HomeIcon } from "@heroicons/react/24/solid"
import { Inspiration } from 'next/font/google'
import Link from 'next/link';
import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { rosterData } from '@/data/rosterData';


const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

const TeamDetailsPage = (props) => {
  const { teamDetails } = props

  const columns = [
    { field: "id", headerName: "Jersey No.", },
    { field: "headshot", headerName: "Player Pic", type: "" },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "position", headerName: "Position" },
    { field: "graduationYear", headerName: "Graduation Year", type: "number", headerAlign: "left", align: "left"},

  ]


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
        <Box m="20px">
          <Box
            m="40px 0 0 0" 
                height="75vh" 
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: "navy-blue"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "slate-300",
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "slate-500"
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: "navy-blue"
                    },
                    "& .MuiCheckbox-root": {
                        color: `deep-red !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `white !important`,
                    },
                }}
          >
            <DataGrid 
              rows={rosterData}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
          
        </Box>

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