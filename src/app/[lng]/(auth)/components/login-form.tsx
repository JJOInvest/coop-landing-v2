'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { authApi, BaseUserParams } from '@/api/auth';
import { Switcher } from '@/app/[lng]/(auth)/components/switcher';
import { useAuthStore, useStepStore } from '@/app/[lng]/(auth)/store/use-auth-store';
import { Button } from '@/components/button';
import { TextInput } from '@/components/text-input';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

export const LoginForm = () => {
    const { t } = useTranslation();

    const setAuthData = useAuthStore((state) => state.setData);
    const stepData = useStepStore((state) => state.data);
    const setStepData = useStepStore((state) => state.setData);

    const { register, handleSubmit, formState } = useForm<FormData>({
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
        },
    });

    const onSubmit = async (data: FormData) => {
        await mutateAsync(data);
        // await authApi.login(data);

        setAuthData(data);
        setStepData({ step: 'login-confirm' });
    };

    if (stepData.step === 'login-confirm') {
        return null;
    }

    return (
        <>
            <Switcher />
            <form
                className="px-8 lg:px-16 py-6 lg:py-10 w-full flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-5">
                    <TextInput
                        id="email"
                        register={register}
                        labels={{
                            main: t('auth.form.email'),
                        }}
                    />
                    <TextInput
                        id="password"
                        register={register}
                        labels={{
                            main: t('auth.form.password'),
                        }}
                    />
                </div>

                <Button className="mt-10" block disabled={!formState.isValid} type="submit">
                    {t('auth.form.button')}
                </Button>

                <Link
                    href="/password-reset"
                    className="mt-5 mx-auto text-grey-100 text-sm font-light"
                >
                    {t('auth.form.forgot-password')}
                </Link>
            </form>
        </>
    );
};
