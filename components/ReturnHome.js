import React from 'react'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"

const ReturnHome = () => {
  return (
    <div className='py-8 xl:py-8'>
        <button
            id="basic-button"
            className='pageButtons
            h-[4rem] px-8 text-[2rem]
            '>
            <Link href='/'>
            <div className='flex items-center'>
                <HomeIcon className="text-white pr-3 w-12"/>
                Return to Home
            </div>
            </Link>
        </button>
    </div>
  )
}

export default ReturnHome