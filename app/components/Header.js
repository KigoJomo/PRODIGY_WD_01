'use client'

import { Close, Menu } from '@mui/icons-material'
import Link from 'next/link'
import React, { useState } from 'react'

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'tutorials',
    href: '/tutorials',
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'resources',
    href: '/resources',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-6 md:px-12 py-4 border-primary flex items-center justify-between fixed">
      <Link href={'/'} className="logo bg-secondary px-4 rounded-full z-10">
        <h4 className="alata text-2xl text-background lowercase">.dot</h4>
      </Link>

      <button
        className="menu-button z-10 md:scale-125"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Close /> : <Menu />}
      </button>

      <div
        className={`mobile-navigation ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } transition-all duration-500 flex w-full h-screen absolute top-0 left-0 backdrop-blur-3xl `}
      >
        <nav className="w-full px-12 md:px-24 mt-32 flex flex-col items-center gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="capitalize text-xl border-b md:border-l md:pl-6 md:border-transparent md:hover:border-primary border-primary pb-4 w-full text-center md:text-left md:uppercase md:text-2xl transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {page.name}
            </Link>
          ))}

          <div className="login w-full hidden md:flex">
            <Link
              href="/"
              className="capitalize text-xl border-b md:border-l md:pl-6 md:border-transparent md:hover:border-primary border-primary pb-4 w-full text-center md:text-left md:uppercase md:text-2xl transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
