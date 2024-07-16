'use client';

import cn from 'classnames';
import Link from 'next/link';
import { HTMLProps, PropsWithChildren } from 'react';

import { ArrowRight } from './arrow-right';
import styles from './styles.module.css';

export interface Props extends PropsWithChildren, Omit<HTMLProps<HTMLButtonElement>, 'type'> {
    variant?: 'solid' | 'outline';
    type?: 'submit' | 'button' | 'reset';
    block?: boolean;
    arrow?: boolean;
    small?: boolean;
    as?: 'button' | 'link';
    href?: string;
    target?: string;
}

export const Button = ({
    variant = 'solid',
    disabled,
    block,
    className,
    children,
    arrow,
    small,
    as = 'button',
    href,
    target,
    ...props
}: Props) => {
    const buttonClasses = cn(
        'flex items-center justify-center gap-3 uppercase h-[50px] lg:px-8 text-sm lg:py-5 rounded-[10px] duration-300',
        styles.button,
        {
            'bg-black text-white hover:bg-transparent hover:text-black':
                variant === 'solid' && !disabled,
            'hover:bg-black hover:text-white': variant === 'outline' && !disabled,
            'w-full': block,
            'border-[1px] border-black': !disabled,
            'bg-grey-70 text-white': disabled,
            'lg:h-[52px]': small,
            'lg:h-[60px]': !small,
        },
        className,
    );

    if (as === 'link') {
        return (
            <Link href={href || '#'} className={buttonClasses} target={target}>
                {children}
                {arrow && <ArrowRight />}
            </Link>
        );
    }

    return (
        <button disabled={disabled} {...props} className={buttonClasses}>
            {children}
            {arrow && <ArrowRight />}
        </button>
    );
};
