import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { SwitcherLink } from '@/app/[lng]/(auth)/components/switcher-link';

export const Switcher = () => {
    const { t } = useTranslation();
    const pathname = usePathname();

    const getLastPathSegment = (path: string) => {
        const segments = path.split('/').filter(Boolean);
        return segments[segments.length - 1];
    };

    const lastSegment = getLastPathSegment(pathname);

    return (
        <div className="h-16 border-grey-70 border-b-[1px] flex">
            <SwitcherLink href="/register" isActivate={lastSegment === 'register'}>
                {t('auth.form.sign-up')}
            </SwitcherLink>
            <SwitcherLink href="/login" isActivate={lastSegment === 'login'}>
                {t('auth.form.sign-in')}
            </SwitcherLink>
        </div>
    );
};
