'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import SecurityImage from '@/assets/footer/security.svg';
import FacebookIcon from '@/assets/footer/social-media-icons/facebook.svg';
import MediumIcon from '@/assets/footer/social-media-icons/medium.svg';
import TelegramIcon from '@/assets/footer/social-media-icons/telegram.svg';
import TwitterIcon from '@/assets/footer/social-media-icons/twitter.svg';
import { LanguagePicker } from '@/components/language-picker';

import JJOIcon from '@/assets/jjo-text.svg';

const socialMedias = [
    { icon: FacebookIcon, href: 'https://jjo-invest.medium.com' },
    { icon: TelegramIcon, href: 'https://t.me/jjo_media' },
    { icon: MediumIcon, href: 'https://jjo-invest.medium.com' },
    { icon: TwitterIcon, href: 'https://twitter.com/jjo_media' },
];

const links = [
    { href: '/', text: 'footer.menu.main' },
    { href: '/invest/33961919663385', text: 'footer.menu.invest' },
    { href: '/price', text: 'footer.menu.price' },
    { href: '/help', text: 'footer.menu.help' },
    { href: 'https://blog.jjo.finance/', text: 'footer.menu.blog' },
    {
        href: 'https://dashboard.jjo.finance/docs/privacy-policy-jjo.pdf?_gl=1*1jzm9qy*crossdomain_ga*MjA3NTI3MTc0MC4xNzA4NzcxNTc1*crossdomain_ga_WXJ9H0E4GB*MTcyMDc5MDM3NS4zMTAuMS4xNzIwNzkwNDIwLjE1LjAuMA..',
        text: 'footer.menu.confidence',
    },
    {
        href: 'https://dashboard.jjo.finance/docs/terms-of-use-jjo.pdf?_gl=1*peeuuv*crossdomain_ga*MjA3NTI3MTc0MC4xNzA4NzcxNTc1*crossdomain_ga_WXJ9H0E4GB*MTcyMDc5MDM3NS4zMTAuMS4xNzIwNzkwNDA0LjMxLjAuMA..',
        text: 'footer.menu.conditions',
    },
    { href: '/documents/cookie-policy-jjo.pdf', text: 'footer.menu.cookie' },
];

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-black pt-20 pb-10 lg:pb-20">
            <div className="container flex flex-col gap-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
                    <div>
                        <Image src={JJOIcon} alt={"j'jo"} />
                        <div className="hidden lg:flex mt-32 rounded-xl py-2.5 px-4 bg-white bg-opacity-10 items-center text-white gap-2 text-xs">
                            <Image src={SecurityImage} alt="security" />
                            {t('footer.security')}
                        </div>
                    </div>

                    <div className="flex justify-between lg:justify-center lg:gap-24">
                        <div className="flex flex-col gap-8 w-full max-w-1/2">
                            {links.slice(0, 5).map((link) => (
                                <Link
                                    key={link.text}
                                    href={link.href}
                                    className="text-white font-bold text-[13px] uppercase"
                                >
                                    {t(link.text)}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-8 w-max max-w-1/2">
                            {links.slice(5).map((link) => (
                                <Link
                                    key={link.text}
                                    href={link.href}
                                    className="text-white font-bold text-[13px] uppercase"
                                >
                                    {t(link.text)}
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
