import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const SmNavBar = () => {
    const [firstMenu, setFirstMenu] = useState(null)
    const [secondMenu, setSecondMenu] = useState(null)
    const [thirdMenu, setThirdMenu] = useState(null);
    const [fourthMenu, setFourthMenu] = useState(null)

    const openFirst = Boolean(firstMenu)
    const handleFirstClick = (event) => setFirstMenu(event.currentTarget);
    const closeFirst = () => setFirstMenu(null)
    
    const openSecond = Boolean(secondMenu);
    const handleSecondClick = (event) => setSecondMenu(event.currentTarget);
    const closeSecond = () => setSecondMenu(null);

    const openThird = Boolean(thirdMenu);
    const handleThirdClick = (event) => setThirdMenu(event.currentTarget);
    const closeThird = () => setThirdMenu(null);

    const openFourth = Boolean(fourthMenu);
    const handleFourthMenu = (event) => setFourthMenu(event.currentTarget);
    const closeFourth = () => setFourthMenu(null);

  return (
        <div className='hidden sm:flex sticky justify-center items-center text-white text-md w-full lg:hidden'>
            <div>
                <Button
                    id="basic-button"
                    className='text-white px-8 transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    <Link href='/'>
                        Home
                    </Link>
                </Button>
            </div>

            <div>
                <Button
                    id="basic-button"
                    aria-controls={openFirst ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openFirst ? 'true' : undefined}
                    onClick={handleFirstClick}
                    className='text-white px-8 transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    About
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={firstMenu}
                    open={openFirst}
                    onClose={closeFirst}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeFirst}>
                        <Link href='/about'>
                            About
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeFirst}>
                        <Link href='/coaches'>
                            Coaching Staff
                        </Link>
                    </MenuItem>
                </Menu>
            </div>

            <div>
                <Button
                    id="basic-button"
                    aria-controls={openSecond ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openSecond ? 'true' : undefined}
                    onClick={handleSecondClick}
                    className='text-white px-8 transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    Teams
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={secondMenu}
                    open={openSecond}
                    onClose={closeSecond}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeSecond}>
                        <Link href='/teams'>
                            Overview of Teams
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeSecond}>
                        <Link href='/doom-squad'>
                            Doom Squad
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeSecond}>
                        <Link href='/diva-squad'>
                            Diva Squad
                        </Link>
                    </MenuItem>
                </Menu>
            </div>

            <div>
                <Button
                    id="basic-button"
                    aria-controls={openThird ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openThird ? 'true' : undefined}
                    onClick={handleThirdClick}
                    className='text-white px-8 transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    Events
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={thirdMenu}
                    open={openThird}
                    onClose={closeThird}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeThird}>
                        <Link href='/calendar'>
                            Calendar
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeThird}>
                        <Link href='/upcoming-events'>
                            Upcoming Events
                        </Link>
                    </MenuItem>
                </Menu>
            </div>

            <div>
                <Button
                    id="basic-button"
                    aria-controls={openFourth ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openFourth ? 'true' : undefined}
                    onClick={handleFourthMenu}
                    className='text-white px-8 transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    Contact
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={fourthMenu}
                    open={openFourth}
                    onClose={closeFourth}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeFourth}>
                        <Link href='/contact'>
                            Contact us
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeFourth}>
                        <Link href='/get-involved'>
                            Get Involved
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    // </nav>
  )
}

export default SmNavBar