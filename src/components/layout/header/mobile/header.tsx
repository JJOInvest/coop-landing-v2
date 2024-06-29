'use client';

import Image from 'next/image';
import { useContext } from 'react';

import BurgerIcon from '@/assets/header/burger.svg';
import { mobileHeaderContext } from '@/components/layout/header/mobile/context';
import { LanguagePicker } from '@/components/layout/header/monitor/language-picker';

import JJO from '@/assets/jjo-text.svg';

export const Header = () => {
    const { openOrClose } = useContext(mobileHeaderContext);

    return (
        <header className={'lg:hidden w-screen fixed bg-white z-20 py-2'}>
            <div className="container flex items-center justify-between">
                <Image src={JJO} alt={'jjo'} className={'invert'} width={52} />

                <div className={'flex items-center gap-6'}>
                    <LanguagePicker />

                    <button onClick={openOrClose}>
                        <Image src={BurgerIcon} alt={'burger'} />
                    </button>
                </div>
            </div>
        </header>
    );
};
