import cn from 'classnames';
import { HTMLProps, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren, Omit<HTMLProps<HTMLButtonElement>, 'type'> {
    variant?: 'solid' | 'outline';
    type?: 'submit' | 'button' | 'reset';
    block?: boolean;
}

export const Button = ({ variant = 'solid', block, className, children, ...props }: Props) => {
    return (
        <button
            {...props}
            className={cn(
                'btn uppercase lg:h-[60px] h-[50px] lg:px-8 text-sm lg:py-5',
                {
                    'bg-black text-white hover:bg-black border-none': variant === 'solid',
                    'btn-outline': variant === 'outline',
                    'w-full': block,
                },
                className,
            )}
        >
            {children}
        </button>
    );
};
