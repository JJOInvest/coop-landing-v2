interface MenuItem {
    text: string;
    href: string;
    isExternal?: boolean;
}

export const headerMenuItems: MenuItem[] = [
    {
        text: 'layout.navbar.main',
        href: '/',
    },
    {
        text: 'layout.navbar.invest',
        href: '/invest/33961919663385',
    },
    {
        text: 'layout.navbar.price',
        href: '/price',
    },
    {
        text: 'layout.navbar.ƒaq',
        href: '/help',
    },
    {
        text: 'layout.navbar.blog',
        href: 'https://blog.jjo.finance/',
        isExternal: true,
    },
];
