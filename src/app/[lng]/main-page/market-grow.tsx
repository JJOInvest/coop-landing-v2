import Image from 'next/image';

import Blob3 from '@/assets/blobs/blob-3.svg';
import Rocket from '@/assets/market-grow/rocket.png';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

import JJO from '@/assets/jjo.svg';

export async function MarketGrow() {
    const { t, i18n } = await getServerTranslations();

    return (
        <section className="pt-20 pb-[160px] relative overflow-hidden lg:p-0 lg:min-h-screen lg:flex lg:items-center">
            <div className="absolute bg-cyan w-52 h-80 opacity-20 blur-[85px] rotate-[135deg] top-9 -right-[50px] lg:top-80 lg:right-[50px]" />

            <div className="container flex flex-col gap-[96px] lg:gap-32 lg:flex-row-reverse lg:items-center">
                <div className="flex flex-col gap-6 lg:gap-8 lg:max-w-[570px] w-full lg:items-center">
                    <h2 className="text-2xl lg:text-5xl/tight font-medium">
                        {t('crypto_market_growth_potential')}
                    </h2>
                    <p className="text-[16px]/snug text-grey-slate lg:text-lg/normal">
                        {t('tech_growth_interest')}.
                    </p>
                    <Button
                        as="link"
                        href={`/${i18n.language}/invest/33181863366425`}
                        className="mt-2 lg:self-start"
                        arrow
                    >
                        {t('learn_more')}
                    </Button>
                </div>

                <div className="relative isolate">
                    <div className="lg:hidden absolute bg-blue-800 w-[200px] h-80 opacity-30 blur-[70px] -top-[15px] -right-[30px] -z-10 lg:-right-[240px] lg:top-[260px] lg:opacity-20" />

                    <Image
                        src={Blob3}
                        alt="blob"
                        className="absolute -z-10 -bottom-[140px] -right-[12px] lg:-bottom-[40px] lg:right-auto lg:-left-[180px]"
                    />

                    <div className="absolute top-0 left-[5px] -translate-y-[50%] rounded-full py-2 px-4 text-white flex items-center gap-2 shadow-button lg:-left-[70px] lg:top-[30px] bg-market-grow">
                        <Image src={JJO} alt="index" />
                        J’JO Optima
                    </div>

                    <div className="absolute -bottom-[100px] right-0 -translate-y-[50%] rounded-full py-2 px-4 text-white flex items-center gap-2 shadow-button lg:right-[20px] bg-market-grow-2">
                        <Image src={JJO} alt="index" />
                        J’JO35
                    </div>

                    <Image src={Rocket} alt="smart man" className="rounded-xl" />
                </div>
            </div>
        </section>
    );
}
