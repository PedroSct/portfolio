import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'pt'
});

export const config = {
  // O segredo é garantir que 'icon' esteja aqui dentro
  matcher: ['/((?!api|_next|_vercel|icon|.*\\..*).*)']
};