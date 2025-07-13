'use client'

import React from 'react'
import about_bg from '../../public/pesok3.jpg'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('aboutUs')

  return (
    <div className=''>
      <div
        className='p-4 bg-cover bg-bottom'
        style={{ backgroundImage: `url(${about_bg.src})` }}
      >
        <div className='base py-10 md:py-20'>
          <section className='mb-10'>
            <h2 data-aos='fade-right' className='text-xl md:text-2xl font-bold mb-6 md:mb-10 bg-[#4D97D7] text-white w-max px-2 py-1'>
              {t('title1')}
            </h2>
            <p data-aos='zoom-in' className='text-sm md:text-base text-white mb-10 md:mb-20 leading-relaxed'>
              {t('about')}
            </p>
          </section>

          <section>
            <h2 data-aos='fade-right' className='text-xl md:text-2xl font-bold mb-6 md:mb-10 bg-[#4D97D7] text-white w-max px-2 py-1'>
              {t('title2')}
            </h2>

            <div className='mb-10'>
              <h3 data-aos='zoom-in' className='text-lg md:text-xl font-semibold mb-2 text-white'>
                {t('description1')}
              </h3>
              <p data-aos='zoom-in' className='text-sm md:text-base text-white leading-relaxed'>
                {t('title3')}
              </p>
            </div>

            <div>
              <h3 data-aos='zoom-in' className='text-lg md:text-xl font-semibold mb-2 text-white'>
                {t('description2')}
              </h3>
              <p data-aos='zoom-in' className='text-sm md:text-base text-white leading-relaxed'>
                {t('title4')}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
