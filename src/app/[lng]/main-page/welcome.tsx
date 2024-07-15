import dynamic from 'next/dynamic';
import Image from 'next/image';

import BgLines from '@/assets/welcome/bg-lines.svg';
import BG from '@/assets/welcome/bg.png';
import HandLg from '@/assets/welcome/hand-lg.png';
import Hand from '@/assets/welcome/hand.png';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

const ResponseImage = dynamic(
    () => import('@/components/response-image').then((mod) => mod.ResponseImage),
    {
        ssr: false,
    },
);

export async function Welcome() {
    const { t } = await getServerTranslations();

    return (
        <div className="relative">
            <div className="absolute bg-black hidden lg:block h-32 w-screen bottom-0 left-0 -z-20" />

            <section className="pt-20 relative lg:rounded-xl lg:mx-20 overflow-hidden isolate bg-white">
                <Image
                    alt=""
                    src={BgLines}
                    quality={100}
                    fill
                    style={{
                        objectFit: 'contain',
                    }}
                    className="top-0 left-0 -z-10"
                />
                <Image
                    alt=""
                    src={BG}
                    placeholder="blur"
                    quality={100}
                    fill
                    className="-z-10"
                    style={{
                        objectFit: 'cover',
                    }}
                />

                <div className="container flex flex-col lg:flex-row-reverse lg:gap-16 lg:items-center">
                    <div className="flex flex-col gap-8 lg:ml-auto lg:max-w-[470px] lg:items-start">
                        <h2 className="text-[28px] font-medium lg:text-5xl/tight lg:max-w-[95%]">
                            {t('welcome_to_jjo')}
                        </h2>
                        <p className="text-grey-slate text-[16px]/snug lg:text-lg">
                            {t('all_you_need')}
                        </p>
                        <Button className="mt-2" arrow>
                            {t('try_for_free')}
                        </Button>
                    </div>
                    <ResponseImage
                        mobile={Hand}
                        desktop={HandLg}
                        className="mt-16 -ml-20 max-w-[375px] lg:max-w-[575px]"
                    />
                </div>
            </section>
        </div>
    );
}
