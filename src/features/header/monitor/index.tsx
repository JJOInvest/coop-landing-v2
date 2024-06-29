'use client';

import { useTranslation } from 'react-i18next';

import { Logo } from '@/components/logo';
import { LanguagePicker } from '@/features/header/monitor/language-picker';
import { LoginButton } from '@/features/header/monitor/login-button';
import { Navlink } from '@/features/header/monitor/navlink';

interface Point {
    labelKey: string;
    href: string;
}

const points: Point[] = [
    {
        labelKey: 'layout.navbar.main',
        href: '/',
    },
    {
        labelKey: 'layout.navbar.invest',
        href: '/invest',
    },
    {
        labelKey: 'layout.navbar.price',
        href: '/price',
    },
    {
        labelKey: 'layout.navbar.ƒaq',
        href: '/ƒaq',
    },
];

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className={'w-screen fixed bg-white z-20'}>
            <div className="container flex items-center justify-between">
                <div className={'flex items-center'}>
                    <Logo />
                    <nav className={'flex gap-5 items-center ml-16'}>
                        {points.map((point) => (
                            <Navlink key={point.href} {...point} label={t(point.labelKey)} />
                        ))}
                    </nav>
                </div>

                <div className={'flex items-center gap-8'}>
                    <LanguagePicker />
                    <LoginButton />
                </div>
            </div>
        </header>
    );
};
