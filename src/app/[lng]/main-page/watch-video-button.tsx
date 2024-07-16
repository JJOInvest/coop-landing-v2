'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PromoVideo } from '@/app/[lng]/main-page/promo-video';
import { Button } from '@/components/button';

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
                    setVideoOpen(true);
                }}
            >
                {t('watch_video')}
            </Button>
            <PromoVideo open={videoOpen} onRequestClose={onRequestClose} />
        </>
    );
};
