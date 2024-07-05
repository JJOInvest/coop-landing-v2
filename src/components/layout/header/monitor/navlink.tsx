'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface Props {
    href: string;
    label: string;
}

export const Navlink = ({ href, label }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn('text-[16px]/[110%] py-5 relative', {
                'opacity-100': isActive,
                'opacity-50': !isActive,
            })}
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
