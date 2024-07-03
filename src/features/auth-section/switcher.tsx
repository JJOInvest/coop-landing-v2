'use client';

import cn from 'classnames';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { authContext } from '@/features/auth-section/auth-context';

export const Switcher = () => {
    const { t } = useTranslation();
    const { type, setType } = useContext(authContext);

    return (
        <div className={'h-16 border-grey-70 border-b-[1px] flex'}>
            <button
                className={cn('flex-grow w-1/2 h-full font-semibold text-[16px]', {
                    'text-white bg-black': type === 'register',
                    'text-grey-100': type !== 'register',
                })}
                onClick={() => setType('register')}
            >
                {t('auth.form.sign-up')}
            </button>
            <button
                className={cn('flex-grow w-1/2 h-full font-semibold text-[16px]', {
                    'text-white bg-black': type === 'login',
                    'text-grey-100': type !== 'login',
                })}
                onClick={() => setType('login')}
            >
                {t('auth.form.sign-in')}
            </button>
        </div>
    );
};
