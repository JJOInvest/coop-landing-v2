import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { SwitcherLink } from '@/app/[lng]/(auth)/components/switcher-link';

export const Switcher = () => {
    const { t, i18n } = useTranslation();
    const pathname = usePathname();

    const getLastPathSegment = (path: string) => {
        const segments = path.split('/').filter(Boolean);
        return segments[segments.length - 1];
    };

    const lastSegment = getLastPathSegment(pathname);

    return (
        <div className="h-16 border-grey-70 border-b-[1px] flex">
            <SwitcherLink
                href={`/${i18n.language}/register`}
                isActivate={lastSegment === 'register'}
            >
                {t('registration')}
            </SwitcherLink>
            <SwitcherLink href={`/${i18n.language}/login`} isActivate={lastSegment === 'login'}>
                {t('login')}
            </SwitcherLink>
        </div>
    );
};
