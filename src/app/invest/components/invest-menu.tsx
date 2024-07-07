import cn from 'classnames';
import Link from 'next/link';

import { getArticleById } from '@/api/article';
import { investPagesIds } from '@/app/invest/constants';

export interface Item {
    id: number;
    text: string;
}

interface Props {
    activeArticleId: number;
}

export async function InvestMenu({ activeArticleId }: Props) {
    const items = await Promise.all(
        investPagesIds.map(async (id) => {
            const article = await getArticleById(id);
            return {
                id,
                text: article.title,
            };
        }),
    );

    return (
        <div className="py-12 text-white flex flex-col gap-4 pr-8 bg-invest">
            {items.map((item) => (
                <Link
                    href={`/invest/${item.id}`}
                    key={item.id}
                    className={cn(
                        'text-[16px]/normal flex items-center transition-all duration-150 max-w-full',
                        {
                            'gap-8': item.id === activeArticleId,
                            'opacity-60 gap-12': item.id !== activeArticleId,
                        },
                    )}
                >
                    <div
                        className={cn('w-2 h-2 rounded bg-white', {
                            '-translate-x-1/2': item.id === activeArticleId,
                            '-translate-x-full': item.id !== activeArticleId,
                        })}
                    />

                    {item.text}
                </Link>
            ))}
        </div>
    );
}
