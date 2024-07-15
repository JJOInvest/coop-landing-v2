'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { authApi, BaseUserParams } from '@/api/auth';
import { Switcher } from '@/app/[lng]/(auth)/components/switcher';
import { useAuthStore, useStepStore } from '@/app/[lng]/(auth)/store/use-auth-store';
import { Button } from '@/components/button';
import { TextInput } from '@/components/text-input';

const schema = z.object({
    email: z.string().email('email_must_be_valid').nonempty('enter_email'),
    password: z.string().nonempty('password_is_required'),
});

type FormData = z.infer<typeof schema>;

export const LoginForm = () => {
    const { t } = useTranslation();
    const [error, setError] = useState<string | null>(null);

    const step = useStepStore((state) => state.data.step);
    const setAuthData = useAuthStore((state) => state.setData);
    const stepData = useStepStore((state) => state.data);
    const setStepData = useStepStore((state) => state.setData);

    useEffect(() => {
        if (step) {
            setStepData({ step: null });
        }
    }, [setStepData]);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: zodResolver(schema),
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (data: BaseUserParams) =>
            await authApi.login({
                email: data.email,
                password: data.password,
            }),
        onError: () => {
            console.log('Error during login');
            setError(t('wrong_username_and_or_password'));
        },
    });

    const onSubmit = async (data: FormData) => {
        await mutateAsync(data);

        setAuthData(data);
        setStepData({ step: 'login-confirm' });
    };

    if (stepData.step === 'login-confirm') {
        return null;
    }

    return (
        <>
            <Switcher />
            <form className="auth-form w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                id="email"
                                {...field}
                                labels={{
                                    main: t('email_address'),
                                }}
                                error={errors.email?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                id="password"
                                {...field}
                                type="password"
                                labels={{
                                    main: t('password'),
                                }}
                                error={errors.password?.message}
                            />
                        )}
                    />
                </div>
                {error && (
                    <div className="mt-4 rounded-md bg-red-100 text-center text-red-600 text-sm leading-tight p-2">
                        {error}
                    </div>
                )}

                <Button className="mt-10 font-semibold" block disabled={!isValid} type="submit">
                    {t('login')}
                </Button>

                <Link
                    href="/password-reset"
                    className="mt-5 mx-auto text-grey-100 text-sm font-light"
                >
                    {t('forgot_password')}
                </Link>
            </form>
        </>
    );
};
