import Image from 'next/image';

import Blob2 from '@/assets/blobs/blob-2.svg';
import SmartMan from '@/assets/smartest/smart-man.png';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

import JJO from '@/assets/jjo.svg';

export async function BestMinds() {
    const { t } = await getServerTranslations();

    return (
        <section className="pt-20 pb-40 relative overflow-hidden bg-background lg:p-0 lg:flex lg:items-center min-h-screen">
            <div className="absolute bg-blue-800 w-[200px] h-80 opacity-20 blur-[70px] -top-[15px] left-[30px]" />

            <div className="container flex flex-col gap-32 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-6 lg:gap-8 lg:max-w-[570px] lg:items-center">
                    <h2 className="text-2xl lg:text-5xl/tight font-medium">
                        {t('best-minds.title')}
                    </h2>
                    <p className="text-[16px]/snug text-grey-500 font-light lg:text-lg/normal">
                        {t('best-minds.description')}
                    </p>
                    <Button className="mt-2 lg:self-start" arrow>
                        {t('best-minds.button')}
                    </Button>
                </div>

                <div className="relative isolate">
                    <div className="absolute bg-blue-800 w-52 h-80 opacity-30 blur-[70px] -top-4 -right-8 -z-10 lg:-right-60 lg:top-64 lg:opacity-20" />

                    <Image
                        src={Blob2}
                        alt="blob"
                        className="absolute -z-10 -bottom-[100px] -right-[12px] lg:-right-[140px] lg:-bottom-[40px]"
                    />

                    <div className="absolute top-0 left-14 -translate-y-[50%] rounded-full py-2 px-4 text-white flex items-center gap-2 shadow-button lg:-left-[26px] lg:top-[60px] uppercase bg-best-minds">
                        <Image src={JJO} alt="index" />
                        {t('INDEX')}
                    </div>

                    <Image src={SmartMan} alt="smart man" className="rounded-xl" />
                </div>
            </div>
        </section>
    );
}
