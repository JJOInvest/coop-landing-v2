import Image from 'next/image';

import FullControlBg from '@/assets/full-control/bg.png';
import AnotherEn from '@/assets/full-control/logos/another-en.svg';
import AnotherRu from '@/assets/full-control/logos/another-ru.svg';
import BinanceLogo from '@/assets/full-control/logos/binance.svg';
import Bkex1Logo from '@/assets/full-control/logos/bkex-1.svg';
import BkexLogo from '@/assets/full-control/logos/bkex.svg';
import Coinbase1Logo from '@/assets/full-control/logos/coinbase-1.svg';
import CoinbaseLogo from '@/assets/full-control/logos/coinbase.svg';
import Cryptocom1Logo from '@/assets/full-control/logos/cryptocom-1.svg';
import CryptocomLogo from '@/assets/full-control/logos/cryptocom.svg';
import Huobi1Logo from '@/assets/full-control/logos/huobi-1.svg';
import Huobi2Logo from '@/assets/full-control/logos/huobi-2.svg';
import HuobiLogo from '@/assets/full-control/logos/huobi.svg';
import KucoinLogo from '@/assets/full-control/logos/kucoin.svg';
import RobotImage from '@/assets/full-control/robot.png';
import { getServerTranslations } from '@/i18n/server';

const logos = [
    BinanceLogo,
    HuobiLogo,
    Huobi1Logo,
    Huobi2Logo,
    CoinbaseLogo,
    CryptocomLogo,
    BkexLogo,
    KucoinLogo,
    Coinbase1Logo,
    Cryptocom1Logo,
    Bkex1Logo,
];

export async function FullControl() {
    const { t, i18n } = await getServerTranslations();

    return (
        <section className="text-white py-20 relative isolate lg:pt-24 lg:pb-0 lg:mb-20">
            {/* White figure */}
            <div className="hidden lg:block absolute bg-blue-100 w-[60%] h-[300px] -left-[80px] -top-[100px] blur-[140px] opacity-50" />
            {/*<div className="hidden lg:block absolute h-full bg-white w-[20%] right-0 top-0 -z-10" />*/}

            {/* Black background */}
            <div
                className="absolute bg-black top-0 left-0 w-full h-2/3 -z-20
                            lg:rounded-r-xl lg:h-[calc(100%-80px)] lg:w-[calc(100%-((100%-1170px)/2)-100px)]"
            />

            <Image
                src={FullControlBg}
                alt=""
                className="hidden lg:block absolute opacity-50 top-0 left-0"
            />

            <div className="container relative flex flex-col lg:flex-row lg:justify-between">
                <div className="lg:max-w-[670px]">
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <h2 className="text-2xl lg:text-5xl/tight font-medium lg:max-w-[85%]">
                            {t('full_control')}
                        </h2>
                        <p className="text-[16px]/snug lg:leading-normal">
                            {t('no_fund_transfer')}.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 lg:gap-6 lg:mt-10 lg:-ml-6">
                        {logos.map((logo) => (
                            <div
                                key={logo.src}
                                className="flex items-center justify-center h-16 w-full lg:h-8"
                            >
                                <Image src={logo} alt={logo.src} />
                            </div>
                        ))}
                        <div
                            key={AnotherRu.src}
                            className="flex items-center justify-center h-16 w-full lg:h-8"
                        >
                            <Image
                                src={i18n.language === 'ru' ? AnotherRu : AnotherEn}
                                alt={AnotherRu.src}
                                width={110}
                            />
                        </div>
                    </div>
                </div>

                <Image
                    src={RobotImage}
                    alt="robot"
                    className="rounded-xl mt-16 mx-auto max-w-[325px] lg:m-0 lg:max-w-[370px]"
                />
            </div>
        </section>
    );
}
