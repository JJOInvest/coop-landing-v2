'use client';

import i18next from 'i18next';
import Image from 'next/image';

import { languages } from '@/i18n/languages';

export const LanguageMenu = () => {
    const handleClick = (lang: string) => () => i18next.changeLanguage(lang);

    return (
        <div className={'bg-white rounded-lg p-4 flex gap-3 w-max shadow-black/10 drop-shadow-xl'}>
            <div className={'grid grid-cols-2 gap-4'}>
                {languages.map((language) => (
                    <button
                        key={language.value}
                        onClick={handleClick(language.value)}
                        className={
                            'flex items-center gap-3 min-w-40 h-12 pl-3 rounded-xl hover:bg-black-10 border-transparent border-[1px] hover:border-blue-60 transition-all duration-150'
                        }
                    >
                        <Image src={language.icon} alt={i18next.language} />
                        <span className={'w-full text-left text-sm/tight'}>{language.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
