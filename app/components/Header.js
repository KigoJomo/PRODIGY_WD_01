'use client'

import { CloseOutlined as Close, MenuOutlined as Menu } from '@mui/icons-material'
import Link from 'next/link'
import React, { useState } from 'react'
import { HomeOutlined as Home, SchoolOutlined as School, BuildOutlined as Build, BookOutlined as Book, ContactMailOutlined as ContactMail } from '@mui/icons-material'

const pages = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'tutorials',
    href: '/tutorials',
    icon: School,
  },
  {
    name: 'projects',
    href: '/projects',
    icon: Build,
  },
  {
    name: 'resources',
    href: '/resources',
    icon: Book,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: ContactMail,
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
        className={`navigation ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } transition-all duration-500 flex flex-col w-full h-screen absolute top-0 left-0 backdrop-blur-3xl `}
      >
        <nav className="w-full px-12 md:px-24 mt-32 flex flex-col items-center gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="capitalize text-xl md:pl-6 border-b md:border-b-0 border-primary bg-transparent md:hover:bg-custom-gradient py-4 w-full text-center md:text-left md:uppercase md:text-2xl transition-all duration-300    flex items-center gap-6"
              onClick={() => setIsOpen(!isOpen)}
            >
              {<page.icon className="" fontSize="small" />}
              {page.name}
            </Link>
          ))}
        </nav>

        <div className="login w-full flex justify-center mt-auto mb-8">
          <Link
            href="/"
            className="capitalize text-xl border-b border-transparent md:hover:border-primary pb-4 text-center md:text-left md:uppercase md:text-2xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header