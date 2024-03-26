'use client'
import Link from 'next/link'
import { useState } from 'react'
import { IoCloseSharp, IoMenu } from 'react-icons/io5'
import Logo from '../../core/home/Logo'
import styles from './NavBar.module.css'

function NavBar({ isMenuOpen, setIsMenuOpen }) {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
    setNav(!nav) // Toggle the menu state
  }
  // const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav)

  return (
    <nav className='pt-4 md:py-5 px-14 bg-[#080808] '>
      <div
        className={`${styles.navbar} flex justify-between md:gap-[30rem] items-center mx-auto `}
      >
        <Link href='/'>
          <Logo />
        </Link>
        <div className='w-full md:block md:w-auto'>
          <ul className='font-normal hidden md:flex gap-6 flex-col md:p-0 mt-2  md:flex-row md:space-x- '>
            <li>
              <Link
                href='/'
                className='pr-6 nav-link hover:text-brightYellow'
                aria-current='page'
              >
                Hire Talents
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className=' py-2  pr-4 nav-link hover:text-brightYellow'
                aria-current='page'
              >
                Grito Academy
              </Link>
            </li>
            <li>
              <Link
                href='#footer'
                className=' py-2  pr-4 nav-link hover:text-brightYellow'
                aria-current='page'
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div
            className={`${styles.menu} md:hidden absolute block  top-0  z-50 text-3xl `}
            onClick={handleClick}
          >
            {!nav ? (
              <IoMenu
                className='w-8 relative top-5 sm:left-40  left-60 text-white'
                size={50}
              />
            ) : (
              <IoCloseSharp
                className='w-8 relative left-60 sm:left-40 top-7  text-white'
                size={50}
              />
            )}
          </div>
        </div>

        {/* small screens */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute bg-dark px-5 left-0 w-[100vw] z-10 top-0   text-white'
          }
        >
          <li className='border-b-2 py-2 border-brightYellow mb-5  w-full'>
            <Link href='/' className=''>
              <Logo />
            </Link>
            <Link
              onClick={handleClose}
              href='/'
              // smooth={true}
              offset={-200}
              duration={500}
            >
              Hire Talents
            </Link>
          </li>
          <li className='border-b-2 py-2 border-brightYellow mb-5  w-full '>
            <Link
              onClick={handleClose}
              href='/'
              // smooth={true}
              offset={-50}
              duration={500}
            >
              Grito Academy
            </Link>
          </li>
          <li className='border-b-2  py-2 border-brightYellow mb-5  p-[2px]'>
            <Link
              onClick={handleClose}
              href='#footer'
              // smooth={true}
              offset={-100}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
