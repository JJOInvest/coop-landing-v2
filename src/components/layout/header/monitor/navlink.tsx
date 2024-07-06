'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import styles from './navlink.module.css';

export interface Props {
    href: string;
    label: string;
}

export const Navlink = ({ href, label }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const ref = useRef<HTMLAnchorElement>(null);

    return (
        <Link
            ref={ref}
            href={href}
            className={cn('text-[16px]/[110%] font-light py-5 relative', styles.navlink, {
                [styles.active]: isActive,
            })}
        >
            {label}
            <span
                className={cn(
                    'absolute mx-auto bottom-0 left-0 right-0 w-[55%] bg-orange-120 h-0.5',
                    styles.navlinkUnderscore,
                )}
            />
        </Link>
    );
};
