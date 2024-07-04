'use client';

import cn from 'classnames';
import i18next from 'i18next';
import Image from 'next/image';
import { forwardRef } from 'react';

import { languages } from '@/i18n/languages';

export type Props = {
    close: () => void;
};

// eslint-disable-next-line react/display-name
export const LanguageMenu = forwardRef<HTMLDivElement, Props>(({ close }, ref) => {
    const handleClick = (lang: string) => () => {
        i18next.changeLanguage(lang);
        close();
    };

    return (
        <div
            className="fixed top-14 left-0 bg-white p-4 flex w-screen h-[calc(100vh-56px)] shadow-black/10 drop-shadow-xl z-10"
            ref={ref}
        >
            <div className="grid grid-cols-2 gap-4 w-full h-min">
                {languages.map((language) => (
                    <button
                        key={language.value}
                        onClick={handleClick(language.value)}
                        className={cn(
                            'flex items-center gap-3 min-w-40 h-12 pl-3 rounded-xl border-transparent border-[1px] transition-all duration-150',
                            {
                                'bg-blue-10 border-blue-60 border-[1px]':
                                    language.value === i18next.language,
                                'hover:bg-black-10 hover:border-black/20':
                                    language.value !== i18next.language,
                            },
                        )}
                    >
                        <Image src={language.icon} alt={i18next.language} />
                        <span className="w-full text-left text-sm/tight">{language.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
});
