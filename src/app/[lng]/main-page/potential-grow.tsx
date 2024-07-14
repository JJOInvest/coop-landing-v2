import Image from 'next/image';

import { Calculator } from '@/components/calculator';
import { getServerTranslations } from '@/i18n/server';

import JJO from '@/assets/jjo.svg';

export async function PotentialGrow() {
    const { t } = await getServerTranslations();

    return (
        <section className="py-20 lg:py-28 text-white bg-orange-100 relative isolate overflow-hidden">
            <div className="bg-violet-800/65 absolute w-full h-[200px] -top-[40px] -z-10 -left-[15%] blur-[80px] opacity-50 lg:w-[45%]" />

            <div className="bg-violet-800/65 absolute w-[150%] h-[200px] bottom-0 top-0 my-auto lg:m-0 -z-10 blur-[80px] opacity-50 lg:top-auto lg:w-full lg:h-[120px]" />

            <div className="container flex flex-col">
                <h2 className="text-2xl lg:text-5xl font-medium lg:text-center">
                    {t('see_your_growth_potential')}
                </h2>
                <p className="text-lg lg:text-xl lg:text-center mt-6 font-normal opacity-80">
                    {t('the_average')}
                </p>
                <div className="my-8 py-2 px-4 text-[16px] font-bold bg-opacity-20 bg-white text-white flex gap-2 rounded-md justify-center self-center">
                    <Image src={JJO} alt={"j'jo"} />
                    <span>+212 %</span>
                </div>

                <Calculator />

                <p className="mt-8 lg:mt-6 text-center text-xs/snug lg:text-[16px] lg:leading-normal font-light">
                    *{t('calculator_and_chart')}
                </p>
            </div>
        </section>
    );
}
