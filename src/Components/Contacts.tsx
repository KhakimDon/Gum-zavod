'use client'

import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Contacts({title}: {title?: string}) {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className='pt-[30px]' id='contact'>
      <h2 data-aos='fade-right' className='base mb-20 font-bold text-4xl'>
        {title}
      </h2>

      <div className='flex justify-center px-5 md:px-0'>
        <iframe
          data-aos="zoom-in"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7782881367752!2d69.3337497!3d41.3136866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5e540e1b19f%3A0x4b4671b17f805191!2sAsia%20sand%20blessing!5e0!3m2!1sru!2s!4v1752370416252!5m2!1sru!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='mb-[25px] rounded-xl shadow-md'
        ></iframe>
      </div>
    </div>
  )
}
