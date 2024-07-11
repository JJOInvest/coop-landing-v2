'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { authApi } from '@/api/auth';
import { Stepper } from '@/app/[lng]/(auth)/components/stepper';
import { Switcher } from '@/app/[lng]/(auth)/components/switcher';
import {
    useAuthStore,
    usePinCodeStore,
    useStepStore,
} from '@/app/[lng]/(auth)/store/use-auth-store';
import { Button } from '@/components/button';
import { TextInput } from '@/components/text-input';

const schema = z.object({
    name: z.string().min(1),
    surname: z.string().min(1),
    countryCodeIso: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

export const RegistrationFinishForm = () => {
    const { t } = useTranslation();

    const authData = useAuthStore((state) => state.data);
    const stepData = useStepStore((state) => state.data);
    const pinCodeData = usePinCodeStore((state) => state.data);

    const { register, handleSubmit, formState, watch } = useForm<FormData>({
        reValidateMode: 'onChange',
        resolver: zodResolver(schema),
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (data: FormData) =>
            await authApi.registerFinish({
                email: authData.email,
                name: data.name,
                surname: data.surname,
                code: pinCodeData.code,
                countryCodeIso: data.countryCodeIso,
            }),
        onError: () => {
            console.log('Error during login');
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
            <form
                className="px-8 lg:px-16 py-6 lg:py-10 w-full flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-5">
                    <TextInput
                        id="name"
                        register={register}
                        labels={{
                            main: t('auth.form.name'),
                        }}
                    />
                    <TextInput
                        id="surname"
                        register={register}
                        labels={{
                            main: t('auth.form.surname'),
                        }}
                    />
                    <TextInput
                        id="countryCodeIso"
                        register={register}
                        labels={{
                            main: t('auth.form.country'),
                        }}
                    />
                </div>
                <Button className="mt-10" block disabled={!formState.isValid} type="submit">
                    {t('auth.form.register-finish')}
                </Button>
            </form>
        </>
    );
};
