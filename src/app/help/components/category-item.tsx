'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { SectionWithTopArticles } from '@/api/help';
import ArrowDown from '@/assets/icons/arrow-down.svg';

interface Props extends SectionWithTopArticles {
    children: ReactNode;
}

export const CategoryItem = ({ id, name, topArticles, children }: Props) => {
    const searchParams = useSearchParams();
    const params = useParams();
    const [isOpened, setIsOpened] = useState(true);
    const [isOpenedArticle, setIsOpenedArticle] = useState(false);
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
                    {topArticles.map((question, index) => (
                        <div className="flex justify-between items-center border-t-[1px] border-black/10 lg:border-0">
                            <Link
                                // href={`/help?questionId=${question.id}`}
                                href={`/help/${question.id}`}
                                key={question.id}
                                className={cn('font-light text-sm py-4 lg:py-0', {
                                    'text-black': questionId === question.id,
                                    'text-primary-neutral': questionId !== question.id,
                                })}
                            >
                                {question.name}
                                {question.id.toString() === params.id && children}
                            </Link>
                            <div className="relative border-black/5 rounded-full border-[1px] h-6 min-w-6 lg:hidden self-start mt-4">
                                <span className="absolute w-2.5 h-[1px] bg-black inset-0 m-auto" />
                                <span
                                    className={cn(
                                        'absolute w-2.5 h-[1px] bg-black inset-0 m-auto',
                                        {
                                            'rotate-90': question.id.toString() !== params.id,
                                        },
                                    )}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
