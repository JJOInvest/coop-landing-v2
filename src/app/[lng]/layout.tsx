import cn from 'classnames';
import { dir } from 'i18next';
import type { Viewport } from 'next';
import { Cormorant, Mulish } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header/desktop';
import { I18nProvider } from '@/i18n/i18n-context';
import { getServerTranslations } from '@/i18n/server';
import { languages } from '@/i18n/settings';
import { ReactQueryProvider } from '@/lib/query-provider';

import '../globals.css';

interface Props {
    children: ReactNode;
    params: {
        lng: string;
    };
}

const cormorant = Cormorant({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-cormorant',
});

const mulish = Mulish({
    subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'cyrillic-ext'],
    variable: '--font-mulish',
});

const sfPro = localFont({
    src: [
        {
            path: '../fonts/sf-pro-display-light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/sf-pro-display-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/sf-pro-display-medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/sf-pro-display-semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/sf-pro-display-bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-sf-pro',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export async function generateMetadata() {
    const { t } = await getServerTranslations();
    return {
        title: t('title'),
    };
}

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params: { lng } }: Props) {
    return (
        <I18nProvider language={lng}>
            <ReactQueryProvider>
                <html lang={lng} dir={dir(lng)} data-theme="jjo">
                    <body className={cn([sfPro.className, cormorant.className, mulish.variable])}>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </body>
                </html>
            </ReactQueryProvider>
        </I18nProvider>
    );
}
