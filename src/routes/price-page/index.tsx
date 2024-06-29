'use client';

import { useTranslation } from 'react-i18next';

import { PricePlans } from '@/features/price-plans';

export const PricePage = () => {
    const { t } = useTranslation();

    return (
        <section className={'relative pt-36 pb-20 isolate'}>
            <div
                className={'absolute top-0 left-0 w-screen h-[60%] -z-10'}
                style={{
                    background: 'linear-gradient(60deg, #00d598, #4ad56d)',
                }}
            />

            <div className={'container'}>
                <h2
                    className={'lg:text-center lg:text-[54px]/tight text-[32px]/snug font-semibold'}
                >
                    {t('prices.title')}
                </h2>
                <h3
                    className={
                        'lg:text-center mt-8 lg:text-[22px]/snug text-lg/normal font-semibold'
                    }
                >
                    {t('prices.subtitle')}
                </h3>
                <p className={'lg:text-center mt-3 lg:text-lg text-[16px]/normal'}>
                    {t('prices.description')}
                </p>
            </div>

            <div className={'mt-16'}>
                <PricePlans />
            </div>
        </section>
    );
};
