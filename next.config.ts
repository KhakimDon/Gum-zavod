import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const locales = ['en', 'ru', 'uz']; // Qo'llab-quvvatlanadigan tillar
const defaultLocale = 'uz';        // Standart til

// next-intl pluginini sozlash
const withNextIntl = createNextIntlPlugin({
  // Plugin parametrlari
});

// Agar boshqa Next.js sozlamalari bo‘lsa, shu yerga qo‘shing
const nextConfig: NextConfig = {
  // Misol uchun: reactStrictMode: true,
};

export default withNextIntl(nextConfig);
