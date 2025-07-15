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

            <div id='documents' className='base pt-20 mb-20'>
                <h2 data-aos='fade-right' className='mb-10 text-4xl font-bold'>
                    {t('doc')}
                </h2>
                <div className='grid grid-cols-2 gap-4 grid-rows-1'>

                    <div className='block rounded-[10px] border-[#4D97D7] p-3 border-[2px] col-span-1'>
                        <a href='/рухсатнома.pdf'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className='font-semibold block my-2'>  {t('doc3')}</span>
                                <a href="/рухсатнома.pdf" className='text-[#4D97D7] font-bold flex items-center gap-1'>  {t('look')} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </a>
                            </div>
                        </a>
                    </div>
                    <div className='block rounded-[10px] border-[#4D97D7] p-3 border-[2px] col-span-1'>
                        <a href='/sert_121_UZ_SMT_01_0031_92387355_15_05_2023_ASIA_SAND_BLESSING_MCHJ.pdf'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className='font-semibold block my-2'>  {t('doc1')}</span>
                                <a href="/sert_121_UZ_SMT_01_0031_92387355_15_05_2023_ASIA_SAND_BLESSING_MCHJ.pdf" className='text-[#4D97D7] font-bold flex items-center gap-1'>  {t('look')} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </a>
                            </div>
                        </a>
                    </div>
                    <div className='block rounded-[10px] border-[#4D97D7] p-3 border-[2px] col-span-1'>
                        <a href='/sert_121_UZ_SMT_01_0031_92387298_15_05_2023_ASIA_SAND_BLESSING_MCHJ.pdf'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className='font-semibold block my-2'>  {t('doc2')}</span>
                                <a href="/sert_121_UZ_SMT_01_0031_92387298_15_05_2023_ASIA_SAND_BLESSING_MCHJ.pdf" className='text-[#4D97D7] font-bold flex items-center gap-1'>  {t('look')} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </a>
                            </div>
                        </a>
                    </div>

                    <div className='block rounded-[10px] border-[#4D97D7] p-3 border-[2px] col-span-1'>
                        <a href='/протокол3.pdf'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className='font-semibold block my-2'>  {t('doc4')}</span>
                                <a href="/протокол3.pdf" className='text-[#4D97D7] font-bold flex items-center gap-1'>  {t('look')} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </a>
                            </div>
                        </a>
                    </div>
                    <div className='block rounded-[10px] border-[#4D97D7] p-3 border-[2px] col-span-1'>
                        <a href='/протокол2.pdf'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className='font-semibold block my-2'>  {t('doc5')}</span>
                                <a href="/протокол2.pdf" className='text-[#4D97D7] font-bold flex items-center gap-1'>  {t('look')} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                </a>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
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
