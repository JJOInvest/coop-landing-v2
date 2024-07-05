'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export const LoginButton = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const handleClick = () => {
        router.push('/login');
    };

    return (
        <button
            className="btn px-14 py-3 text-[16px]/[100%] text-white bg-black hover:bg-black hover"
            onClick={handleClick}
        >
            {t('layout.header.button')}
        </button>
    );
};
