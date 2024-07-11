'use client';

import Image from 'next/image';
import Link from 'next/link';

import BurgerIcon from '@/assets/header/burger.svg';
import { useMobileMenuStore } from '@/components/layout/header/use-mobile-menu-store';

import { LanguagePicker } from './language/language-picker';
import JJO from '@/assets/jjo-text.svg';

export const Header = () => {
    const toggleMenu = useMobileMenuStore((state) => state.toggleMenu);

    return (
        <header className="top-0 w-screen fixed bg-white z-20 py-2">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image src={JJO} alt="jjo" className="invert" width={52} />
                </Link>

                <div className="flex items-center gap-6">
                    <LanguagePicker />

                    <button onClick={toggleMenu}>
                        <Image src={BurgerIcon} alt="burger" />
                    </button>
                </div>
            </div>
        </header>
    );
};
