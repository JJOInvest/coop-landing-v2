'use client';

import { useTranslation } from 'react-i18next';

export const I18nClientComponentExample = () => {
    const { t } = useTranslation();

    return <div>{t('hello')}</div>;
};
