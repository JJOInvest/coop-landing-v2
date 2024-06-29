export const fallbackLng = 'ru';
export const languages = [
    'bz',
    'ch',
    'fr',
    'de',
    'hi',
    'in',
    'it',
    'ja',
    'ko',
    'pi',
    'ru',
    'sp',
    'tu',
    'en',
    've',
];
export const defaultNS = 'translation';
export const cookieName = 'language';

export const getOptions = (lng = fallbackLng, ns: string | string[] = defaultNS) => {
    return {
        debug: process.env.NODE_ENV === 'development',
        supportedLngs: languages,
        // preload: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
};
