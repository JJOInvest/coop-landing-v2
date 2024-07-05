import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { SwitcherLink } from '@/app/(auth)/components/switcher-link';

export const Switcher = () => {
    const { t } = useTranslation();

    const pathname = usePathname();

    return (
        <div className="h-16 border-grey-70 border-b-[1px] flex">
            <SwitcherLink href="/register" isActivate={pathname === '/register'}>
                {t('auth.form.sign-up')}
            </SwitcherLink>
            <SwitcherLink href="/login" isActivate={pathname === '/login'}>
                {t('auth.form.sign-in')}
            </SwitcherLink>
        </div>
    );
};
