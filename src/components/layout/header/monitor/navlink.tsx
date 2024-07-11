'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface Props {
    href: string;
    label: string;
    target?: string;
}

export const NavLink = ({ href, label, target }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === href || `${pathname}/` === href;

    return (
        <Link
            href={href}
            className={cn(
                'text-base font-light py-5 relative border-b-2 hover:opacity-100 hover:border-orange-120 duration-300',
                {
                    'opacity-100 border-orange-120': isActive,
                    'border-transparent opacity-50': !isActive,
                },
            )}
            target={target}
        >
            {label}
        </Link>
    );
};
