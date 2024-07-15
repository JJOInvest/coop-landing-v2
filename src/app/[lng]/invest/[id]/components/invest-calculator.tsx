import Image from 'next/image';

import { Calculator } from '@/components/calculator';
import { getServerTranslations } from '@/i18n/server';

import JJO from '@/assets/jjo.svg';

export async function InvestCalculator() {
    const { t } = await getServerTranslations();

    return (
        <div>
            <div className="mb-6 text-center font-bold text-black-100">{t('the_average')}</div>
            <div className="flex items-center justify-center">
                <div className="my-8 py-2 px-4 text-[16px] font-bold bg-opacity-20 bg-white gap-2 justify-center self-center mx-auto inline-flex rounded-md bg-investAvgProfit p-0.5">
                    <Image src={JJO} alt={"j'jo"} />
                    <span>+212 %</span>
                </div>
            </div>
            <Calculator />
        </div>
    );
}
