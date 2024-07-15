'use client';

import { Header } from '@/components/layout/header/mobile/header';
import { Menu } from '@/components/layout/header/mobile/menu';

export const MobileHeader = () => {
    return (
        <div className="sticky top-0 z-20 md:hidden">
            <Header />
            <Menu />
        </div>
    );
};
