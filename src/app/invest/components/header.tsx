import Image from 'next/image';

import Blob4 from '@/assets/blobs/blob-4.svg';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

export async function InvestHeader() {
    const { t } = await getServerTranslations();

    return (
        <div className="relative w-screen">
            <Image
                src={Blob4}
                alt="blob"
                className="absolute -bottom-5 right-10 z-20 lg:right-[30%]"
            />

            <div className="relative py-[90px]">
                <div className="absolute w-[300px] h-[300px] -right-[80px] -bottom-[100px] bg-blue-800 rounded-full opacity-50 blur-[150px] -z-10 " />

                <div className="absolute lg:block hidden w-[200px] h-[300px] top-0 -left-[80px] bg-blue-800 rounded-full opacity-50 blur-[150px] -z-10 " />

                <div className="container flex flex-col gap-6 lg:flex-row lg:justify-between">
                    <div className="text-[32px]/snug font-medium lg:text-[64px] leading-[1.2] max-w-[500px]">
                        {t('invest.title')}
                    </div>
                    <p className="text-black/60 text-lg max-w-96 pr-5">{t('invest.description')}</p>
                    <Button className="mt-2 lg:hidden" block>
                        {t('invest.button')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
