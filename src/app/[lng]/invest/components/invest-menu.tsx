'use client';

import cn from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { investPages } from '@/app/[lng]/invest/constants';

export function InvestMenu() {
    const params = useParams();

    const articleId = parseInt(params.id as any, 10);

    return (
        <div className="py-12 text-white flex flex-col gap-4 pr-8 bg-invest">
            {investPages.map((item) => (
                <Link
                    href={`/invest/${item.id}`}
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

                    {item.title}
                </Link>
            ))}
        </div>
    );
}
