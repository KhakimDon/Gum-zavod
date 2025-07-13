"use client"

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import card1 from "@/../public/card1.png"
import card2 from "@/../public/card2.png"
import card3 from "@/../public/card3.png"
import card4 from "@/../public/card4.png"
import { useTranslations } from 'next-intl'

export default function Advantage() {
  const t = useTranslations('advantage')

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const cards = [
    {
      image: card1,
      title: t('card1.card1Title'),
      description: t('card1.card1Description')
    },
    {
      image: card2,
      title: t('card2.card2Title'),
      description: t('card2.card2Description')
    },
    {
      image: card3,
      title: t('card3.card3Title'),
      description: t('card3.card3Description')
    },
    {
      image: card4,
      title: t('card4.card4Title'),
      description: t('card4.card4Description')
    }
  ]

  return (
    <div className="mt-32 base">
      <h2 data-aos="fade-right" className='text-4xl mb-10 font-bold'>
        {t('title')}
      </h2>
      <div data-aos="fade-right" className="flex items-center justify-center flex-wrap">
        {cards.length > 0 ? (
          cards.map((element, index) => (
              <div key={index} data-aos="zoom-in" className='max-w-[520px] px-4'>
                <div className='inline-block p-2'>
                  <Image
                      src={element.image}
                      width={68}
                      height={60}
                      alt='Card image'
                      className='mx-auto mb-5 invert mix-blend-screen'
                  />
                </div>
                  <h3 className='text-xl w-full mb-2'>{element.title}</h3>
                  <p className='mb-4'>{element.description}</p>
                </div>
                ))
                ) : (
                <p className='text-2xl text-red-600 font-bold'>Cardlar mavjud emas</p>
                )}
              </div>
          </div>
          )
        }
