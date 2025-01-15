// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar


"use client"

import React, { useState } from 'react'
import { 
  MenuIcon, 
  XIcon 
} from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen)
  }

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#rooms", label: "Rooms" },
    { href: "/#service", label: "Facilities" },
    { href: "/#contact", label: "Offers" },

  ];
  
  return (
    <nav className='fixed w-full border-b  top-0 z-50'
>


      <div className="container mx-auto px-4 py-3   flex justify-between items-center">
        
          <span className='text-lg sm:text-xl font-bold text-neutral-900 tracking-tight'>
            Horizone
          </span>
        

        <ul className='hidden lg:flex space-x-4 xl:space-x-8 font-medium'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className='text-sm xl:text-base text-neutral-900 hover:text-green-800 transition-colors'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a 
            href="/login" 
            className='text-sm xl:text-base   px-5 py-3 xl:px-4 xl:py-2 rounded-sm bg-white text-black   transition-colors'
          >
            Contact
          </a>
        </div>

        <div className="lg:hidden">
          <button 
            onClick={toggleNavbar} 
            className='text-neutral-800 focus:outline-none'
          >
            {mobileOpen ? (
              <XIcon className='text-red-500 w-6 h-6 sm:w-8 sm:h-8' />
            ) : (
              <MenuIcon className='w-6 text-gray-900 h-6 sm:w-8 sm:h-8' />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className='fixed inset-0 bg-[#f1f5f9] z-40 lg:hidden overflow-y-auto'>
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <span className='text-xl font-bold text-neutral-900'>GRIYO</span>
              <button onClick={toggleNavbar}>
                <XIcon className='text-gray-900 w-8 h-8' />
              </button>
            </div>

            <ul className='space-y-6 text-center'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className='text-lg sm:text-xl text-neutral-800 hover:text-blue-600'
                    onClick={toggleNavbar}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <a 
                href="/login" 
                className='border border-gray-500  text-black px-6 py-3 rounded-full text-lg'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}