'use client';

import { useTranslation } from 'react-i18next';

import { Button } from '@/components/button';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className={'h-screen w-screen bg-hero-pattern bg-bottom bg-cover pt-14'}>
            <div className="container flex flex-col items-center justify-center max-h-[50%]">
                <h1
                    className={
                        'max-w-full lg:max-w-[544px] lg:text-5xl/tight text-3xl/snug font-medium lg:text-center'
                    }
                >
                    {t('hero.title')}
                </h1>
                <p className={'max-w-[770px] lg:text-lg lg:text-center opacity-60 mt-5'}>
                    {t('hero.description')}
                </p>

                <div className="flex gap-4 lg:gap-5 mt-8 items-center lg:flex-row-reverse flex-col lg:w-min w-full">
                    <Button type={'button'} className={'lg:w-72 w-full lg:justify-between'} arrow>
                        {t('hero.button.try-free')}
                    </Button>
                    <Button
                        type={'button'}
                        variant={'outline'}
                        className={'lg:w-72 w-full lg:justify-between lg:order-2'}
                        arrow
                    >
                        {t('hero.button.video')}
                    </Button>
                </div>
            </div>
        </section>
    );
};
