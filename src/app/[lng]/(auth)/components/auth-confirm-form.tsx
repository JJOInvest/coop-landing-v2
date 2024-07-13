'use client';

import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { authApi } from '@/api/auth';
import { Stepper } from '@/app/[lng]/(auth)/components/stepper';
import {
    useAuthStore,
    usePinCodeStore,
    useStepStore,
} from '@/app/[lng]/(auth)/store/use-auth-store';
import { Button } from '@/components/button';

const OPT_LENGTH = 4;
//todo костыль в случае отсутствия env на тесте, попрвить
const DASHBOARD_LINK = process.env.NEXT_PUBLIC_DOMAIN || 'https://dashboard-test.jjo.finance/';

export const AuthConfirm = () => {
    const { t } = useTranslation();

    const textBase = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const stepData = useStepStore((state) => state.data);
    const setStepData = useStepStore((state) => state.setData);
    const authData = useAuthStore((state) => state.data);
    const pinCodeData = usePinCodeStore((state) => state.data);
    const setPinCodeData = usePinCodeStore((state) => state.setData);

    const { mutateAsync: onLogin } = useMutation({
        mutationFn: async () =>
            await authApi.loginConfirm({
                email: authData.email,
                password: authData.password,
                code: pinCodeData.code,
            }),
        onSuccess: (data) => {
            console.log('accessToken', data.accessToken);
            setCookie('accessToken', data.accessToken);
            router.push(DASHBOARD_LINK as string);
        },
    });

    const { mutateAsync: onRegister } = useMutation({
        mutationFn: async () =>
            await authApi.registerConfirm({
                email: authData.email,
                code: pinCodeData.code,
            }),
        onSuccess: (data) => {
            setStepData({ step: 'register-finish' });
        },
    });

    const { mutateAsync: onReset } = useMutation({
        mutationFn: async () =>
            await authApi.resetPasswordConfirm({
                email: authData.email,
                code: pinCodeData.code,
            }),
        onSuccess: (data) => {
            setStepData({ step: 'reset-finish' });
        },
    });

    const focusNext: ChangeEventHandler<HTMLInputElement> = (event) => {
        const inputs = [...textBase.current!.childNodes] as HTMLInputElement[];
        const currentIndex = inputs.indexOf(event.target);

        if (event.target.value.length === 0) return;

        inputs.forEach((input) => {
            if (input.value.length > 1) {
                input.value = input.value[input.value.length - 1];
            }
        });

        if (currentIndex !== OPT_LENGTH - 1) {
            (event.target.nextSibling! as HTMLInputElement).focus();
        } else {
            inputs[0].focus();
        }

        const values = inputs.map((child) => child.value);

        setPinCodeData({ code: values.join('') });
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        if (stepData.step === 'login-confirm') {
            await onLogin();
        } else if (stepData.step === 'register-confirm') {
            await onRegister();
        } else if (stepData.step === 'reset-confirm') {
            await onReset();
        }
    };

    const isValid = pinCodeData.code.length === OPT_LENGTH;

    if (
        stepData.step !== 'login-confirm' &&
        stepData.step !== 'register-confirm' &&
        stepData.step !== 'reset-confirm'
    ) {
        return null;
    }

    return (
        <>
            {stepData.step === 'register-confirm' && <Stepper activeIndex={2} />}
            <form
                className="px-8 lg:px-16 py-6 lg:py-10 w-full flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className="text-[16px]/normal flex flex-col gap-1 mx-auto">
                    <p>{t('auth.form.new-code')}</p>
                    <p className="text-blue-100">{authData.email}</p>
                </div>

                <div className="flex items-center gap-5 mx-auto max-w-full mt-6" ref={textBase}>
                    {new Array(OPT_LENGTH).fill(null).map((_, index) => {
                        return (
                            <input
                                key={index}
                                type="number"
                                onChange={focusNext}
                                className="border-[1px] rounded-xl border-grey-60 px-5 w-min max-w-16 py-6 text-[32px] text-center"
                            />
                        );
                    })}
                </div>

                <Button className="mt-10" block disabled={!isValid} type="submit">
                    {t('auth.form.button')}
                </Button>
            </form>
        </>
    );
};
