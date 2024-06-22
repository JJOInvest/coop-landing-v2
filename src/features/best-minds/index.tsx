import Image from 'next/image';

import Blob2 from '@/assets/blobs/blob-2.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

import JJO from '@/assets/jjo.svg';

export const BestMinds = async () => {
    const { t } = await getServerTranslations();

    return (
        <section className={'pt-20 pb-40 relative overflow-hidden bg-[#f7f7f7] lg:py-32'}>
            <div
                className={
                    'absolute bg-[#3862ef] w-[200px] h-[320px] opacity-20 blur-[70px] -top-[15px] left-[30px]'
                }
            />

            <div className={'container flex flex-col gap-32 lg:flex-row'}>
                <div className={'flex flex-col gap-6 lg:gap-8 lg:max-w-[570px] lg:items-center'}>
                    <h2 className={'text-2xl lg:text-5xl/tight font-medium'}>
                        {t('best-minds.title')}
                    </h2>
                    <p className={'text-[16px]/snug text-[#4e4e4e] lg:text-lg/normal'}>
                        {t('best-minds.description')}
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
                        src={Blob2}
                        alt={'blob'}
                        className={
                            'absolute -z-10 -bottom-[100px] -right-[12px] lg:-right-[140px] lg:-bottom-[40px]'
                        }
                    />

                    <div
                        className={
                            'absolute top-0 left-14 -translate-y-[50%] rounded-full py-2 px-4 text-white flex items-center gap-2 shadow-button lg:-left-[26px] lg:top-[60px]'
                        }
                        style={{
                            background: 'linear-gradient(48deg, #6EA7B3 6.08%, #0684A1 104.31%)',
                        }}
                    >
                        <Image src={JJO} alt={'index'} />
                        INDEX
                    </div>
                    <Image
                        src={'/smartest/smart-man.png'}
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
