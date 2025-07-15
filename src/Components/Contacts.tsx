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
          src="https://www.google.com/maps/d/embed?mid=1vsYAfFoAoqS-a_v730wYTgsNsTDrecM&ehbc=2E312F"
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
