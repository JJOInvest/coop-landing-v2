import { InputHTMLAttributes } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    register?: UseFormRegister<any>;
    registerOptions?: RegisterOptions;
    labels?: {
        main: string;
        alt?: string;
    };
    startAdornment?: string;
}

export const TextInput = ({
    id,
    labels,
    register,
    registerOptions,
    startAdornment,
    ...inputProps
}: Props) => {
    return (
        <div>
            <div className="text-brand-400/80 text-sm mb-2 flex justify-between">
                <span>{labels?.main}</span>
                <span>{labels?.alt}</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
                {startAdornment && (
                    <div className="text-primary-400 font-medium">{startAdornment}</div>
                )}
                <input
                    className="grow"
                    {...inputProps}
                    {...(register && register(id, registerOptions))}
                />
            </label>
        </div>
    );
};
