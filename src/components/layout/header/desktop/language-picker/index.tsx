'use client';

import cn from 'classnames';
import i18next from 'i18next';
import Image from 'next/image';
import { useState } from 'react';
import { useOutsideClickRef } from 'rooks';

import ArrowIcon from '@/assets/header/language-picker/arrow.svg';
import { languageIcons } from '@/i18n/languages';

import { LanguageMenu } from './language-menu';

export const LanguagePicker = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => setIsOpened((isOpened) => !isOpened);

    const [ref] = useOutsideClickRef(() => {
        if (isOpened) setIsOpened(false);
    });

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={handleClick}
                className="flex items-center gap-3 h-10 border-solid border-[1px] border-black border-opacity-5 px-4 rounded-lg"
            >
                <Image src={languageIcons[i18next.language]} alt="arrow" />
                <Image
                    src={ArrowIcon}
                    alt="arrow"
                    className={cn('duration-300', {
                        'rotate-180': isOpened,
                    })}
                />
            </button>

            <div
                className={cn(
                    'absolute top-[56px] left-0 -translate-x-[50%] ml-[50%] transition-all duration-300',
                    {
                        'opacity-0 invisible': !isOpened,
                        'opacity-100 visible': isOpened,
                    },
                )}
            >
                <LanguageMenu />
            </div>
        </div>
    );
};
