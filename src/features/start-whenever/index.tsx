'use client';

import { useTranslation } from 'react-i18next';

import { Button } from '@/components/button';

export const StartWhenever = () => {
    const { t } = useTranslation();

    return (
        <div className={'relative'}>
            <div
                className={'absolute bg-black hidden lg:block h-32 w-screen bottom-0 left-0 -z-20'}
            />

            <section
                className={'py-20 lg:mx-20 lg:rounded-xl'}
                style={{
                    background: 'linear-gradient(135deg, #fde4e3, #eee7ff)',
                }}
            >
                <div className={'container flex flex-col gap-8 lg:items-center'}>
                    <h3
                        className={
                            'text-3xl font-semibold lg:text-5xl lg:text-center lg:max-w-[760px]'
                        }
                    >
                        {t('start-whenever.title')}
                    </h3>
                    <p className={'text-black opacity-40 font-medium text-[16px]/snug lg:hidden'}>
                        {t('start-whenever.description')}
                    </p>
                    <Button className={'mt-2'}>{t('start-whenever.button')}</Button>
                </div>
            </section>
        </div>
    );
};
