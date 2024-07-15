import Image from 'next/image';

import Blob from '@/assets/blobs/blob-4.svg';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

export async function InvestHeader() {
    const { t } = await getServerTranslations();

    return (
        <div className="w-screen bg-investArticle">
            <div className="container py-[90px] relative flex flex-col gap-6 lg:flex-row lg:justify-between">
                <Image
                    src={Blob}
                    alt=""
                    className="absolute bottom-0 right-10 lg:right-80 translate-y-1/2 z-10"
                />

                <div className="text-[32px]/snug font-medium lg:text-[64px] leading-[1.2] max-w-[500px]">
                    {t('build_financial_future')}
                </div>
                <p className="text-black/60 text-lg max-w-96 pr-5">
                    {t('start_investing_cryptocurrency')}
                </p>
                <Button className="mt-2 lg:hidden" block>
                    {t('build_financial_future')}
                </Button>
            </div>
        </div>
    );
}
