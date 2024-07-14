import { Metadata } from 'next';

import { PricePlans } from '@/app/[lng]/price/components/price-plans';
import { getServerTranslations } from '@/i18n/server';

export const metadata: Metadata = {
    title: 'JJO Price',
};

export default async function Price() {
    const { t } = await getServerTranslations();

    return (
        <section className="relative pt-36 pb-20 isolate">
            <div className="absolute top-0 left-0 w-screen h-[60%] -z-10 bg-price" />

            <div className="container">
                <h2 className="lg:text-center lg:text-[54px]/tight text-[32px]/snug font-semibold">
                    {t('choose_the_plan')}
                </h2>
                <h3 className="lg:text-center mt-8 lg:text-[22px]/snug text-lg/normal">
                    {t('your_financial_prosperity')}
                </h3>
                <p className="lg:text-center mt-3 lg:text-lg text-[16px]/normal font-light">
                    {t('high_fees')}
                </p>
            </div>

            <div className="mt-16">
                <PricePlans />
            </div>
        </section>
    );
}
