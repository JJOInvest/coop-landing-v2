import { trackAnalytics } from '@/lib/trackAnalytics';

interface MenuItem {
    text: string;
    href: string;
    isExternal?: boolean;
    trackAnalyticsEvent?: any;
}

export const headerMenuItems: MenuItem[] = [
    {
        text: 'dashboard',
        href: '/',
        trackAnalyticsEvent: () =>
            trackAnalytics(
                {
                    event: 'view_menu-glavnaya_id-26',
                    eventCategory: 'view',
                    eventAction: 'menu-glavnaya',
                    eventLabel: 'id-26',
                },
                {
                    counterId: 93612829,
                    eventName: 'reachGoal',
                    target: 'view_menu-glavnaya_id-26',
                },
            ),
    },

    {
        text: 'invest',
        href: '/invest/33961919663385',
        trackAnalyticsEvent: () =>
            trackAnalytics(
                {
                    event: 'view_menu-invest_id-27',
                    eventCategory: 'view',
                    eventAction: 'menu-invest',
                    eventLabel: 'id-27',
                },
                {
                    counterId: 93612829,
                    eventName: 'reachGoal',
                    target: 'iew_menu-invest_id-27',
                },
            ),
    },
    {
        text: 'price',
        href: '/price',
        trackAnalyticsEvent: () =>
            trackAnalytics(
                {
                    event: 'view_menu-price_id-28',
                    eventCategory: 'view',
                    eventAction: 'menu-price',
                    eventLabel: 'id-28',
                },
                {
                    counterId: 93612829,
                    eventName: 'reachGoal',
                    target: 'view_menu-price_id-28',
                },
            ),
    },
    {
        text: 'help',
        href: '/help',
        trackAnalyticsEvent: () =>
            trackAnalytics(
                {
                    event: 'view_menu-help_id-29',
                    eventCategory: 'view',
                    eventAction: 'menu-help',
                    eventLabel: 'id-29',
                },
                {
                    counterId: 93612829,
                    eventName: 'reachGoal',
                    target: 'view_menu-help_id-29',
                },
            ),
    },
    {
        text: 'blog',
        href: 'https://blog.jjo.finance/',
        isExternal: true,
        trackAnalyticsEvent: () =>
            trackAnalytics(
                {
                    event: 'view_menu-blog_id-30',
                    eventCategory: 'view',
                    eventAction: 'menu-blog',
                    eventLabel: 'id-30',
                },
                {
                    counterId: 93612829,
                    eventName: 'reachGoal',
                    target: 'view_menu-blog_id-30',
                },
            ),
    },
];
