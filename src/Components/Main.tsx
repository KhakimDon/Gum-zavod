import React from 'react';
import Header from './Header';
import { useTranslations } from 'next-intl';

const Main = () => {
    const t = useTranslations();

    return (
        <div className='main'>
            <Header />
            
            {/* Main Title */}
            <div 
                className="base flex items-center justify-center"
                style={{ height: 'calc(80vh - 110px)' }} // 84px is header height
            >
                <h1 className='max-w-[240px] text-center text-4xl font-bold text-white'>
                    {t('main.title')}
                </h1>
            </div>

            {/* Social Icons */}
            <div className="base flex items-center gap-7 text-white">
                <a href="https://www.instagram.com/gumzavod/">
                    <i className="fa-brands fa-instagram text-2xl cursor-pointer hover:text-[#4D97D7]"></i>
                </a>
                <a href="https://t.me/Salesasiasandblessing">
                    <i className="fa-brands fa-telegram text-2xl cursor-pointer hover:text-[#4D97D7]"></i>
                </a>
            </div>
        </div>
    );
};

export default Main;
