'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import ArrowRight from '@/assets/icons/arrow-right.svg';
import { Button } from '@/components/button';

export const ImportantKnowledge = () => {
    const { t } = useTranslation();

    return (
        <>
            <section
                className={
                    'text-white isolate bg-cover pt-52 bg-left-top relative overflow-hidden lg:rounded-xl lg:py-32 lg:mx-20 lg:bg-important-pattern bg-important-pattern-small'
                }
            >
                <div
                    className={
                        'absolute w-full h-full top-0 left-0 -z-10 lg:hidden bg-important-knowledge'
                    }
                />

                <div
                    className={
                        'absolute w-full h-full top-0 left-0 -z-10 bg-black hidden lg:block opacity-20'
                    }
                />

                <div
                    className={
                        'hidden lg:block bg-orange-100 w-[35%] h-[100px] absolute top-0 right-0 blur-[100px] -z-10'
                    }
                />

                <div className={'container'}>
                    <div
                        className={
                            'absolute w-[70%] lg:w-[40%] bg-violet-800 opacity-60 h-[200px] -top-[100px] left-0 blur-[140px] lg:-top-[150px] -z-10'
                        }
                    />

                    <div
                        className={
                            'flex flex-col gap-8 lg:max-w-[50%] lg:ml-auto lg:items-start lg:pr-16'
                        }
                    >
                        <h2 className={'text-2xl font-medium lg:text-5xl'}>
                            {t('important-knowledge.title')}
                        </h2>
                        <p className={'text-[16p]/snug lg:text-lg'}>
                            {t('important-knowledge.description')}
                        </p>
                        <Button className={'invert lg:invert-0'}>
                            {t('important-knowledge.button')}
                            <Image src={ArrowRight} alt={'arrow right'} />
                        </Button>
                    </div>
                </div>
            </section>
            <div className={'h-20 bg-black lg:bg-white'} />
        </>
    );
};
