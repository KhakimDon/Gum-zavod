'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from "@/../public/logo.png"
import Link from 'next/link'
import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const t = useTranslations('nav')
  const currentLocale = useLocale()

  const [openModal, setOpenModal] = useState(false)
  const [fixed, setFixed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navbar = [
    { labelKey: 'page1', href: '#advantage' },
    { labelKey: 'page2', href: '#products' },
    { labelKey: 'page3', href: '#about' },
    { labelKey: 'page4', href: '#trucks' },
    { labelKey: 'page6', href: '#documents' },
    { labelKey: 'page5', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`
    window.location.reload()
  }

  return (
    <header className={`${fixed ? "py-4" : "base"} flex items-center justify-between px-4 z-50 transition-all duration-300 relative ${fixed ? "fixed top-0 left-0 w-full bg-black backdrop-blur-md" : ""}`}>

      <div className='flex items-center gap-20'>
        {/* Logo */}
        <div className='bg-white mr-4 rounded-b-[20px]'>
          <Link href={"/"}>
            <Image src={logo} width={160} height={24} alt='Logo pesok' />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <ul className='hidden lg:flex gap-4 items-center'>
          {navbar.map(({ labelKey, href }, index) => (
            <li key={index} className='group'>
              <Link href={href} className='text-white font-semibold'>
                {t(labelKey)}
              </Link>
              <div className='w-0 group-hover:w-full h-0.5 bg-[#4D97D7] transition-all duration-300'></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side (Phone & Lang) */}
      <div className='hidden md:flex items-center gap-4 text-lg relative'>
        <div className='flex flex-col'>
          <a href="tel:+998777533080" className='text-white px-3'>
            {t('ofis_prodaj')} <span className='font-semibold'> +998 77 753 30 80</span>
          </a>
          <span className='text-white px-3 pb-1'>info@gum-zavod.uz</span>
          <div className='h-px w-full !bg-white'></div>
          <a href="tel:+998777533081" className='text-white px-3 pt-1'>
            {t('sales')}  <span className='font-semibold'>+998 77 753 30 81</span>
          </a>
           <span className='text-white px-3 pb-1'>molaverdi@gum-zavod.uz</span>
        </div>

        <button onClick={() => setOpenModal(!openModal)} className='flex items-center bg-[#4D97D7] px-3 py-1  text-white font-semibold'>
          {currentLocale.toUpperCase()} {openModal ? <CaretUpIcon className="w-5 h-5" /> : <CaretDownIcon className="w-5 h-5" />}
        </button>

        <div className={`${openModal ? "flex" : "hidden"} flex-col gap-1 text-left bg-white py-2 rounded-md absolute w-20 top-10 right-0`}>
          <button onClick={() => changeLanguage('uz')} className='hover:bg-gray-200 pl-6 text-left'>Uz</button>
          <button onClick={() => changeLanguage('en')} className='hover:bg-gray-200 pl-6 text-left'>Eng</button>
          <button onClick={() => changeLanguage('ru')} className='hover:bg-gray-200 pl-6 text-left'>Ru</button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className='md:hidden text-white cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className='w-10 h-10' /> : <Menu className='w-10 h-10' />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-[100px] left-0 w-full bg-white text-white p-4 md:hidden'>
          <ul className='flex flex-col gap-4'>
            {navbar.map(({ labelKey, href }, index) => (
              <li key={index} className='group w-max'>
                <Link href={href} className='block text-black font-semibold' onClick={() => setMenuOpen(false)}>
                  {t(labelKey)}
                </Link>
                <div className='w-0 group-hover:w-full h-0.5 bg-[#4D97D7] transition-all duration-300'></div>
              </li>
            ))}
          </ul>
          <div className='mt-4 group w-max'>
            <div className='w-0 group-hover:w-full h-0.5 bg-[#4D97D7] transition-all duration-300'></div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center gap-4 text-black font-semibold cursor-pointer '>
              <button onClick={() => changeLanguage('uz')} className='group'>
                Uz
                <div className='w-0 group-hover:w-full h-0.5 bg-black transition-all duration-300'></div>
              </button>
              <button onClick={() => changeLanguage('en')} className='group'>
                Eng
                <div className='w-0 group-hover:w-full h-0.5 bg-black transition-all duration-300'></div>
              </button>
              <button onClick={() => changeLanguage('ru')} className='group'>
                Ru
                <div className='w-0 group-hover:w-full h-0.5 bg-black transition-all duration-300'></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
