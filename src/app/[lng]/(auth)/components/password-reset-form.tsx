'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { authApi, ResetPasswordParams } from '@/api/auth';
import { useAuthStore, useStepStore } from '@/app/[lng]/(auth)/store/use-auth-store';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import PasswordIcon from '@/assets/password/icon.svg';
import { Button } from '@/components/button';
import { TextInput } from '@/components/text-input';

const schema = z.object({
    email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export const PasswordResetForm = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { register, handleSubmit, formState } = useForm<FormData>({
        reValidateMode: 'onChange',
        resolver: zodResolver(schema),
    });

    const setAuthData = useAuthStore((state) => state.setData);
    const stepData = useStepStore((state) => state.data);
    const setStepData = useStepStore((state) => state.setData);

    const goToLogin = () => router.push('/login');

    const { mutateAsync } = useMutation({
        mutationFn: async (data: ResetPasswordParams) =>
            await authApi.resetPassword({
                email: data.email,
            }),
        onError: () => {
            console.log('Error during password reset');
        },
    });

    const onSubmit = async (data: FormData) => {
        await mutateAsync(data);

        setAuthData(data);
        setStepData({ step: 'reset-confirm' });
    };

    if (
        stepData.step === 'reset-confirm' ||
        stepData.step === 'reset-finish' ||
        stepData.step === 'reset-done'
    ) {
        return null;
    }

    return (
        <form
            className="mx-16 my-8 flex flex-col gap-5 items-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex items-center w-full">
                <button
                    className="bg-neutral-100 rounded-full h-8 w-8 flex items-center justify-center"
                    onClick={goToLogin}
                >
                    <Image src={ArrowDown} alt="arrow down" className="invert rotate-90 h-4" />
                </button>

                <div className="mx-auto text-xl text-black-100 font-medium -translate-x-4">
                    {t('forgot_password')}
                </div>
            </div>

            <Image src={PasswordIcon} alt="password" className="mt-3" />

            <div className="w-full">
                <TextInput
                    id="email"
                    register={register}
                    labels={{
                        main: t('email_address'),
                    }}
                />
            </div>

            <Button className="mt-5 lg:h-[52px]" block disabled={!formState.isValid} type="submit">
                {t('continue')}
            </Button>
        </form>
    );
};
