import { DesktopHeader } from '@/components/layout/header/desktop';
import { MobileHeader } from '@/components/layout/header/mobile';

export const Header = () => {
    return (
        <>
            <MobileHeader />
            <DesktopHeader />
        </>
    );
};
