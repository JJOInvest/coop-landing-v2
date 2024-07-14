import dynamic from 'next/dynamic';

import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

import bgMobile from './assets/woman-small.png';
import bgDesktop from './assets/woman.png';

const SectionBackground = dynamic(
    () => import('@/app/[lng]/main-page/section-background').then((mod) => mod.SectionBackground),
    {
        ssr: false,
    },
);

export async function ImportantKnowledge() {
    const { t } = await getServerTranslations();

    return (
        <section className="text-white isolate bg-cover pt-52 bg-left-top relative overflow-hidden lg:rounded-xl lg:py-32 lg:mx-20 bg-black">
            <div className="absolute w-full h-full top-0 left-0 -z-10 lg:hidden bg-important-knowledge" />

            <div className="absolute w-full h-full top-0 left-0 -z-10 bg-black hidden lg:block opacity-20" />

            <div className="hidden lg:block bg-orange-100 w-[35%] h-[100px] absolute top-0 right-0 blur-[100px] -z-10" />

            <div className="container relative z-10">
                <div className="absolute w-[70%] lg:w-[40%] bg-violet-800 opacity-45 h-[200px] -top-[100px] left-0 blur-[140px] lg:-top-[150px] -z-10" />

                <div className="flex flex-col gap-8 lg:max-w-[50%] lg:ml-auto lg:items-start lg:pr-16">
                    <h2 className="text-2xl font-medium lg:text-5xl">{t('important_to_know')}</h2>
                    <p className="text-[16p]/snug lg:text-lg font-light">{t('jjo_function')}</p>
                    <Button className="invert lg:invert-0" arrow>
                        {t('register')}
                    </Button>
                </div>
            </div>
            <SectionBackground desktop={bgDesktop} mobile={bgMobile} />

            <div
                className="lg:hidden h-40 w-full bg-black -mt-48"
                style={{
                    background: 'linear-gradient(180deg, #00000000, #000000)',
                }}
            />

            <div className="lg:hidden h-32 w-full bg-black" />
        </section>
    );
}
