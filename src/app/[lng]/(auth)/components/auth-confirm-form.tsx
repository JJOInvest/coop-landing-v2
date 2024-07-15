'use client';

import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { authApi } from '@/api/auth';
import { Countdown } from '@/app/[lng]/(auth)/components/countdown';
import { Stepper } from '@/app/[lng]/(auth)/components/stepper';
import {
    useAuthStore,
    usePinCodeStore,
    useStepStore,
} from '@/app/[lng]/(auth)/store/use-auth-store';
import { Button } from '@/components/button';

const OPT_LENGTH = 4;

const DASHBOARD_LINK = process.env.NEXT_PUBLIC_DOMAIN;

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
            setCookie('accessToken', data.accessToken, {
                domain: '.jjo.finance',
            });
            if (DASHBOARD_LINK) {
                router.push(DASHBOARD_LINK as string);
            }
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
                <div className="text-[16px]/normal flex flex-col gap-1 mx-auto text-center">
                    <div className="text-xl font-semibold mb-6">{t('confirm_email')}</div>
                    <div className="text-black-80">{t('enter_code')}</div>
                    <div className="text-blue-200">{authData.email}</div>
                </div>

                <div
                    className="flex items-center gap-2 lg:gap-5 mx-auto max-w-full mt-6"
                    ref={textBase}
                >
                    {new Array(OPT_LENGTH).fill(null).map((_, index) => {
                        return (
                            <input
                                key={index}
                                type="number"
                                onChange={focusNext}
                                className="
                                    input input-bordered
                                    border rounded-xl border-grey-60 flex-1
                                    text-[32px] leading-none max-w-[60px] h-20
                                    focus-visible:border-blue-200 px-5
                                 "
                            />
                        );
                    })}
                </div>

                <Button className="mt-10" small block disabled={!isValid} type="submit">
                    {t(stepData.step === 'register-confirm' ? 'continue' : 'login')}
                </Button>
                <div className="text-center mt-5 text-15 text-grey-100 leading-5">
                    {t('resend_code')} <Countdown />
                </div>
            </form>
        </>
    );
};
