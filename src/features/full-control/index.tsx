'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import FullControlBg from '@/assets/full-control/bg.png';
import BinanceLogo from '@/assets/full-control/logos/binance.png';
import Bkex1Logo from '@/assets/full-control/logos/bkex-1.png';
import BkexLogo from '@/assets/full-control/logos/bkex.png';
import Coinbase1Logo from '@/assets/full-control/logos/coinbase-1.png';
import CoinbaseLogo from '@/assets/full-control/logos/coinbase.png';
import Cryptocom1Logo from '@/assets/full-control/logos/cryptocom-1.png';
import CryptocomLogo from '@/assets/full-control/logos/cryptocom.png';
import Huobi1Logo from '@/assets/full-control/logos/huobi-1.png';
import Huobi2Logo from '@/assets/full-control/logos/huobi-2.png';
import HuobiLogo from '@/assets/full-control/logos/huobi.png';
import Kucoin1Logo from '@/assets/full-control/logos/kucoin-1.png';
import KucoinLogo from '@/assets/full-control/logos/kucoin.png';
import RobotImage from '@/assets/full-control/robot.png';

const logos = [
    BinanceLogo,
    BkexLogo,
    Bkex1Logo,
    CoinbaseLogo,
    Coinbase1Logo,
    CryptocomLogo,
    Cryptocom1Logo,
    HuobiLogo,
    Huobi1Logo,
    Huobi2Logo,
    KucoinLogo,
    Kucoin1Logo,
];

export const FullControl = () => {
    const { t } = useTranslation();

    return (
        <section
            className={
                'bg-black text-white pt-20 mb-[500px] pb-48 lg:py-20 relative lg:mb-32 isolate'
            }
        >
            <div
                className={
                    'hidden lg:block absolute bg-blue-100 w-[60%] h-[300px] -left-[80px] -top-[100px] blur-[140px] opacity-50'
                }
            />

            <Image
                src={FullControlBg}
                alt={''}
                className={'hidden lg:block absolute opacity-50 top-0 left-0'}
            />

            <div className={'container relative'}>
                <div className={'flex flex-col gap-6 lg:gap-8 lg:max-w-[60%]'}>
                    <h2 className={'text-2xl lg:text-5xl/tight font-medium'}>
                        {t('full-control.title')}
                    </h2>
                    <p className={'text-[16px]/snug lg:text-lg/normal'}>
                        {t('full-control.description')}
                    </p>
                </div>

                <div className={'grid grid-cols-2 lg:grid-cols-4 mt-16 lg:max-w-[60%] lg:mt-10'}>
                    {logos.map((logo) => (
                        <div
                            key={logo.src}
                            className={'flex items-center justify-center h-16 w-full'}
                        >
                            <Image src={logo} alt={logo.src} />
                        </div>
                    ))}
                </div>

                <Image
                    src={RobotImage}
                    alt={'robot'}
                    className={
                        'absolute rounded-xl mx-auto left-0 right-0 mt-12 -mb-[145px] lg:inset-0 lg:my-auto lg:mr-[60px] lg:-bottom-[220px]'
                    }
                />
            </div>

            <div
                className={'hidden lg:block absolute h-full bg-white w-[20%] right-0 top-0 -z-10'}
            />
        </section>
    );
};
