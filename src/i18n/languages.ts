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
    { name: 'Türkçe', value: 'tr', icon: TurkeyFlagIcon },
    { name: 'English', value: 'en', icon: UkFlagIcon },
    { name: 'Tiếng Việt', value: 'vi', icon: VietnameseFlagIcon },
];

export const languageNames = Object.fromEntries(
    languages.map((language) => [language.value, language.name]),
);

export const languageIcons = Object.fromEntries(
    languages.map((language) => [language.value, language.icon]),
);
