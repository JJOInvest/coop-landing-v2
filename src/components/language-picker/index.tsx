'use client';

import i18next from 'i18next';
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { ChangeEventHandler } from 'react';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import { languageIcons, languages } from '@/i18n/languages';

export const LanguagePicker = () => {
    const params = useParams();
    const router = useRouter();
    const path = usePathname();

    const currentLanguage = params?.lng ?? 'ru';

    const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        const language = event.target.value;

        i18next.changeLanguage(language).then(() => {
            router.push(`/${language}/${path.split('/').slice(2).join('/')}`);
        });
    };

    return (
        <div className="relative">
            <Image
                src={languageIcons[currentLanguage as string]}
                alt={i18next.language}
                className="absolute left-5 top-[11px]"
            />

            <select
                className="bg-transparent text-white border-solid border-[1px] border-white border-opacity-20 outline-none w-full h-10 rounded-xl pr-5 px-12 text-[13px] font-bold uppercase appearance-none"
                onChange={handleOnChange}
                value={currentLanguage}
            >
                {languages.map((language) => (
                    <option key={language.value} value={language.value}>
                        {language.name}
                    </option>
                ))}
            </select>

            <Image src={ArrowDown} alt="arrow" className="absolute right-4 top-3" />
        </div>
    );
};
