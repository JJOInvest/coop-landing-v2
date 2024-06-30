import Image from 'next/image';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import CloseIcon from '@/assets/header/close.svg';
import { Button } from '@/components/button';
import { mobileHeaderContext } from '@/components/layout/header/mobile/context';
import { Navlink } from '@/components/layout/header/mobile/navlink';
import { points } from '@/components/layout/header/points';

import { LanguagePicker } from './language-picker';
import JJO from '@/assets/jjo-text.svg';

export const Menu = () => {
    const { t } = useTranslation();

    const { isOpened, openOrClose } = useContext(mobileHeaderContext);

    if (!isOpened) return null;

    return (
        <div className={'fixed w-screen h-screen bg-white z-30'}>
            <div className={'container flex flex-col gap-6'}>
                <div className={'py-4 flex items-center justify-between'}>
                    <Image src={JJO} alt={'JJO'} width={52} className={'invert'} />
                    <button onClick={openOrClose}>
                        <Image src={CloseIcon} alt={'close'} />
                    </button>
                </div>

                <nav className={'flex flex-col gap-3'}>
                    {points.map((point) => (
                        <Navlink key={point.href} {...point} label={t(point.labelKey)} />
                    ))}
                </nav>

                <LanguagePicker />

                <Button block>{t('layout.header.button')}</Button>
            </div>
        </div>
    );
};
