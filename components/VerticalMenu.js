import React, { useState } from 'react'

const VerticalMenu = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    console.log("items: ", items)

    const handleClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }
    //  z-99 w-auto 
    const renderSubmenus = (submenus) => {
        return (
            <ul className='p-4 bg-white rounded-lg ml-4 w-48'>
                {submenus.map((submenu) => (
                    <li 
                        key={submenu.title}
                        className='p-2 text-navy-blue bg-white hover:bg-gray-400'
                    >
                        <a href={submenu.url}>
                            {submenu.title}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }


  return (
    <section className='hidden lg:flex w-48'>
        <ul className='space-y-2'>
            {items.map((item, index) => (
                <li 
                    key={item.id}
                    className='flex items-start'
                >
                    <button
                        type='button'
                        className='flex items-center justify-between rounded-lg px-4 py-4  
                        text-md font-medium text-white uppercase
                        hover:text-navy-blue hover:bg-white hover:ring-deep-red
                        focus:bg-white focus:text-navy-blue focus:ring focus-ring-offset-2 '
                        onClick={() => handleClick(index)}
                    >
                        <span>{item.title}</span>
                        {item.submenus && (
                            <svg
                                className={`w-5 h-5 text-gray-500 ${index === activeIndex ? 'transform rotate-180' : ''}`}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                    <div>
                        {item.submenus && index === activeIndex && renderSubmenus(item.submenus)}
                    </div>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default VerticalMenu