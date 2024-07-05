'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { useStepStore } from '@/app/(auth)/store/use-auth-store';
import EmailIcon from '@/assets/password/changed.svg';
import { Button } from '@/components/button';

export const ResetDone = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const stepData = useStepStore((state) => state.data);

    const handleClick = () => router.push('/login');

    if (stepData.step !== 'reset-done') {
        return null;
    }

    return (
        <div className="px-8 lg:px-16 py-6 lg:py-10 w-full flex flex-col gap-6 items-center">
            <h3 className="font-semibold text-xl text-center">{t('auth.form.password-changed')}</h3>

            <Image src={EmailIcon} alt="email" />

            <p className="max-w-72 text-[15px] font-light text-center">
                {t('auth.form.can-login')}
            </p>

            <Button className="mt-4" block onClick={handleClick} type="button">
                {t('auth.form.button')}
            </Button>
        </div>
    );
};
