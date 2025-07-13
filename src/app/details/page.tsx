'use client'

import React, { useEffect, useState } from 'react'
import card1 from "@/../public/pesok.jpg"
import { useTranslations } from 'next-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Contacts from '@/Components/Contacts'
import Footer from '@/Components/Footer'

export default function Details() {
    const t = useTranslations('footer')
    const [product, setProduct] = useState([])

    useEffect(() => {
        AOS.init({ duration: 1000 })
        const result = localStorage.getItem('selectedProduct')
        setProduct(result ? JSON.parse(result) : [])
    }, [])

    console.log(product);
    

    return (
        <div className=' mb-1'>
            <div className='p-[100px] px-4 h-[1200px] w-[770px]'>
                <div className='h-[585px] w-[770px] px-4'>
                    <h1 className='text-4xl mb-6 font-bold'>Yuvilgan qum</h1>

                    <p className='text-[16px] mb-4'>
                        Yuvilgan qum qurilishda eng keng tarqalgan materiallardan biri va boshqa sohalarda ham talabga javob beradi. Toshkentda yuvilgan qumga talab koʻp.
                    </p>

                    <p className='text-[16px] mb-4'>
                        <strong>Mahsulotning umumiy tavsifi:</strong><br />
                        Yuvilgan toza qum ochiq usulda qazib olinadi. Kon yoki daryo materiali zamonaviy gidromexanik texnikani qoʻllash tufayli olinadi. Qum bir xil tarkibli boʻlib, loy, chang, barcha turdagi aralashmalar (mayda, suv oʻtlari va boshqalar)ning eng kichik zarrachalari massa ulushi ajratib olingan moddaning umumiy massasi 0,03% dan oshmaydi.
                    </p>

                    <p className='text-[16px] mb-4'>
                        Sifat va foydalanish tavsifi boʻyicha kondan olingan yuvilgan qum daryodan olingan qumdan farq qilmaydi. Shu sababli Toshkentda kondan olingan yuvilgan qumni foydali va hamyonbop narxlarda sotib olish mumkin. Ayniqsa, toʻgʻri tanlov qilsangiz va “Pesok” kompaniyasi xizmatlaridan foydalansangiz.
                    </p>

                    <p className='text-[16px] mb-4'>
                        <strong>Qoʻllanish sohasi:</strong><br />
                        ‒ beton ishlari,<br />
                        ‒ qurilish materiallarini tayyorlash,<br />
                        ‒ yoʻl qurilishi va boshqalar.
                    </p>

                    <p className='text-[16px] mb-4'>
                        <strong>Oddiy yechim:</strong><br />
                        Toshkentda rejalashtirilgan ish hajmlarini bajarishda yuvilgan qumga buyurtma berish va foydali shartlar asosida sotib olish uchun kompaniya menejeri bilan telefon orqali bogʻlanib, buyurtma berish zarur. Malakali mutaxassis barcha zarur hujjatlarni rasmiylashtirish va kelishuvning barcha bosqichlarini nazorat qilishga yordam beradi.
                    </p>
                </div>
            </div>

            <Contacts/>
            <Footer/>
        </div>
    )
}
