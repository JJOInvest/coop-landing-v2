'use client';

import dayjs from 'dayjs';
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

export const Footer = () => {
    const { t, i18n } = useTranslation();
    const year = dayjs().year();

    const links = [
        { href: '/', text: 'dashboard' },
        { href: `/${i18n.language}/invest/33961919663385`, text: 'invest' },
        { href: '/price', text: 'price' },
        { href: `/${i18n.language}/help`, text: 'help' },
        { href: 'https://blog.jjo.finance/', text: 'blog', isExternal: true },
        {
            href: 'https://dashboard.jjo.finance/docs/privacy-policy-jjo.pdf?_gl=1*1jzm9qy*crossdomain_ga*MjA3NTI3MTc0MC4xNzA4NzcxNTc1*crossdomain_ga_WXJ9H0E4GB*MTcyMDc5MDM3NS4zMTAuMS4xNzIwNzkwNDIwLjE1LjAuMA..',
            text: 'privacy_policy',
        },
        {
            href: 'https://dashboard.jjo.finance/docs/terms-of-use-jjo.pdf?_gl=1*peeuuv*crossdomain_ga*MjA3NTI3MTc0MC4xNzA4NzcxNTc1*crossdomain_ga_WXJ9H0E4GB*MTcyMDc5MDM3NS4zMTAuMS4xNzIwNzkwNDA0LjMxLjAuMA..',
            text: 'terms_of_use',
        },
        { href: '/static/cookie-policy-jjo.pdf', text: 'cookie_policy' },
    ];

    return (
        <footer className="bg-black pt-20 pb-10 lg:pb-20">
            <div className="container flex flex-col gap-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
                    <div>
                        <Image src={JJOIcon} alt={"j'jo"} />
                        <Link
                            rel="nofollow"
                            href="https://skynet.certik.com/projects/jjo"
                            target="_blank"
                            className="hidden lg:flex mt-32 rounded-xl py-2.5 px-4 bg-white bg-opacity-10 items-center text-white gap-2 text-xs"
                        >
                            <Image src={SecurityImage} alt="security" />
                            {t('security_report_2023')}
                        </Link>
                    </div>

                    <div className="flex justify-between lg:justify-center lg:gap-24">
                        <div className="flex flex-col gap-8 w-full max-w-1/2">
                            {links.slice(0, 5).map((link) => (
                                <Link
                                    key={link.text}
                                    href={link.href}
                                    className="text-white font-bold text-[13px] uppercase"
                                    rel={link.isExternal ? 'nofollow' : undefined}
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
                                    rel={link.isExternal ? 'nofollow' : undefined}
                                >
                                    {t(link.text)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 lg:flex-col-reverse">
                        <LanguagePicker />

                        <div className="flex items-center justify-between">
                            {socialMedias.map((socialMedia, k) => (
                                <Link
                                    key={k}
                                    href={socialMedia.href}
                                    className="flex items-center justify-center bg-white rounded-full w-10 h-10"
                                    target="_blank"
                                    rel="nofollow"
                                >
                                    <Image src={socialMedia.icon} alt={socialMedia.href} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-primary-neutral text-xs/tight opacity-40">
                    {t(
                        'Disclaimer: JJO-ONE PTE. LTD. (registration code - 202304367C, registered address 10 ANSON ROAD #20-05 INTERNATIONAL PLAZA SINGAPORE (079903)) do not provide investment or assets management services of any kind or services of investment advisers. Using the Website, you confirm that you are solely responsible for all transactions made within the Website, including but not limited to the risks associated with cryptocurrency trading as activity with high-level risk (see more in our Term of Use) JJO Finance LTD (registration code -13165223, registered address 91 battersea Park Road, London, England, SW8 4DU) is a Payment Agent of JJO-ONE PTE. LTD.\nYou should consider whether you understand how cryptocurrencies and their sets work, and whether you can afford to take the high risk of losing your money while trading in cryptomarkets. Cryptocurrency is a digital representation of value that functions as a medium of exchange, a unit of account, or a store of value, but it does not have legal tender status and is not generally backed or supported by any government or central bank. Due to the fact the legality cryptocurrency holding or trading is not always clear. Cryptocurrency markets and exchanges are not regulated with the same provisions or customer protections applicable to equity, option, futures, or foreign exchange investing. Legislative and regulatory changes or actions at the state or international level may adversely affect the use, transfer, exchange, and value of cryptocurrency. User will be subject to any applicable law which may apply to the blockchain. When seeing any graphics and indicators of cryptomarkets growth, you should remember ast performance is not an indication of future results, and such markets have a high volatility level. You should seek advice from an independent and suitably licensed financial advisor and ensure that you have the risk appetite, relevant experience and knowledge before you decide to use the instruments JJO provides to the users. Before starting usage of the JJO site, please read our Terms of Use and Risk Disclosure Statement. You expressly agree that your use of the software and/or service is at your sole risk. JJO is not liable for any loss or damage arising from your participation in the cryptocurrency trading, including within the use of the JJO platform.',
                    )}
                </p>
                <p className="text-primary-neutral text-xs/tight opacity-40">
                    &copy; {year} J&#39;JO. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
