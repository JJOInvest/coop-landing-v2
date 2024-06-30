'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Blob4 from '@/assets/blobs/blob-4.svg';
import { Button } from '@/components/button';

export const InvestHero = () => {
    const { t } = useTranslation();

    return (
        <div className={'relative w-screen z-20'}>
            <Image
                src={Blob4}
                alt={'blob'}
                className={'absolute -bottom-5 right-10 z-20 lg:right-[30%]'}
            />

            <div className={'relative overflow-hidden w-full h-full pt-32 pb-20'}>
                <div
                    className={
                        'absolute w-[300px] h-[300px] -right-[80px] -bottom-[100px] bg-blue-800 rounded-full opacity-50 blur-[150px] -z-10 '
                    }
                />

                <div
                    className={
                        'absolute lg:block hidden w-[200px] h-[300px] top-0 -left-[80px] bg-blue-800 rounded-full opacity-50 blur-[150px] -z-10 '
                    }
                />

                <div className={'container flex flex-col gap-6 lg:flex-row lg:justify-between'}>
                    <h2 className={'text-[32px]/snug font-medium lg:text-[64px]'}>
                        {t('invest.title')}
                    </h2>
                    <p className={'text-[16px]/normal lg:text-lg lg:max-w-96 lg:opacity-60'}>
                        {t('invest.description')}
                    </p>
                    <Button className={'mt-2 lg:hidden'} block>
                        {t('invest.button')}
                    </Button>
                </div>
            </div>
        </div>
    );
};
