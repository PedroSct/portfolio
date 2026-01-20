import createNextIntlPlugin from 'next-intl/plugin';

// Isso diz ao Next para procurar o arquivo src/i18n.ts
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);