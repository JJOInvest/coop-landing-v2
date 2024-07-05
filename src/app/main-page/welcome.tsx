import Image from 'next/image';

import BgLines from '@/assets/welcome/bg-lines.svg';
import HandLg from '@/assets/welcome/hand-lg.png';
import Hand from '@/assets/welcome/hand.png';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

export async function Welcome() {
    const { t } = await getServerTranslations();

    return (
        <div className="relative">
            <div className="absolute bg-black hidden lg:block h-32 w-screen bottom-0 left-0 -z-20" />

            <section className="pt-20 relative bg-white lg:rounded-xl lg:mx-20 overflow-hidden isolate">
                <div className="absolute bg-[#ef2823] -left-24 -top-24 w-4/5 h-72 opacity-25 blur-3xl -z-20 -rotate-[15deg]" />
                <div className="absolute bg-[#3862ef] top-0 -right-12 w-1/4 h-2/3 blur-3xl opacity-20 -z-20" />
                <div className="absolute bg-[#3862ef] bottom-0 -left-12 w-1/4 h-2/3 blur-3xl opacity-15 -z-20" />

                <Image src={BgLines} alt="lines" className="absolute top-0 left-0 -z-10" />

                <div className="container flex flex-col lg:flex-row-reverse lg:gap-16 lg:items-center">
                    <div className="flex flex-col gap-8 lg:ml-auto lg:max-w-[470px] lg:items-start">
                        <h2 className="text-[28px] font-semibold lg:text-5xl/tight lg:max-w-[95%]">
                            {t('welcome.title')}
                        </h2>
                        <p className="text-primary-neutral text-[16px]/snug lg:text-lg font-light">
                            {t('welcome.description')}
                        </p>
                        <Button className="mt-2" arrow>
                            {t('welcome.button')}
                        </Button>
                    </div>

                    <Image
                        src={Hand}
                        alt="hand with IPhone"
                        className="lg:hidden mt-16 -ml-20 max-w-[375px] lg:max-w-[575px]"
                    />
                    <Image
                        src={HandLg}
                        alt="hand with IPhone"
                        className="hidden lg:block mt-16 -ml-20 max-w-[375px] lg:max-w-[575px]"
                    />
                </div>
            </section>
        </div>
    );
}
