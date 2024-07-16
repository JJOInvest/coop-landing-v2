'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { authApi } from '@/api/auth';
import { COUNTRIES_LIST } from '@/app/[lng]/(auth)/components/constants';
import { Stepper } from '@/app/[lng]/(auth)/components/stepper';
import { Switcher } from '@/app/[lng]/(auth)/components/switcher';
import {
    useAuthStore,
    usePinCodeStore,
    useStepStore,
} from '@/app/[lng]/(auth)/store/use-auth-store';
import { Button } from '@/components/button';
import { TextInput } from '@/components/text-input';

const DASHBOARD_LINK = process.env.NEXT_PUBLIC_DOMAIN;

const schema = z.object({
    name: z.string().min(1),
    surname: z.string().min(1),
    countryCodeIso: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const countries = [...COUNTRIES_LIST].sort((a, b) => a.titleEn.localeCompare(b.titleEn));

export const RegistrationFinishForm = () => {
    const { t, i18n } = useTranslation();

    const authData = useAuthStore((state) => state.data);
    const stepData = useStepStore((state) => state.data);
    const pinCodeData = usePinCodeStore((state) => state.data);

    const { register, handleSubmit, formState, watch } = useForm<FormData>({
        reValidateMode: 'onChange',
        resolver: zodResolver(schema),
    });

    const router = useRouter();

    const { mutateAsync } = useMutation({
        mutationFn: async (data: FormData) =>
            await authApi.registerFinish({
                email: authData.email,
                name: data.name,
                surname: data.surname,
                code: pinCodeData.code,
                countryCodeIso: data.countryCodeIso,
                phone: '',
            }),
        onError: () => {
            console.log('Error during login');
        },
        onSuccess: (data) => {
            setCookie('accessToken', data.accessToken, {
                domain: '.jjo.finance',
            });
            if (DASHBOARD_LINK) {
                router.push(DASHBOARD_LINK as string);
            }
        },
    });

    const onSubmit = async (data: FormData) => {
        await mutateAsync(data);
    };

    if (stepData.step !== 'register-finish') {
        return null;
    }

    return (
        <>
            <Switcher />
            <Stepper activeIndex={3} />
            <form className="auth-form w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5">
                    <TextInput
                        id="name"
                        register={register}
                        labels={{
                            main: t('first_name'),
                        }}
                    />
                    <TextInput
                        id="surname"
                        register={register}
                        labels={{
                            main: t('last_name'),
                        }}
                    />
                    <div>
                        <div className="text-brand-400/80 text-sm flex justify-between">
                            <span>{t('country_of_residence')}</span>
                        </div>
                        <select
                            className="select select-bordered w-full max-w-[560px] mt-2 h-[52px]"
                            {...register('countryCodeIso')}
                        >
                            <option selected value="" disabled />
                            {countries.map((item) => (
                                <option key={item.titleEn} value={item.codeIso}>
                                    {item.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <Button className="mt-10" block disabled={!formState.isValid} type="submit">
                    {t('complete_registration')}
                </Button>
            </form>
        </>
    );
};
