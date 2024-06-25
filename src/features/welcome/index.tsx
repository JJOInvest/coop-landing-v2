import Image from 'next/image';

import ArrowRight from '@/assets/icons/arrow-right.svg';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

export const Welcome = async () => {
    const { t } = await getServerTranslations();

    return (
        <section
            className={
                'pt-20 relative bg-[#9368ff] bg-opacity-15 lg:rounded-xl lg:mx-48 lg:bg-welcome-pattern bg-no-repeat overflow-hidden'
            }
        >
            <div
                className={
                    'absolute hidden lg:block bg-[#ef2823] opacity-25 blur-[100px] w-[60%] h-[80%] -top-[160px] -left-[100px] -z-10'
                }
            />

            <div
                className={
                    'absolute top-0 left-0 bg-[#9368ff] w-full h-full blur-[60px] -z-10 opacity-10'
                }
            />

            <div className={'container lg:flex lg:flex-row-reverse lg:gap-16 lg:items-center'}>
                <div className={'flex flex-col gap-8 lg:max-w-[50%] lg:items-start lg:pl-8'}>
                    <h2 className={'text-[28px] font-semibold lg:text-5xl/tight lg:max-w-[80%]'}>
                        {t('welcome.title')}
                    </h2>
                    <p className={'text-neutral-500 text-[16px]/snug lg:text-lg'}>
                        {t('welcome.description')}
                    </p>
                    <Button className={'mt-2'}>
                        {t('welcome.button')}
                        <Image src={ArrowRight} alt={'arrow right'} />
                    </Button>
                </div>

                <Image
                    src={'/welcome/hand.png'}
                    alt={'hand with IPhone'}
                    width={576}
                    height={576}
                    className={'mt-16 -ml-20'}
                />
            </div>
        </section>
    );
};
