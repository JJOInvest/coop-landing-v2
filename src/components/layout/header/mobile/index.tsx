'use client';

import { MobileHeaderContextProvider } from '@/components/layout/header/mobile/context';
import { Header } from '@/components/layout/header/mobile/header';
import { Menu } from '@/components/layout/header/mobile/menu';

export const MobileHeader = () => {
    return (
        <MobileHeaderContextProvider>
            <Header />
            <Menu />
        </MobileHeaderContextProvider>
    );
};
