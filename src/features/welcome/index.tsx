'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import ArrowRight from '@/assets/icons/arrow-right.svg';
import Hand from '@/assets/welcome/hand.png';
import { Button } from '@/components/button';

export const Welcome = () => {
    const { t } = useTranslation();

    return (
        <div className={'relative'}>
            <div
                className={'absolute bg-black hidden lg:block h-32 w-screen bottom-0 left-0 -z-20'}
            />

            <section
                className={
                    'pt-20 relative bg-violet-400 bg-opacity-15 lg:rounded-xl lg:mx-20 lg:bg-welcome-pattern bg-no-repeat overflow-hidden'
                }
            >
                <div
                    className={'absolute lg:block hidden w-full h-full top-0 left-0 bg-white -z-10'}
                />

                <div
                    className={
                        'absolute hidden lg:block bg-red-600 opacity-25 blur-[100px] w-[60%] h-[80%] -top-[160px] -left-[100px] -z-10'
                    }
                />

                <div
                    className={
                        'absolute top-0 left-0 bg-violet-400 w-full h-full blur-[60px] -z-10 opacity-10'
                    }
                />

                <div className={'container lg:flex lg:flex-row-reverse lg:gap-16 lg:items-center'}>
                    <div className={'flex flex-col gap-8 lg:max-w-[50%] lg:items-start lg:pl-8'}>
                        <h2
                            className={'text-[28px] font-semibold lg:text-5xl/tight lg:max-w-[80%]'}
                        >
                            {t('welcome.title')}
                        </h2>
                        <p className={'text-primary-neutral-[16px]/snug lg:text-lg'}>
                            {t('welcome.description')}
                        </p>
                        <Button className={'mt-2'}>
                            {t('welcome.button')}
                            <Image src={ArrowRight} alt={'arrow right'} />
                        </Button>
                    </div>

                    <Image src={Hand} alt={'hand with IPhone'} className={'mt-16 -ml-20'} />
                </div>
            </section>
        </div>
    );
};
