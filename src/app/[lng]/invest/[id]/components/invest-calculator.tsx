import Image from 'next/image';

import { Calculator } from '@/components/calculator';
import { getServerTranslations } from '@/i18n/server';

import JJO from '@/assets/jjo.svg';

export async function InvestCalculator() {
    const { t } = await getServerTranslations();

    return (
        <div>
            <div className="text-center font-bold text-black-100">{t('the_average')}.</div>
            <div className="flex items-center justify-center">
                <div className="my-6 py-2 px-4 text-[16px] font-bold bg-opacity-20 bg-white gap-2 justify-center self-center mx-auto inline-flex rounded-md bg-investAvgProfit p-0.5">
                    <Image src={JJO} alt={"j'jo"} />
                    <span>+212 %</span>
                </div>
            </div>
            <Calculator small />
            <p className="mt-8 lg:mt-6 text-center lg:text-left text-xs/snug lg:text-sm lg:leading-normal font-light text-black-120/60">
                *{t('calculator_and_chart')}
            </p>
        </div>
    );
}
