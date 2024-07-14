import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { LanguagePicker } from '@/components/layout/header/desktop/language-picker';
import { LoginButton } from '@/components/layout/header/desktop/login-button';
import { MenuItems } from '@/components/layout/header/desktop/menu-items';

const MobileHeader = dynamic(
    import('../mobile').then((mod) => mod.MobileHeader),
    { ssr: false },
);

import JJO from '@/assets/jjo-text.svg';

export const Header = () => {
    return (
        <>
            <MobileHeader />
            <header className="top-0 w-screen sticky bg-white z-20">
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
        </>
    );
};
