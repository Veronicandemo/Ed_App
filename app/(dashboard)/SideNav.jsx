'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SIDENAV_ITEMS } from '../../constants/nav.constants'
// import { Icon } from "@iconify/react";

const MenuItem = ({ item }) => {
  const pathname = usePathname()
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  return (
    <div className=''>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={` nav-text w-full  justify-between`}
          >
            <div
              className={`flex flex-row  items-center space-x-4 ${pathname.includes(
                item.path ? 'text-darkGreen' : ''
              )}`}
            >
              {/* {item.icon} */}
              <span className='flex text-sm font-medium'>{item.title}</span>
            </div>

            {/* <div className={`${subMenuOpen ? "rotate-360" : "rotate-90"} flex`}>
              {/* <Icon icon="lucide:chevron-down" width="24" height="24" /> */}
            {/* </div>  */}
          </button>

          {subMenuOpen && (
            <div className='my-6 ml-10 flex flex-col space-y-4 '>
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'text-darkGreen' : ''
                    }`}
                  >
                    <span className='nav-text items-start p-0'>
                      {subItem.title}
                    </span>
                  </Link>
                )
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={` nav-text space-x-4  ${
            item.path === pathname ? 'text-darkGreen' : ''
          }`}
        >
          {/* {item.icon} */}
          <span className=' flex text-sm'>{item.title}</span>
        </Link>
      )}
    </div>
  )
}

const SideNav = () => {
  return (
    <div className=' hidden h-[100vh]  w-[50%] border-r border-zinc-200 bg-white md:flex'>
      <div className='flex w-full flex-col space-y-6'>
        <div className='flex flex-col space-y-2 pt-10  md:px-6 '>
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SideNav
