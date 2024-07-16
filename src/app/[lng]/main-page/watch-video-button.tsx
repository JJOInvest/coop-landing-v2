'use client';

import { useTranslation } from 'react-i18next';

import { Button } from '@/components/button';

export const WatchVideoButton = () => {
    const { t } = useTranslation();

    return (
        <Button
            type="button"
            variant="outline"
            className="lg:w-72 w-full lg:justify-between lg:order-2"
            arrow
            onClick={() => {
                // @ts-ignore
                document.getElementById('promoModal').showModal();
            }}
        >
            {t('watch_video')}
        </Button>
    );
};
