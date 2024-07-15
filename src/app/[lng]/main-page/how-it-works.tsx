'use client';

import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';

import { Diagram, GetStartedStep } from '@/app/[lng]/main-page/diagram';
import { Button } from '@/components/button';

interface Step {
    name: GetStartedStep;
}

const steps: Step[] = [
    {
        name: 'register',
    },
    {
        name: 'invest',
    },
    {
        name: 'plan-your-future',
    },
];

const stepsHeaders = {
    register: 'sign_up',
    invest: 'use_service',
    'plan-your-future': 'plan_future',
};

const stepsDescriptions = {
    register: 'sign_up_and_connect',
    invest: 'buy_subscription',
    'plan-your-future': 'choose_index',
};

export function HowItWorks() {
    const { t } = useTranslation();

    const [step, setStep] = useState<GetStartedStep>('register');

    useEffect(() => {
        const interval = setInterval(() => {
            if (step === 'register') {
                setStep('invest');
                return;
            }

            if (step === 'invest') {
                setStep('plan-your-future');
                return;
            }

            setStep('register');
        }, 7000);

        return () => {
            clearInterval(interval);
        };
    }, [step]);

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute bg-red-600 h-[80%] w-[200px] top-[10%] -right-[100px] blur-[80px] opacity-15 -z-10" />

            <div className="container">
                <h2 className="text-2xl font-medium lg:text-5xl/normal">{t('how_jjo_works')}</h2>

                <div className="flex flex-col gap-12 mt-4 lg:mt-10 lg:flex-row-reverse">
                    <div className="lg:ml-auto lg:mr-16">
                        <Diagram step={step} />
                    </div>

                    <div className="flex flex-col gap-10 lg:max-w-[460px] lg:items-start">
                        <div className="flex flex-col gap-12">
                            {steps.map((s, index) => (
                                <div
                                    key={s.name}
                                    className="flex gap-5 items-start cursor-pointer"
                                    onClick={() => setStep(s.name)}
                                >
                                    <div className="relative min-w-10 max-w-10 mt-2 lg:min-w-[60px] lg:max-w-[60px]">
                                        <div className="absolute inset-0 m-auto w-min h-min text-xl lg:text-[22px]/snug">
                                            {index + 1}
                                        </div>

                                        <CircularProgressbar
                                            value={s.name === step ? 75 : 0}
                                            strokeWidth={2}
                                            styles={buildStyles({
                                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                pathTransition: '7s',
                                                strokeLinecap: 'butt',
                                                // Text size
                                                textSize: '32px',
                                                // Colors
                                                pathColor: `#ff7f57`,
                                                textColor: '#000',
                                                trailColor: 'rgba(0, 0, 0, .20)',
                                            })}
                                        />
                                    </div>

                                    <div>
                                        <h5 className="text-xl lg:text-[22px]/snug">
                                            {t(stepsHeaders[s.name])}
                                        </h5>
                                        <p className="text-neutral-400 text-[16px]/snug mt-2 lg:text-lg">
                                            {t(stepsDescriptions[s.name])}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button arrow>
                            <span>{t('try_for_free')}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
