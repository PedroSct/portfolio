import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'pt'];

export default getRequestConfig(async ({ requestLocale }) => {
  // Passo 1: Captura o locale da requisição de forma assíncrona (Padrão Next 15/16)
  let locale = await requestLocale;

  // Passo 2: Validação
  // Se o locale vier vazio ou for desconhecido, forçamos 'pt'
  if (!locale || !locales.includes(locale)) {
    locale = 'pt';
  }

  try {
    // Passo 3: Carregar mensagens
    return {
      locale: locale, // <--- A CORREÇÃO ESTÁ AQUI (Obrigatório retornar o locale)
      messages: (await import(`../messages/${locale}.json`)).default
    };
  } catch (error) {
    // Tratamento de erro
    console.error(`❌ Arquivo de tradução não encontrado para: ${locale}`);
    return {
      locale: locale, // <--- Mesmo no erro, precisamos confirmar o locale
      messages: {}
    };
  }
});