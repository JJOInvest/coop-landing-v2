'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { authApi } from '@/api/auth';
import { PasswordNote } from '@/app/[lng]/(auth)/components/password-note';
import {
    useAuthStore,
    usePinCodeStore,
    useStepStore,
} from '@/app/[lng]/(auth)/store/use-auth-store';
import { Button } from '@/components/button';
import { TextInput } from '@/components/text-input';

export const zodPasswordSchema = z
    .string()
    .refine((value) => value.length >= 12, {
        message: 'password_is_too_short_must_be_at_least_12_characters_long',
    })
    .refine((value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/.test(value), {
        message: 'must_contain_at_least_one_uppercase',
    })
    .refine((value) => /^(?=.*[!@#$%^&*()_+\-={}:|";'?,<>`~±§]).+$/.test(value), {
        message: 'special_character',
    });

const schema = z
    .object({
        password: zodPasswordSchema,
        passwordConfirm: z.string(),
    })
    .superRefine(({ passwordConfirm, password }, ctx) => {
        if (passwordConfirm !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'The passwords did not match',
                path: ['confirmPassword'],
            });
        }
    });

type FormData = z.infer<typeof schema>;

export const ResetFinishForm = () => {
    const { t } = useTranslation();

    const authData = useAuthStore((state) => state.data);
    const stepData = useStepStore((state) => state.data);
    const pinCodeData = usePinCodeStore((state) => state.data);

    const { register, handleSubmit, formState, watch } = useForm<FormData>({
        reValidateMode: 'onChange',
        resolver: zodResolver(schema),
    });

    const password = watch('password', '');

    const { mutateAsync } = useMutation({
        mutationFn: async (data: FormData) =>
            await authApi.resetPasswordFinish({
                password: data.password,
                code: pinCodeData.code,
                email: authData.email,
            }),
        onError: () => {
            console.log('Error during login');
        },
    });

    const onSubmit = async (data: FormData) => {
        await mutateAsync(data);
    };

    if (stepData.step !== 'reset-finish') {
        return null;
    }

    return (
        <>
            <form
                className="px-8 lg:px-16 py-6 lg:py-10 w-full flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h3 className="font-semibold text-xl text-center">{t('create_password')}</h3>

                <div className="flex flex-col gap-5 mt-6">
                    <TextInput
                        id="password"
                        register={register}
                        labels={{
                            main: t('new_password'),
                        }}
                    />
                    <PasswordNote password={password} />
                    <TextInput
                        id="passwordConfirm"
                        register={register}
                        labels={{
                            main: t('new_password_again'),
                        }}
                    />
                </div>

                <Button className="mt-10" block disabled={!formState.isValid} type="submit">
                    {t('create_password')}
                </Button>
            </form>
        </>
    );
};
