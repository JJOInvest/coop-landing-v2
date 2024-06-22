import cn from 'classnames';
import { HTMLProps, PropsWithChildren } from 'react';

import { ArrowRight } from '@/assets/icons/arrow-right';

export interface Props extends PropsWithChildren, Omit<HTMLProps<HTMLButtonElement>, 'type'> {
    variant?: 'solid' | 'outline';
    type?: 'submit' | 'button' | 'reset';
}

export const Button = ({ variant = 'solid', className, children, ...props }: Props) => {
    return (
        <button
            {...props}
            className={cn(
                className,
                'lg:w-72 w-full btn uppercase lg:h-[60px] h-[50px] lg:px-8 text-sm lg:py-5 flex gap-5 lg:gap-0 lg:justify-between lg:order-2',
                {
                    'bg-black text-white hover:bg-black': variant === 'solid',
                    'btn-outline': variant === 'outline',
                },
            )}
        >
            {children}
            <ArrowRight color={variant === 'solid' ? 'white' : 'black'} />
        </button>
    );
};
