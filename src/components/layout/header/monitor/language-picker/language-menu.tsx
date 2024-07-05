'use client';

import cn from 'classnames';
import i18next from 'i18next';
import Image from 'next/image';
import { forwardRef } from 'react';

import { languages } from '@/i18n/languages';

// eslint-disable-next-line react/display-name
export const LanguageMenu = forwardRef<HTMLDivElement>((_, ref) => {
    const handleClick = (lang: string) => () => i18next.changeLanguage(lang);

    return (
        <div
            className="bg-white rounded-lg p-4 flex gap-3 w-max shadow-black/10 drop-shadow-xl"
            ref={ref}
        >
            <div className="grid grid-cols-2 gap-4">
                {languages.map((language) => (
                    <button
                        key={language.value}
                        onClick={handleClick(language.value)}
                        className={cn(
                            'flex items-center gap-3 min-w-40 h-12 pl-3 rounded-xl border-[1px] transition-all',
                            {
                                'bg-blue-10 border-blue-60': language.value === i18next.language,
                                'border-transparent hover:bg-black-10 hover:border-black/20':
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
