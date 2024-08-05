import Image from 'next/image';
import Link from 'next/link';

import { LanguagePicker } from '@/components/layout/header/desktop/language-picker';
import { LoginButton } from '@/components/layout/header/desktop/login-button';
import { MenuItems } from '@/components/layout/header/desktop/menu-items';
import { trackAnalytics } from '@/lib/trackAnalytics';

import JJO from '@/assets/jjo-text.svg';

export const DesktopHeader = () => {
    return (
        <header className="w-screen bg-white z-20 hidden md:block sticky top-0">
            <div className="container flex items-center justify-between">
                <div className="flex items-center overflow-hidden">
                    <Link href="/">
                        <Image src={JJO} alt="JJO" className="invert" />
                    </Link>
                    <MenuItems />
                </div>

                <div className="flex items-center gap-8">
                    <LanguagePicker />
                    <LoginButton />
                </div>
            </div>
        </header>
    );
};
