interface MenuItem {
    text: string;
    href: string;
    isExternal?: boolean;
}

export const headerMenuItems: MenuItem[] = [
    {
        text: 'dashboard',
        href: '/',
    },
    {
        text: 'invest',
        href: '/invest/33961919663385',
    },
    {
        text: 'prices',
        href: '/price',
    },
    {
        text: 'help',
        href: '/help',
    },
    {
        text: 'blog',
        href: 'https://blog.jjo.finance/',
        isExternal: true,
    },
];
