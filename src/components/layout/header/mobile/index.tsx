'use client';

import { isMobile } from 'react-device-detect';

import { Header } from '@/components/layout/header/mobile/header';
import { Menu } from '@/components/layout/header/mobile/menu';

export const MobileHeader = () => {
    if (!isMobile) return null;

    return (
        <>
            <Header />
            <Menu />
        </>
    );
};
