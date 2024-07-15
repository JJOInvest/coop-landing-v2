import { InputHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    register?: UseFormRegister<any>;
    registerOptions?: RegisterOptions;
    label?: string;
}

export const Checkbox = ({ id, registerOptions, register, label, ...inputProps }: Props) => {
    return (
        <div className="my-2">
            <label className="cursor-pointer flex items-start gap-2.5">
                <input
                    type="checkbox"
                    className="mt-1 checkbox checkbox-xs [--chkfg:white] [--chkbg:#4E75F6] checked:shadow-checkbox rounded"
                    {...inputProps}
                    {...(register && register(id, registerOptions))}
                />
                <div className="text-black-100 text-sm">{label}</div>
            </label>
        </div>
    );
};
