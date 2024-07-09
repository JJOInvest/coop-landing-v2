'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Category } from '@/api/help';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export type Props = Category;

export const CategoryItem = ({ id, name, questions }: Props) => {
    const searchParams = useSearchParams();
    const [isOpened, setIsOpened] = useState(false);
    const toggleOpened = () => setIsOpened((isOpened) => !isOpened);

    const questionId = Number(searchParams.get('questionId'));

    return (
        <div className="flex flex-col gap-6">
            <button
                className="flex items-center justify-between cursor-pointer uppercase"
                onClick={toggleOpened}
            >
                <h5>{name}</h5>
                <Image
                    src={ArrowDown}
                    alt=""
                    className={cn('invert duration-300', {
                        'rotate-180': isOpened,
                    })}
                />
            </button>
            {isOpened && (
                <div className="pl-2 border-violet-500 border-l-2 flex flex-col gap-4">
                    {questions.map((question) => (
                        <Link
                            href={`/help?questionId=${question.id}`}
                            key={question.id}
                            className={cn('font-light text-sm', {
                                'text-black': questionId === question.id,
                                'text-primary-neutral': questionId !== question.id,
                            })}
                        >
                            {question.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
