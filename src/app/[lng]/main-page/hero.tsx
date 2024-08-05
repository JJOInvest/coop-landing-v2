import dynamic from 'next/dynamic';

import { WatchVideoButton } from '@/app/[lng]/main-page/watch-video-button';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';
import { trackAnalytics } from '@/lib/trackAnalytics';

import bgMobile from './assets/hero-image-small.png';
import bgDesktop from './assets/hero-image.png';

const SectionBackground = dynamic(
    () => import('@/app/[lng]/main-page/section-background').then((mod) => mod.SectionBackground),
    {
        ssr: false,
    },
);

export async function Hero() {
    const { t, i18n } = await getServerTranslations();

    return (
        <section className="h-screen w-screen pt-14 relative">
            <div className="container flex flex-col items-center justify-center max-h-[55%] lg:max-h-[65%] relative z-10">
                <h1 className="max-w-full lg:max-w-[544px] lg:text-5xl/tight text-3xl/snug font-medium text-center">
                    {t('growth_starts_here')}
                </h1>
                <p className="max-w-[580px] lg:text-lg text-center mt-5">{t('ready_solution')}</p>

                <div className="flex gap-4 lg:gap-5 mt-8 items-center lg:flex-row-reverse flex-col lg:w-min w-full">
                    <Button
                        // onClick={() => {
                        //     trackAnalytics(
                        //         {
                        //             event: 'click_start-free-1_id-34',
                        //             eventCategory: 'click',
                        //             eventAction: 'start-free-1',
                        //             eventLabel: 'id-34',
                        //         },
                        //         {
                        //             counterId: 93612829,
                        //             eventName: 'reachGoal',
                        //             target: 'click_start-free-1_id-34',
                        //         },
                        //     );
                        // }}
                        as="link"
                        href={`/${i18n.language}/register`}
                        className="lg:w-72 w-full lg:justify-between"
                        arrow
                    >
                        {t('try_for_free')}
                    </Button>
                    <WatchVideoButton />
                </div>
            </div>
            <SectionBackground desktop={bgDesktop} mobile={bgMobile} />
        </section>
    );
}
