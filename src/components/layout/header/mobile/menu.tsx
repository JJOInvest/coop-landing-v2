'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import CloseIcon from '@/assets/header/close.svg';
import { Button } from '@/components/button';
import { headerMenuItems } from '@/components/layout/header/constants';
import { LanguageInput } from '@/components/layout/header/mobile/language/language-input';
import { NavLink } from '@/components/layout/header/mobile/navlink';
import { useMobileMenuStore } from '@/components/layout/header/use-mobile-menu-store';

import JJO from '@/assets/jjo-text.svg';

export const Menu = () => {
    const { t, i18n } = useTranslation();

    const isOpened = useMobileMenuStore((state) => state.data.isOpened);
    const toggleMenu = useMobileMenuStore((state) => state.toggleMenu);

    if (!isOpened) return null;

    return (
        <div className="fixed w-screen h-screen bg-white z-30">
            <div className="container flex flex-col gap-6">
                <div className="py-4 flex items-center justify-between">
                    <Image src={JJO} alt="JJO" width={52} className="invert" />
                    <button onClick={toggleMenu}>
                        <Image src={CloseIcon} alt="close" />
                    </button>
                </div>
                <nav className="flex flex-col gap-3">
                    {headerMenuItems.map((link) => (
                        <NavLink
                            key={`${i18n.language}${link.href}`}
                            href={link.isExternal ? link.href : `/${i18n.language}${link.href}`}
                            label={t(link.text)}
                        />
                    ))}
                </nav>

                <LanguageInput />

                <Button block>{t('layout.header.button')}</Button>
            </div>
        </div>
    );
};
