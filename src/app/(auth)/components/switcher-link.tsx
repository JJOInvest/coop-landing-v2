import cn from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    isActivate: boolean;
    href: string;
}

export const SwitcherLink = ({ href, children, isActivate }: Props) => {
    return (
        <Link
            className={cn(
                'flex items-center justify-center w-1/2 font-semibold text-base text-grey-100',
                {
                    'text-white bg-black': isActivate,
                },
            )}
            href={href}
            shallow
        >
            {children}
        </Link>
    );
};
