import cn from 'classnames';
import Link from 'next/link';

import { investPages } from '@/app/[lng]/invest/constants';
import { getServerTranslations } from '@/i18n/server';

interface Props {
    id: string;
}

export async function InvestMenu({ id }: Props) {
    const articleId = parseInt(id as any, 10);
    const { t, i18n } = await getServerTranslations();

    return (
        <div className="hidden py-12 text-white lg:flex flex-col gap-4 pr-8 bg-invest">
            {investPages.map((item) => (
                <Link
                    href={`/${i18n.language}/invest/${item.id}`}
                    key={item.id}
                    className={cn(
                        'text-[16px]/normal flex items-center transition-all duration-150 max-w-full',
                        {
                            'gap-8': item.id === articleId,
                            'opacity-60 gap-12': item.id !== articleId,
                        },
                    )}
                >
                    <div
                        className={cn('w-2 h-2 rounded bg-white', {
                            '-translate-x-1/2': item.id === articleId,
                            '-translate-x-full': item.id !== articleId,
                        })}
                    />

                    {t(item.title)}
                </Link>
            ))}
        </div>
    );
}
