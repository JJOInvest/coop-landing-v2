import Image from 'next/image';

import { getServerTranslations } from '@/i18n/server';

const logos = [
    { width: 114, height: 36, fileName: 'binance.png' },
    { width: 88, height: 36, fileName: 'bkex.png' },
    { width: 70, height: 36, fileName: 'bkex-1.png' },
    { width: 102, height: 36, fileName: 'coinbase.png' },
    { width: 102, height: 36, fileName: 'coinbase-1.png' },
    { width: 126, height: 36, fileName: 'cryptocom.png' },
    { width: 126, height: 36, fileName: 'cryptocom-1.png' },
    { width: 76, height: 36, fileName: 'huobi.png' },
    { width: 76, height: 36, fileName: 'huobi-1.png' },
    { width: 76, height: 36, fileName: 'huobi-2.png' },
    { width: 92, height: 36, fileName: 'kucoin.png' },
    { width: 92, height: 40, fileName: 'kucoin-1.png' },
];

export const FullControl = async () => {
    const { t } = await getServerTranslations();

    return (
        <section
            className={
                'bg-black text-white pt-20 mb-[480px] pb-48 lg:py-20 relative lg:mb-32 isolate'
            }
        >
            <div
                className={
                    'hidden lg:block absolute bg-[#9ea8df] w-[60%] h-[300px] -left-[80px] -top-[100px] blur-[140px] opacity-50'
                }
            />

            <Image
                src={'/full-control/bg.png'}
                alt={'nothing'}
                width={365}
                height={605}
                className={'hidden lg:block absolute opacity-50 top-0 left-0'}
            />

            <div className={'container relative'}>
                <div className={'flex flex-col gap-6 lg:gap-8 lg:max-w-[60%]'}>
                    <h2 className={'text-2xl lg:text-5xl/tight font-medium'}>
                        {t('full-control.title')}
                    </h2>
                    <p className={'text-[16px]/snug lg:text-lg/normal'}>
                        {t('full-control.description')}
                    </p>
                </div>

                <div className={'grid grid-cols-2 lg:grid-cols-4 mt-16 lg:max-w-[60%] lg:mt-10'}>
                    {logos.map((logo) => (
                        <div
                            key={logo.fileName}
                            className={'flex items-center justify-center h-16 w-full'}
                        >
                            <Image
                                src={`/full-control/logos/${logo.fileName}`}
                                alt={logo.fileName}
                                width={logo.width}
                                height={logo.height}
                            />
                        </div>
                    ))}
                </div>

                <Image
                    src={'/full-control/robot.png'}
                    alt={'robot'}
                    width={325}
                    height={510}
                    className={
                        'absolute rounded-xl mx-auto left-0 right-0 mt-20 -mb-[145px] lg:inset-0 lg:my-auto lg:mr-[60px] lg:-bottom-[220px]'
                    }
                />
            </div>

            <div
                className={'hidden lg:block absolute h-full bg-white w-[20%] right-0 top-0 -z-10'}
            />
        </section>
    );
};
