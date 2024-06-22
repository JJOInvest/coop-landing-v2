import { getServerTranslations } from '@/i18n/server';

export const LoginButton = async () => {
    const { t } = await getServerTranslations();
    return (
        <button className={'btn px-14 py-3 text-[16px]/[100%] text-white bg-black'}>
            {t('layout.header.button')}
        </button>
    );
};
