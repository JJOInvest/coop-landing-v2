import cn from 'classnames';
import Image from 'next/image';
import { InputHTMLAttributes, SyntheticEvent, useState } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

import EyeOf from '@/assets/password/eye-off.svg';
import Eye from '@/assets/password/eye.svg';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    register?: UseFormRegister<any>;
    registerOptions?: RegisterOptions;
    labels?: {
        main: string;
        alt?: string;
    };
    startAdornment?: string;
    error?: string;
}

export const TextInput = ({
    id,
    labels,
    register,
    registerOptions,
    startAdornment,
    type,
    error,
    ...inputProps
}: Props) => {
    const [currentType, setCurrentType] = useState(type ?? 'text');
    const isPassword = type === 'password';

    const togglePasswordShow = (e: SyntheticEvent) => {
        e.preventDefault();
        setCurrentType((currentType) => (currentType === 'password' ? 'text' : 'password'));
    };

    console.log('for pull request[2}');

    return (
        <div>
            <div className="text-brand-400/80 text-sm mb-2 flex justify-between">
                <span>{labels?.main}</span>
                <span>{labels?.alt}</span>
            </div>
            <label
                className={cn('relative input input-bordered flex items-center gap-2 h-[52px]', {
                    'border-red-600': error,
                })}
            >
                {startAdornment && (
                    <div className="text-primary-400 font-medium">{startAdornment}</div>
                )}
                <input
                    className="grow"
                    type={currentType}
                    {...inputProps}
                    {...(register && register(id, registerOptions))}
                />
                {isPassword && (
                    <button
                        className="absolute top-3 right-4 flex items-center"
                        onClick={togglePasswordShow}
                    >
                        {currentType === 'password' ? (
                            <Image src={Eye} alt="" />
                        ) : (
                            <Image src={EyeOf} alt="" />
                        )}
                    </button>
                )}
            </label>
            {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
        </div>
    );
};
