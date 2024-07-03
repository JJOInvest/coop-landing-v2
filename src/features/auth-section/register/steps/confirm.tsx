import { useMutation } from '@tanstack/react-query';
import { ChangeEventHandler, FormEventHandler, useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { confirmLogin } from '@/api/auth';
import { Button } from '@/components/button';
import { authContext } from '@/features/auth-section/auth-context';

export const Confirm = () => {
    const { t } = useTranslation();
    const { email, password, nextStep } = useContext(authContext);

    const otpLength = 4;
    const [otp, setOtp] = useState<string>('');
    const textBase = useRef<HTMLDivElement>(null);

    const { mutateAsync } = useMutation({
        mutationFn: async () =>
            await confirmLogin({
                email: email!,
                password: password!,
                code: otp,
            }),
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

        if (currentIndex !== otpLength - 1) {
            (event.target.nextSibling! as HTMLInputElement).focus();
        } else {
            inputs[0].focus();
        }

        const values = inputs.map((child) => child.value);

        setOtp(values.join(''));
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const res = await mutateAsync();
        const accessToken = res.data.accessToken;

        nextStep();
    };

    const isValid = otp.length === otpLength;

    return (
        <form
            className={'px-8 lg:px-16 py-6 lg:py-10 w-full flex flex-col'}
            onSubmit={handleSubmit}
        >
            <div className={'text-[16px]/normal flex flex-col gap-1 mx-auto'}>
                <p>{t('auth.form.new-code')}</p>
                <p className={'text-blue-100'}>{email}</p>
            </div>

            <div className={'flex items-center gap-5 mx-auto max-w-full mt-6'} ref={textBase}>
                {new Array(otpLength).fill(null).map((_, index) => {
                    return (
                        <input
                            key={index}
                            type={'number'}
                            onChange={focusNext}
                            className={
                                'border-[1px] rounded-xl border-grey-60 px-5 w-min max-w-16 py-6 text-[32px] text-center'
                            }
                        />
                    );
                })}
            </div>

            <Button className={'mt-10'} block disabled={!isValid} type={'submit'}>
                {t('auth.form.button')}
            </Button>
        </form>
    );
};
