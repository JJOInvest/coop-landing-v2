'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useMobileMenuStore } from '@/components/layout/header/use-mobile-menu-store';

export interface Props {
    href: string;
    label: string;
    isExternal?: boolean;
}

export const NavLink = ({ href, label, isExternal = false }: Props) => {
    const toggleMenu = useMobileMenuStore((state) => state.toggleMenu);
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={toggleMenu}
            className="w-full h-[64px] flex items-center justify-center text-lg text-center py-3 rounded-xl border-black border-[1px]"
            rel={isExternal ? 'nofollow' : undefined}
            target={isExternal ? '_blank' : undefined}
        >
            {label}
            {isActive && (
                <span className="absolute mx-auto bottom-0 left-0 right-0 w-[55%] bg-orange-120 h-0.5" />
            )}
        </Link>
    );
};
