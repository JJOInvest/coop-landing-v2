'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { LanguagePicker } from '@/components/layout/header/monitor/language-picker';
import { LoginButton } from '@/components/layout/header/monitor/login-button';
import { Navlink } from '@/components/layout/header/monitor/navlink';
import { points } from '@/components/layout/header/points';

import JJO from '@/assets/jjo-text.svg';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className={'top-0 lg:block hidden w-screen fixed bg-white z-20'}>
            <div className="container flex items-center justify-between">
                <div className={'flex items-center'}>
                    <Link href={'/'}>
                        <Image src={JJO} alt={'JJO'} className={'invert'} />
                    </Link>
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
