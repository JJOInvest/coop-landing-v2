import { LoginButton } from '@/components/layout/header/login-button';
import { Navlink } from '@/components/layout/header/navlink';
import { getServerTranslations } from '@/i18n/server';

import { Logo } from '../../logo';

interface Point {
    labelKey: string;
    href: string;
}

const points: Point[] = [
    {
        labelKey: 'layout.navbar.main',
        href: '/',
    },
    {
        labelKey: 'layout.navbar.invest',
        href: '/invest',
    },
    {
        labelKey: 'layout.navbar.price',
        href: '/price',
    },
    {
        labelKey: 'layout.navbar.ƒaq',
        href: '/ƒaq',
    },
];

export const Header = async () => {
    const { t } = await getServerTranslations();

    return (
        <header className={'w-screen fixed bg-white z-20'}>
            <div className="container flex items-center justify-between">
                <div className={'flex items-center'}>
                    <Logo />
                    <nav className={'flex gap-5 items-center ml-16'}>
                        {points.map((point) => (
                            <Navlink key={point.href} {...point} label={t(point.labelKey)} />
                        ))}
                    </nav>
                </div>

                <div className={'flex items-center'}>
                    <LoginButton />
                </div>
            </div>
        </header>
    );
};
