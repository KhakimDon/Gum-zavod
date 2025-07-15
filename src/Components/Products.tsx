'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

// Rasm fayllarni import qilish
import card1 from "@/../public/sh5-20.png"
import card2 from "@/../public/sh-20-70.png"
import card3 from "@/../public/klinez.png"
import card4 from "@/../public/5-20.png"

interface ProductType {
  card: any;
  title: string;
  about1: string;
  about2: string;
  about3: string;
}

const Products = () => {
  const t = useTranslations('products')
  const [modal, setModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const router = useRouter()

  const productList: ProductType[] = [
    {
      card: card1,
      title: t('product1.title'),
      about1: t('product1.about1'),
      about2: t('product1.about2'),
      about3: t('product1.about3')
    },
    {
      card: card4,
      title: t('product4.title'),
      about1: t('product4.about1'),
      about2: t('product4.about2'),
      about3: t('product4.about3')
    },
    {
      card: card2,
      title: t('product2.title'),
      about1: t('product2.about1'),
      about2: t('product2.about2'),
      about3: t('product2.about3')
    },

    {
      card: card3,
      title: t('product3.title'),
      about1: t('product3.about1'),
      about2: t('product3.about2'),
      about3: t('product3.about3')
    },
  ]

  const openModal = (product: ProductType) => {
    setSelectedProduct(product)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
    setSelectedProduct(null)
  }

  const handlePush = (product: ProductType) => {
    closeModal()
    localStorage.setItem('selectedProduct', JSON.stringify([product]))
    router.push('/details')
  }

  return (
    <div className='base mt-28 relative' id='products'>
      <div className="flex items-start justify-between flex-wrap gap-5">
        <h2 data-aos="fade-right" className='text-4xl mb-10 font-bold'>
          {t('title')}
        </h2>
        <p className='flex items-center gap-0.5 text-sm md:text-base'>
          <span className='text-[#4D97D7] text-2xl'>*</span>
          {t('note')}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-5">
        {productList.length > 0 ? productList.map((product, index) => (
          <button
            key={index}
            onClick={() => openModal(product)}
            data-aos="zoom-in"
            className='max-w-[410px] px-4 mb-[70px] text-center group cursor-pointer'
          >
            <Image
              src={product.card}
              width={307}
              height={230}
              alt='Card image'
              className='mx-auto mb-5 group-hover:scale-110 transition-all duration-500'
            />
            <h3 className='text-xl w-full mb-2 font-semibold'>{product.title}</h3>
            <p>{product.about1} {product.about2}</p>
          </button>
        )) : (
          <p className='text-2xl text-red-600 font-bold'>{t('empty')}</p>
        )}
      </div>

      {modal && selectedProduct && (
        <div className='fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded-xl max-w-md w-full text-center relative'>
            <button
              onClick={closeModal}
              className='absolute rotate-90 top-2 right-2 text-xl font-bold -rotate-45 cursor-pointer'
            >✖</button>

            <Image
              src={selectedProduct.card}
              width={307}
              height={230}
              alt='Modal image'
              className='mx-auto mb-5'
            />
            <h3 className='text-2xl font-bold mb-3'>{selectedProduct.title}</h3>
            <p className='mb-1'>{selectedProduct.about1} {selectedProduct.about2}</p>
            {selectedProduct.about3 && (
              <p className='mb-3 text-gray-600'>{selectedProduct.about3}</p>
            )}
            {/* <button
              onClick={() => handlePush(selectedProduct)}
              className='px-8 py-2 bg-[#4D97D7] rounded-lg text-white cursor-pointer'
            > */}
            {/* Batafsil
            </button> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
