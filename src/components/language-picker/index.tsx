'use client';

import i18next from 'i18next';
import Image from 'next/image';
import { ChangeEventHandler } from 'react';

import { languageIcons, languages } from '@/i18n/languages';

export const LanguagePicker = () => {
    const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        i18next.changeLanguage(event.target.value);
    };

    return (
        <div className={'relative'}>
            <Image
                src={languageIcons[i18next.language]}
                alt={i18next.language}
                className={'absolute left-5 top-[11px]'}
            />

            <select
                className={
                    'bg-transparent text-white border-solid border-[1px] border-white border-opacity-20 outline-none w-full h-10 rounded-xl pr-5 pl-12 text-[13px] font-bold uppercase'
                }
                onChange={handleOnChange}
                value={i18next.language}
            >
                {languages.map((language) => (
                    <option key={language.value} value={language.value}>
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
