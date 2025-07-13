"use client";
import About from '@/Components/About';
import Advantage from '@/Components/Advantage';
import Contacts from '@/Components/Contacts';
import Footer from '@/Components/Footer';
import Main from '@/Components/Main';
import Products from '@/Components/Products';
import Trucks from '@/Components/Trucks';
import { ThickArrowUpIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Page = () => {
  const [fixed, setFixed] = useState(false);
  const t = useTranslations('contact')


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }), [];

  return (
    <div className="min-h-[300vh] bg-gray-100">
      <Main />
      <Advantage />
      <div className="relative">
        {
          fixed ? <Link href={"/"} className="w-10 h-10 bg-[#4D97D7] inline-block rounded-md fixed bottom-16 z-50 left-5"><ThickArrowUpIcon className="w-7 h-7 text-white ml-1.5 mt-1.5" /></Link> : <div className=""></div>
        }
      </div>
      <Products />
      <About />
      <Trucks />
      <Contacts title={t('title')} />
      <Footer />
    </div>
  );
};

export default Page;
