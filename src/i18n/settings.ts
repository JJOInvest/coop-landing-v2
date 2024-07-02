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
    'en-gb',
    've',
];
export const defaultNS = 'translation';
export const cookieName = 'language';

export const getOptions = (lng = fallbackLng, ns: string | string[] = defaultNS) => {
    return {
        debug: false,
        supportedLngs: languages,
        // preload: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
};
