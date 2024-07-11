'use client';

import Image from 'next/image';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { useMediaMatch } from 'rooks';

import { headerMenuItems } from '@/components/layout/header/constants';
import { MobileHeader } from '@/components/layout/header/mobile';
import { LanguagePicker } from '@/components/layout/header/monitor/language-picker';
import { LoginButton } from '@/components/layout/header/monitor/login-button';
import { NavLink } from '@/components/layout/header/monitor/navlink';

import JJO from '@/assets/jjo-text.svg';

export const Header = () => {
    const { t, i18n } = useTranslation();

    if (isMobile) return <MobileHeader />;

    return (
        <header className="top-0 w-screen sticky bg-white z-20">
            <div className="container flex items-center justify-between">
                <div className="flex items-center overflow-hidden">
                    <Link href="/">
                        <Image src={JJO} alt="JJO" className="invert" />
                    </Link>
                    <nav className="flex gap-5 items-center ml-16">
                        {headerMenuItems.map((link) => (
                            <NavLink
                                key={`${i18n.language}${link.href}`}
                                href={link.isExternal ? link.href : `/${i18n.language}${link.href}`}
                                label={t(link.text)}
                                target={link.isExternal ? '_blank' : undefined}
                            />
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-8">
                    <LanguagePicker />
                    <LoginButton />
                </div>
            </div>
        </header>
    );
};
