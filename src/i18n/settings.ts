export const fallbackLng = 'ru';
export const languages = [
    fallbackLng,
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
    'sp',
    'tr',
    'en',
    'vi',
];
export const defaultNS = 'translation';
export const cookieName = 'language';

export const getOptions = (lng = fallbackLng, ns: string | string[] = defaultNS) => {
    return {
        debug: false,
        supportedLngs: languages,
        preload: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
};
