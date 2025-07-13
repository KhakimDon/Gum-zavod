'use client'

import React, { useEffect } from 'react'
import truck from '@/../public/truck.jpg'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslations } from 'next-intl'

export default function Trucks() {
  const t = useTranslations('trucks')

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
      <div className='bg-white'>
          <div className='base !bg-white pt-[30px] pb-[10px] h-[825px]' id='trucks'>
              <h2 data-aos='fade-right' className='mb-20 text-4xl font-bold'>
                  {t('title')}
              </h2>

              <div data-aos='zoom-in' className='flex items-center gap-8 px-[15px] flex-wrap'>
                  <div className='w-[495px] text-center'>
                      <h3 className='mb-5 text-[23px] text-[#4D97D7] font-semibold'>{t('description')}</h3>
                      <p className='mb-4 text-[15px]'>{t('description2')}</p>
                  </div>

                  <Image
                      src={truck}
                      alt='Truck'
                      width={600}
                      height={465}
                      className='object-cover'
                  />
              </div>
          </div>
      </div>
  )
}
