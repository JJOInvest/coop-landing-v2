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

export const languages = [
    { name: 'Português (Brasil)', value: 'pt', icon: BrazilFlagIcon, isoCode: 'pt' },
    { name: '简体中文', value: 'cn', icon: ChinaFlagIcon, isoCode: 'zh' },
    { name: 'Français', value: 'fr', icon: FranceFlagIcon, isoCode: 'fr' },
    { name: 'Deutsch', value: 'de', icon: GermanyFlagIcon, isoCode: 'de' },
    { name: 'Hindi (India)', value: 'hi', icon: IndiaFlagIcon, isoCode: 'hi' },
    { name: 'Bahasa Indonesia', value: 'id', icon: IndonesiaFlagIcon, isoCode: 'id' },
    { name: 'Italiano', value: 'it', icon: ItalyFlagIcon, isoCode: 'it' },
    { name: '日本語', value: 'ja', icon: JapanFlagIcon, isoCode: 'ja' },
    { name: '한국어', value: 'ko', icon: KoreaFlagIcon, isoCode: 'ko' },
    { name: 'Pilipinas', value: 'ph', icon: PilipinasFlagIcon, isoCode: 'fil' }, // ISO 639-2 code for Filipino
    { name: 'Русский', value: 'ru', icon: RussiaFlagIcon, isoCode: 'ru' },
    { name: 'Español', value: 'es', icon: SpainFlagIcon, isoCode: 'es' },
    { name: 'Türkçe', value: 'tr', icon: TurkeyFlagIcon, isoCode: 'tr' },
    { name: 'English', value: 'en', icon: UkFlagIcon, isoCode: 'en' },
    { name: 'Tiếng Việt', value: 'vi', icon: VietnameseFlagIcon, isoCode: 'vi' },
];

export const languageIcons = Object.fromEntries(
    languages.map((language) => [language.value, language.icon]),
);
