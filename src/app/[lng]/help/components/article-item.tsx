import cn from 'classnames';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface Props {
    article: {
        id: number;
        name: string;
    };
    questionId: number;
    children: ReactNode;
    articleIdUrl: string;
}

export const ArticleItem = ({ article, children, questionId, articleIdUrl }: Props) => {
    const [isOpened, setIsOpened] = useState(true);
    const toggleOpened = () => setIsOpened((isOpened) => !isOpened);

    return (
        <Link
            className="flex justify-between items-center border-t-[1px] border-black/10 lg:border-0"
            key={article.id}
            href={`/help/${article.id}`}
            onClick={toggleOpened}
        >
            <div
                className={cn('font-light text-sm py-4 lg:py-0', {
                    'text-black': questionId === article.id,
                    'text-primary-neutral': questionId !== article.id,
                })}
            >
                {article.name}
                {article.id.toString() === articleIdUrl && isOpened && children}
            </div>
            <div className="relative border-black/5 rounded-full border-[1px] h-6 min-w-6 lg:hidden self-start mt-4">
                <span className="absolute w-2.5 h-[1px] bg-black inset-0 m-auto" />
                <span
                    className={cn('absolute w-2.5 h-[1px] bg-black inset-0 m-auto', {
                        'rotate-90': article.id.toString() !== articleIdUrl,
                    })}
                />
            </div>
        </Link>
    );
};