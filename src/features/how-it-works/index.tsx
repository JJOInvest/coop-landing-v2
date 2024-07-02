'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import ArrowRight from '@/assets/icons/arrow-right.svg';
import { Button } from '@/components/button';

interface Step {
    decorate: boolean;
    name: string;
}

const steps: Step[] = [
    {
        decorate: true,
        name: 'first',
    },
    {
        decorate: false,
        name: 'second',
    },
    {
        decorate: false,
        name: 'third',
    },
];

export const HowItWorks = () => {
    const { t } = useTranslation();

    return (
        <section className={'relative py-20 overflow-hidden'}>
            <div
                className={
                    'absolute bg-red-600 h-[80%] w-[200px] top-[10%] -right-[100px] blur-[80px] opacity-15'
                }
            />

            <div className={'container'}>
                <h2 className={'text-2xl font-medium lg:text-5xl/normal'}>
                    {t('how-it-works.title')}
                </h2>

                <div className={'flex flex-col gap-12 mt-12 lg:mt-10 lg:flex-row-reverse'}>
                    <div className={'lg:ml-auto lg:mr-16'}>diagram</div>

                    <div className={'flex flex-col gap-10 lg:max-w-[460px] lg:items-start'}>
                        <div className={'flex flex-col gap-12'}>
                            {steps.map((step, index) => (
                                <div key={step.name} className={'flex gap-5'}>
                                    <div
                                        className={cn(
                                            'flex items-center justify-center min-w-10 h-10 rounded-full text-xl relative border-solid border-2 border-neutral-300',
                                        )}
                                    >
                                        {step.decorate && (
                                            <svg
                                                className={
                                                    'absolute -top-[1px] -left-[1px] w-[39px] h-[39px]'
                                                }
                                                viewBox="0 0 40 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M38.6741 20C38.6741 30.6775 30.6828 38.6667 20.0024 38.6667C9.54542 38.6667 1.6662 31.0083 1.34105 20.6667H0.0078125C0.359568 31.4038 9.17681 40 20.0024 40C31.0511 40 40.0078 31.0457 40.0078 20C40.0078 8.95431 31.0511 0 20.0024 0V1.33333C30.6828 1.33333 38.6741 9.32249 38.6741 20Z"
                                                    fill="#FF7F57"
                                                />
                                            </svg>
                                        )}

                                        {index + 1}
                                    </div>

                                    <div>
                                        <h5 className={'text-xl lg:text-[22px]/snug'}>
                                            {t(`how-it-works.steps.${step.name}.name`)}
                                        </h5>
                                        <p
                                            className={
                                                'text-neutral-400 text-[16px]/snug mt-2 lg:text-lg'
                                            }
                                        >
                                            {t(`how-it-works.steps.${step.name}.description`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button>
                            <span>{t('how-it-works.button')}</span>
                            <Image src={ArrowRight} alt={'arrow right'} />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
