'use client';

import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import { Article } from '@/api/help';
import { QuestionBody } from '@/app/help/components/question-body';
interface Props {
    topArticles?: Article[];
    name: string;
    id: number;
}

export const MobileQuestion = ({ name, id, topArticles }: Props) => {
    const [isOpened, setIsOpened] = useState(false);
    const article = topArticles?.find((topArticle) => topArticle.id === id);
    const toggleOpened = () => setIsOpened((isOpened) => !isOpened);
    return (
        <div className="border-b-[1px] border-black/10 py-4">
            <div className="flex gap-8 justify-between items-center" onClick={toggleOpened}>
                <h5 className="flex-grow text-[16px]/normal">{name}</h5>
                <div className="relative border-black/5 rounded-full border-[1px] min-h-6 min-w-6">
                    <span className="absolute w-2.5 h-[1px] bg-black inset-0 m-auto" />
                    <span
                        className={cn('absolute w-2.5 h-[1px] bg-black inset-0 m-auto', {
                            'rotate-90': !isOpened,
                        })}
                    />
                </div>
            </div>

            {isOpened && (
                <p className="text-black/50 text-[16px]/snug font-light mt-4">
                    <QuestionBody article={article as Article} />
                </p>
            )}
        </div>
    );
};
