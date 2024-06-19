import cn from 'classnames';
import { dir } from 'i18next';
import type { Viewport } from 'next';
import { Cormorant } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import { I18nProvider } from '@/i18n/i18n-context';
import { detectLanguage, getServerTranslations } from '@/i18n/server';
import { ReactQueryProvider } from '@/lib/query-provider';

import './globals.css';

interface Props {
    children: ReactNode;
}

const cormorant = Cormorant({ subsets: ['latin', 'cyrillic'], variable: '--font-cormorant' });

const sfPro = localFont({
    src: [
        {
            path: './fonts/sf-pro-display-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/sf-pro-display-semibold.woff2',
            weight: '600',
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

export default async function RootLayout({ children }: Props) {
    const lng = await detectLanguage();

    return (
        <I18nProvider language={lng}>
            <ReactQueryProvider>
                <html lang={lng} dir={dir(lng)}>
                    <body className={cn([sfPro.className, cormorant.className])}>{children}</body>
                </html>
            </ReactQueryProvider>
        </I18nProvider>
    );
}
