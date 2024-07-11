'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { SectionWithTopArticles } from '@/api/help';
import { ArticleItem } from '@/app/[lng]/help/components/article-item';
import ArrowDown from '@/assets/icons/arrow-down.svg';

interface Props extends SectionWithTopArticles {
    children: ReactNode;
}

export const CategoryItem = ({ id, name, topArticles, children }: Props) => {
    const searchParams = useSearchParams();
    const params = useParams();
    const [isOpened, setIsOpened] = useState(true);
    const toggleOpened = () => setIsOpened((isOpened) => !isOpened);

    const questionId = Number(searchParams.get('questionId'));

    return (
        <div className="flex flex-col gap-6">
            <button
                className="flex items-center justify-between cursor-pointer uppercase"
                onClick={toggleOpened}
            >
                <h5 className="text-[28px]/tight font-semibold lg:text-base">{name}</h5>
                <Image
                    src={ArrowDown}
                    alt=""
                    className={cn('invert duration-300', {
                        'rotate-180': isOpened,
                    })}
                />
            </button>
            {isOpened && (
                <div className="pl-2 lg:border-violet-500 lg:border-l-2 flex flex-col lg:gap-4">
                    {topArticles.map((article, index) => (
                        <ArticleItem
                            article={article}
                            articleIdUrl={params.id as string}
                            questionId={questionId}
                            key={article.id}
                        >
                            {children}
                        </ArticleItem>
                    ))}
                </div>
            )}
        </div>
    );
};
