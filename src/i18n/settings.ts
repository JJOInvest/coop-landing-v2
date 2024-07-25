export const fallbackLng = 'ru';
export const languages = [
    fallbackLng,
    'pt',
    'cn',
    'fr',
    'de',
    'hi',
    'id',
    'it',
    'ja',
    'ko',
    'ph',
    'es',
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
