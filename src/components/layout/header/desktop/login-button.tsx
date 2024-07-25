import Link from 'next/link';

import { getServerTranslations } from '@/i18n/server';

export async function LoginButton() {
    const { t, i18n } = await getServerTranslations();

    return (
        <Link
            href={`/${i18n.language}/login`}
            className="flex items-center bg-black px-14 h-10 text-[16px]/[100%]
             text-white hover:bg-transparent hover:text-black
             transition-all duration-300 border-black border-[1px] rounded-lg"
        >
            {t('login')}
        </Link>
    );
}
