'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { trackAnalytics } from '@/lib/trackAnalytics';

export function LoginButton() {
    const { t, i18n } = useTranslation();

    return (
        <Link
            href={`/${i18n.language}/login`}
            className="flex items-center bg-black px-14 h-10 text-[16px]/[100%]
             text-white hover:bg-transparent hover:text-black
             transition-all duration-300 border-black border-[1px] rounded-lg"
            onClick={() =>
                trackAnalytics(
                    {
                        event: 'click_vhod-shapka_id-32',
                        eventCategory: 'click',
                        eventAction: 'vhod-shapka',
                        eventLabel: 'id-32',
                    },
                    {
                        counterId: 93612829,
                        eventName: 'reachGoal',
                        target: 'click_vhod-shapka_id-32',
                    },
                )
            }
        >
            {t('login')}
        </Link>
    );
}
