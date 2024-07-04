'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

import { mobileHeaderContext } from '@/components/layout/header/mobile/context';

export interface Props {
    href: string;
    label: string;
}

export const Navlink = ({ href, label }: Props) => {
    const { openOrClose } = useContext(mobileHeaderContext);
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={openOrClose}
            className="w-full text-lg text-center py-3 rounded-xl border-black border-[1px]"
        >
            {label}

            {isActive && (
                <span
                    className="absolute mx-auto bottom-0 left-0 right-0 w-[55%] bg-orange-120 h-0.5"
                />
            )}
        </Link>
    );
};
