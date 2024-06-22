import Image from 'next/image';

import Blob3 from '@/assets/blobs/blob-3.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

import JJO from '@/assets/jjo.svg';

export const MarketGrow = async () => {
    const { t } = await getServerTranslations();

    return (
        <section className={'pt-20 pb-40 relative overflow-hidden lg:py-32'}>
            <div
                className={
                    'absolute bg-[#00ffff] w-[200px] h-[320px] opacity-20 blur-[85px] rotate-[135deg] top-[35px] -right-[50px] lg:top-[320px] lg:right-[50px]'
                }
            />

            <div className={'container flex flex-col gap-32 lg:flex-row-reverse'}>
                <div className={'flex flex-col gap-6 lg:gap-8 lg:max-w-[570px] lg:items-center'}>
                    <h2 className={'text-2xl lg:text-5xl/tight font-medium'}>
                        {t('market-grow.title')}
                    </h2>
                    <p className={'text-[16px]/snug text-[#4e4e4e] lg:text-lg/normal'}>
                        {t('market-grow.description')}
                    </p>
                    <Button className={'mt-2 lg:self-start'}>
                        Узнать больше
                        <Image src={ArrowRight} alt={'arrow right'} />
                    </Button>
                </div>

                <div className={'relative isolate'}>
                    <div
                        className={
                            'absolute bg-[#3862ef] w-[200px] h-[320px] opacity-30 blur-[70px] -top-[15px] -right-[30px] -z-10 lg:-right-[240px] lg:top-[260px] lg:opacity-20'
                        }
                    />

                    <Image
                        src={Blob3}
                        alt={'blob'}
                        className={
                            'absolute -z-10 -bottom-[140px] -right-[12px] lg:-bottom-[40px] lg:right-auto lg:-left-[180px]'
                        }
                    />

                    <div
                        className={
                            'absolute top-0 left-[5px] -translate-y-[50%] rounded-full py-2 px-4 text-white flex items-center gap-2 shadow-button lg:-left-[70px] lg:top-[30px]'
                        }
                        style={{
                            background: 'linear-gradient(90deg, #7C5E9C 0%, #3E29B9 100%)',
                        }}
                    >
                        <Image src={JJO} alt={'index'} />
                        J’JO Optima
                    </div>

                    <div
                        className={
                            'absolute -bottom-[100px] right-0 -translate-y-[50%] rounded-full py-2 px-4 text-white flex items-center gap-2 shadow-button lg:right-[20px]'
                        }
                        style={{
                            background: 'linear-gradient(48deg, #6EA7B3, #0684A1)',
                        }}
                    >
                        <Image src={JJO} alt={'index'} />
                        J’JO35
                    </div>

                    <Image
                        src={'/market-grow/rocket.png'}
                        alt={'smart man'}
                        className={'rounded-xl'}
                        width={470}
                        height={470}
                    />
                </div>
            </div>
        </section>
    );
};
