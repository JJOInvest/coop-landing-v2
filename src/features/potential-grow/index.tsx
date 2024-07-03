'use client';

import { useTranslation } from 'react-i18next';

import { Calculator } from '@/components/calculator';
import { GrowDiagram } from '@/features/potential-grow/grow-diagram';
import { GrowForm } from '@/features/potential-grow/grow-form';
import { PercentGrow } from '@/features/potential-grow/percent-grow';

export const PotentialGrow = () => {
    const { t } = useTranslation();

    return (
        <section
            className={'py-20 lg:py-28 text-white bg-orange-100 relative isolate overflow-hidden'}
        >
            <div
                className={
                    'bg-violet-800/65 absolute w-full h-[200px] -top-[40px] -z-10 -left-[15%] blur-[80px] opacity-50 lg:w-[45%]'
                }
            />

            <div
                className={
                    'bg-violet-800/65 absolute w-[150%] h-[200px] bottom-0 top-0 my-auto lg:m-0 -z-10 blur-[80px] opacity-50 lg:top-auto lg:w-full lg:h-[120px]'
                }
            />

            <div className={'container flex flex-col'}>
                <h2 className={'text-2xl lg:text-5xl lg:text-center'}>{t('potential.title')}</h2>
                <p className={'text-lg lg:text-xl lg:text-center mt-6 font-light opacity-80'}>
                    {t('potential.description')}
                </p>
                <PercentGrow />

                <div className={'flex flex-col lg:flex-row lg:gap-6 gap-8'}>
                    <Calculator />
                </div>

                <p
                    className={
                        'mt-8 lg:mt-6 text-center text-xs/snug lg:text-[16px] lg:leading-normal font-light'
                    }
                >
                    {t('potential.remark')}
                </p>
            </div>
        </section>
    );
};
