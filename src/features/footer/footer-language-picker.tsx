'use client';

import i18next from 'i18next';
import Image from 'next/image';
import { ChangeEventHandler, useEffect, useState } from 'react';

import BrazilFlagIcon from '@/assets/languages/brazil.svg';
import ChinaFlagIcon from '@/assets/languages/china.svg';
import FranceFlagIcon from '@/assets/languages/france.svg';
import GermanyFlagIcon from '@/assets/languages/germany.svg';
import IndiaFlagIcon from '@/assets/languages/india.svg';
import IndonesiaFlagIcon from '@/assets/languages/indonesia.svg';
import ItalyFlagIcon from '@/assets/languages/italy.svg';
import JapanFlagIcon from '@/assets/languages/japan.svg';
import KoreaFlagIcon from '@/assets/languages/korea.svg';
import PilipinasFlagIcon from '@/assets/languages/pilipinas.svg';
import RussiaFlagIcon from '@/assets/languages/russia.svg';
import SpainFlagIcon from '@/assets/languages/spain.svg';
import TurkeyFlagIcon from '@/assets/languages/turkey.svg';
import UkFlagIcon from '@/assets/languages/uk.svg';
import VietnameseFlagIcon from '@/assets/languages/vietnamese.svg';

const languages = [
    { name: 'Português (Brasil)', value: 'bz', icon: BrazilFlagIcon },
    { name: '简体中文', value: 'ch', icon: ChinaFlagIcon },
    { name: 'Français', value: 'fr', icon: FranceFlagIcon },
    { name: 'Deutsch', value: 'de', icon: GermanyFlagIcon },
    { name: 'Hindi (India)', value: 'hi', icon: IndiaFlagIcon },
    { name: 'Bahasa Indonesia', value: 'in', icon: IndonesiaFlagIcon },
    { name: 'Italiano', value: 'it', icon: ItalyFlagIcon },
    { name: '日本語', value: 'ja', icon: JapanFlagIcon },
    { name: '한국어', value: 'ko', icon: KoreaFlagIcon },
    { name: 'Pilipinas', value: 'pi', icon: PilipinasFlagIcon },
    { name: 'Русский', value: 'ru', icon: RussiaFlagIcon },
    { name: 'Español', value: 'sp', icon: SpainFlagIcon },
    { name: 'Türkçe', value: 'tu', icon: TurkeyFlagIcon },
    { name: 'English', value: 'en', icon: UkFlagIcon },
    { name: 'Tiếng Việt', value: 've', icon: VietnameseFlagIcon },
];

export const FooterLanguagePicker = () => {
    const [currentLang, setCurrentLang] = useState(i18next.language);

    const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setCurrentLang(event.target.value);
    };

    const languageIcons = Object.fromEntries(
        languages.map((language) => [language.value, language.icon]),
    );

    useEffect(() => {
        i18next.changeLanguage(currentLang, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            t('key');
        });
    }, [currentLang]);

    return (
        <div className={'relative'}>
            <Image
                src={languageIcons[currentLang]}
                alt={currentLang}
                className={'absolute left-5 top-[11px]'}
            />

            <select
                className={
                    'bg-transparent text-white border-solid border-[1px] border-white border-opacity-20 outline-none w-full h-10 rounded-xl pr-5 pl-12 text-[13px] font-bold uppercase'
                }
                onChange={handleOnChange}
                value={currentLang}
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
