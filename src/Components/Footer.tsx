'use client'

import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  const t = useTranslations('footer')

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <footer className='base py-10 flex flex-wrap items-start justify-between gap-6  text-[212529]'>
      {/* Phone */}
      <div data-aos="fade-up" className='min-w-[200px]'>
        <h3 className='text-[20px] mb-2 font-bold'>{t('phone.Phone')}</h3>
        <a href="tel:+998777533080" className='text-[15px]'>+998 77 753 30 80</a> <br/>
        <a href="tel:+998777533081" className='text-[15px]'>+998 77 753 30 81</a>
      </div>

      {/* Social */}
      <div data-aos="fade-up" className='min-w-[200px]'>
        <h3 className='text-[20px] mb-2 font-bold'>{t('social.Social')}</h3>
        <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/gumzavod/">
                <i className="fa-brands fa-instagram text-2xl cursor-pointer hover:text-[#4D97D7]"></i>
            </a>
            <a href="https://t.me/Salesasiasandblessing">
                <i className="fa-brands fa-telegram text-2xl cursor-pointer hover:text-[#4D97D7]"></i>
            </a>
        </div>
      </div>

        {/* Address */}
        <div data-aos="fade-up" className='min-w-[280px] max-w-[400px]'>
        <h3 className='text-[20px] mb-2 font-bold'>{t('address.Address')}</h3>
        <p className='text-[15px]'>{t('address.title')}</p>
      </div>
    </footer>
  )
}
