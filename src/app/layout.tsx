import cn from 'classnames';
import { dir } from 'i18next';
import type { Viewport } from 'next';
import { Cormorant } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import { useTranslation } from '@/i18n';
import { fallbackLng, languages } from '@/i18n/settings';
import { ReactQueryProvider } from '@/lib/query-provider';
import { BasePageParams } from '@/types/page';

import '../globals.css';

interface LayoutProps extends BasePageParams {
    children: ReactNode;
}

const cormorant = Cormorant({ subsets: ['latin', 'cyrillic'], variable: '--font-cormorant' });

const sfPro = localFont({
    src: [
        {
            path: '../fonts/sf-pro-display-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/sf-pro-display-semibold.woff2',
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

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng);
    return {
        title: t('title'),
    };
}

export default function RootLayout({ children, params: { lng } }: LayoutProps) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <ReactQueryProvider>
                <body className={cn([sfPro.className, cormorant.className])}>{children}</body>
            </ReactQueryProvider>
        </html>
    );
}
