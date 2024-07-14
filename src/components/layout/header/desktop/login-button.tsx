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
            className="bg-black px-14 h-10 text-[16px]/[100%] text-white hover:bg-transparent hover:text-black hover transition-all duration-300 border-black border-[1px] rounded-lg"
            onClick={handleClick}
        >
            {t('login')}
        </button>
    );
};
