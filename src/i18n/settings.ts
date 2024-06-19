export const fallbackLng = 'ru';
export const languages = [fallbackLng, 'en'];
export const defaultNS = 'translation';
export const cookieName = 'language';

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        // preload: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}
