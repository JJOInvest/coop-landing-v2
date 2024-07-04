'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import FacebookIcon from '@/assets/footer/social-media-icons/facebook.svg';
import MediumIcon from '@/assets/footer/social-media-icons/medium.svg';
import TelegramIcon from '@/assets/footer/social-media-icons/telegram.svg';
import TwitterIcon from '@/assets/footer/social-media-icons/twitter.svg';
import { LanguagePicker } from '@/components/language-picker';

import JJOIcon from '@/assets/jjo-text.svg';

const socialMedias = [
    { icon: FacebookIcon, href: '#' },
    { icon: TelegramIcon, href: '#' },
    { icon: MediumIcon, href: '#' },
    { icon: TwitterIcon, href: '#' },
];

export const Footer = () => {
    const { t } = useTranslation();

    const links = [
        { href: '/', labelKey: 'footer.menu.main' },
        { href: '/', labelKey: 'footer.menu.invest' },
        { href: '/', labelKey: 'footer.menu.price' },
        { href: '/', labelKey: 'footer.menu.help' },
        { href: '/', labelKey: 'footer.menu.blog' },
        { href: '/', labelKey: 'footer.menu.confidence' },
        { href: '/', labelKey: 'footer.menu.conditions' },
        { href: '/', labelKey: 'footer.menu.cookie' },
    ];

    return (
        <footer className="bg-black pt-24 pb-10 lg:pt-16">
            <div className="container flex flex-col gap-10">
                <div
                    className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
                >
                    <Image src={JJOIcon} alt={"j'jo"} />

                    <div className="flex justify-between lg:justify-center lg:gap-24">
                        <div className="flex flex-col gap-8 max-w-[50%]">
                            {links.slice(0, 5).map((link) => (
                                <Link
                                    key={link.labelKey}
                                    href={link.href}
                                    className="text-white font-bold text-[13px] uppercase"
                                >
                                    {t(link.labelKey)}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-8 w-max">
                            {links.slice(5).map((link) => (
                                <Link
                                    key={link.labelKey}
                                    href={link.href}
                                    className="text-white font-bold text-[13px] uppercase"
                                >
                                    {t(link.labelKey)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 lg:flex-col-reverse">
                        <LanguagePicker />

                        <div className="flex items-center justify-between">
                            {socialMedias.map((socialMedia) => (
                                <Link
                                    key={socialMedia.href}
                                    href={socialMedia.href}
                                    className="flex items-center justify-center bg-white rounded-full w-10 h-10"
                                >
                                    <Image src={socialMedia.icon} alt={socialMedia.href} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-primary-neutral text-xs/tight opacity-40">
                    {t('footer.disclaimer')}
                </p>
            </div>
        </footer>
    );
};
