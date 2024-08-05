'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PromoVideo } from '@/app/[lng]/main-page/promo-video';
import { Button } from '@/components/button';
import { trackAnalytics } from '@/lib/trackAnalytics';

export const WatchVideoButton = () => {
    const { t } = useTranslation();
    const [videoOpen, setVideoOpen] = useState(false);

    const onRequestClose = () => {
        setVideoOpen(false);
    };
    return (
        <>
            <Button
                type="button"
                variant="outline"
                className="lg:w-72 w-full lg:justify-between lg:order-2"
                arrow
                onClick={() => {
                    trackAnalytics(
                        {
                            event: 'click_view-video_id-33',
                            eventCategory: 'click',
                            eventAction: 'view-video',
                            eventLabel: 'id-33',
                        },
                        {
                            counterId: 93612829,
                            eventName: 'reachGoal',
                            target: 'click_view-video_id-33',
                        },
                    );
                    setVideoOpen(true);
                }}
            >
                {t('watch_video')}
            </Button>
            <PromoVideo open={videoOpen} onRequestClose={onRequestClose} />
        </>
    );
};
