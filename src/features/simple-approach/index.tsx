'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import HeroIconFlash from '@/assets/icons/hero-icon-flash.svg';
import HeroIconM from '@/assets/icons/hero-icon-m.svg';
import HeroIconSteps from '@/assets/icons/hero-icon-steps.svg';
import HeroIconUnicorn from '@/assets/icons/hero-icon-unicorn.svg';
import IPhone from '@/assets/simple-approach/iphone.png';
import { Button } from '@/components/button';
import { BlobIcon } from '@/features/simple-approach/blob-icon';

export const SimpleApproach = () => {
    const { t } = useTranslation();

    return (
        <section className={'pt-20 relative isolate overflow-hidden pb-56 lg:py-32'}>
            <div
                className={
                    'absolute w-[475px] h-[435px] rounded-full bg-blue-400 -z-10 -top-[50px] -right-[160px] lg:top-[140px] lg:-right-[80px] opacity-10 blur-[100px]'
                }
            />

            <div
                className={
                    'absolute top-[200px] -rotate-[150deg] w-[310px] h-[200px] -z-10 bg-cyan rounded-full -right-[120px] lg:top-[450px] lg:-right-[40px] opacity-15 blur-[100px] lg:opacity-25'
                }
            />

            <div className={'container lg:flex lg:flex-row-reverse lg:items-center gap-32'}>
                <div className={'flex flex-col gap-6 lg:gap-8 lg:max-w-[60%]'}>
                    <h2 className={'text-2xl lg:text-5xl/tight font-medium w-full'}>
                        {t('simple-approach.title')}
                    </h2>

                    <p
                        className={
                            'text-[16px]/snug lg:text-lg/normal font-light w-full lg:max-w-[570px]'
                        }
                    >
                        {t('simple-approach.description')}
                    </p>

                    <Button className={'mt-2 lg:self-start'} arrow>
                        {t('simple-approach.button')}
                    </Button>
                </div>

                <div
                    className={
                        'mx-auto mt-40 lg:mt-0 flex items-center justify-center relative lg:flex-grow'
                    }
                >
                    <Image className={'z-10'} src={IPhone} alt={'iphone'} />

                    <div
                        className={
                            'absolute w-[290px] h-[585px] bg-blue-900 opacity-15 blur-[20px] -mb-8 -mr-8'
                        }
                    />

                    <Image
                        src={HeroIconUnicorn}
                        alt={'unicorn'}
                        className={'absolute -top-[68px] left-0 lg:top-[170px] lg:-left-[130px]'}
                    />
                    <Image
                        src={HeroIconFlash}
                        alt={'flash'}
                        className={
                            'absolute -top-[100px] -right-[6px] lg:-right-[120px] lg:-top-[60px]'
                        }
                    />
                    <Image
                        src={HeroIconM}
                        alt={'m'}
                        className={
                            'absolute -bottom-[40px] left-0 lg:-left-[90px] lg:bottom-[90px]'
                        }
                    />
                    <Image
                        src={HeroIconSteps}
                        alt={'steps'}
                        className={
                            'absolute right-0 -bottom-[80px] lg:-bottom-[60px] lg:-right-[80px]'
                        }
                    />

                    <BlobIcon />
                </div>
            </div>
        </section>
    );
};
