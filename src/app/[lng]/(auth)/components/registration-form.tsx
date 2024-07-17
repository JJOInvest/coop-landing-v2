'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { authApi } from '@/api/auth';
import { PasswordNote } from '@/app/[lng]/(auth)/components/password-note';
import { Stepper } from '@/app/[lng]/(auth)/components/stepper';
import { Switcher } from '@/app/[lng]/(auth)/components/switcher';
import { useAuthStore, useStepStore } from '@/app/[lng]/(auth)/store/use-auth-store';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
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

const schema = z.object({
    email: z.string().email('email_must_be_valid').min(1, 'enter_email'),
    password: zodPasswordSchema,
    referralCode: z.string().optional(),
    termsAccepted: z.boolean().refine((b) => b, { message: 'accept_to_continue' }),
    subscribed: z.boolean(),
});

type FormData = z.infer<typeof schema>;

export const RegistrationForm = () => {
    const { t } = useTranslation();

    const setAuthData = useAuthStore((state) => state.setData);
    const stepData = useStepStore((state) => state.data);
    const setStepData = useStepStore((state) => state.setData);

    const { register, handleSubmit, formState, watch } = useForm<FormData>({
        reValidateMode: 'onChange',
        resolver: zodResolver(schema),
        defaultValues: {
            subscribed: true,
        },
    });

    const password = watch('password', '');

    const { mutateAsync } = useMutation({
        mutationFn: async (data: FormData) =>
            await authApi.register({
                email: data.email,
                password: data.password,
                referralCode: data.referralCode,
                isSubscribed: data.subscribed,
            }),
        onError: () => {
            console.log('Error during login');
        },
    });

    const onSubmit = async (data: FormData) => {
        await mutateAsync(data);

        setAuthData(data);
        setStepData({ step: 'register-confirm' });
    };

    if (stepData.step === 'register-confirm' || stepData.step === 'register-finish') {
        return null;
    }

    return (
        <>
            <Switcher />
            <Stepper activeIndex={1} />
            <div className="text-center font-semibold text-xl">{t('create_new_account')}</div>
            <form className="auth-form w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5">
                    <TextInput
                        id="email"
                        register={register}
                        labels={{
                            main: t('email_address'),
                        }}
                    />
                    <TextInput
                        id="password"
                        type="password"
                        register={register}
                        labels={{
                            main: t('password'),
                        }}
                    />
                    <PasswordNote password={password} />
                    <TextInput
                        id="referralCode"
                        register={register}
                        labels={{
                            main: t('referral_code_optional'),
                        }}
                    />
                </div>

                <div className="my-5">
                    <Checkbox register={register} id="subscribed" label={t('receive_updates')} />

                    <Checkbox register={register} id="termsAccepted" label={t('accept_terms')} />
                </div>

                <Button block disabled={!formState.isValid} type="submit">
                    {t('registration')}
                </Button>
            </form>
        </>
    );
};
