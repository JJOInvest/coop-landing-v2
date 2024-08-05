'use client';

import { useTranslation } from 'react-i18next';

import { headerMenuItems } from '@/components/layout/header/constants';
import { NavLink } from '@/components/layout/header/desktop/navlink';
import { getServerTranslations } from '@/i18n/server';
import { trackAnalytics } from '@/lib/trackAnalytics';

export function MenuItems() {
    const { t, i18n } = useTranslation();

    return (
        <nav className="flex gap-5 items-center ml-16">
            {headerMenuItems.map((link) => (
                <NavLink
                    key={`${i18n.language}${link.href}`}
                    href={link.isExternal ? link.href : `/${i18n.language}${link.href}`}
                    label={t(link.text)}
                    target={link.isExternal ? '_blank' : undefined}
                    onClick={link.trackAnalyticsEvent}
                />
            ))}
        </nav>
    );
}
