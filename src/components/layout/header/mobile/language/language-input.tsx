'use client';

import i18next from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEventHandler } from 'react';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import { languageIcons, languages } from '@/i18n/languages';

export const LanguageInput = () => {
    const path = usePathname();
    const router = useRouter();

    const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        i18next.changeLanguage(event.target.value);
    };

    return (
        <div className="relative">
            <Image
                src={languageIcons[i18next.language]}
                alt={i18next.language}
                className="absolute left-5 top-0 bottom-0 my-auto"
            />

            <select
                className="bg-transparent text-black border-solid border-[1px] border-grey-60 outline-none w-full py-4 rounded-xl pr-5 pl-12 text-[13px] font-bold uppercase appearance-none"
                onChange={handleOnChange}
                value={i18next.language}
            >
                {languages.map((language) => (
                    <option key={language.value} value={language.value}>
                        <Link href={`/${language.value}/${path.split('/').slice(2).join('/')}`}>
                            {language.name}
                        </Link>
                    </option>
                ))}
            </select>

            <Image
                src={ArrowDown}
                alt="arrow"
                className="absolute top-0 bottom-0 my-auto right-4 invert"
            />
        </div>
    );
};
