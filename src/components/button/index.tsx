import cn from 'classnames';
import { HTMLProps, PropsWithChildren } from 'react';

import { ArrowRight } from './arrow-right';

export interface Props extends PropsWithChildren, Omit<HTMLProps<HTMLButtonElement>, 'type'> {
    variant?: 'solid' | 'outline';
    type?: 'submit' | 'button' | 'reset';
    block?: boolean;
    arrow?: boolean;
}

export const Button = ({
    variant = 'solid',
    block,
    className,
    children,
    arrow,
    ...props
}: Props) => {
    return (
        <button
            {...props}
            className={cn(
                'flex items-center gap-3 uppercase lg:h-[60px] h-[50px] lg:px-8 text-sm lg:py-5 rounded-[10px] border-[1px] border-black transition-all duration-200',
                {
                    'bg-black text-white hover:bg-transparent hover:text-black':
                        variant === 'solid',
                    'hover:bg-black hover:text-white': variant === 'outline',
                    'w-full': block,
                },
                className,
            )}
        >
            {children}
            {arrow && <ArrowRight />}
        </button>
    );
};
