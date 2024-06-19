import React, { InputHTMLAttributes } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  label: string;
  registerOptions?: RegisterOptions;
  className?: string;
}

export const TextField = ({
  className,
  register,
  label,
  registerOptions,
  ...inputProps
}: Props) => {
  return <input {...inputProps} {...register(label, registerOptions)} />;
};
