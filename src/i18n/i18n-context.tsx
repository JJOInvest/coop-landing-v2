'use client';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import React, { PropsWithChildren, useMemo } from 'react';
import { I18nextProvider as Provider, initReactI18next } from 'react-i18next';

import { getOptions } from './settings';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend(
            (language: string, namespace: string) =>
                import(`./locales/${language}/${namespace}.json`),
        ),
    )
    .init({
        ...getOptions(),
        detection: {
            caches: ['cookie'],
        },
    });

type Props = PropsWithChildren<{
    language: string;
}>;

export const I18nProvider = ({ children, language }: Props) => {
    useMemo(() => {
        i18next.changeLanguage(language);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Provider i18n={i18next}>{children}</Provider>;
};
