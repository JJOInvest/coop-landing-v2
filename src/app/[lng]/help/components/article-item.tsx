import cn from 'classnames';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface Props {
    article: {
        id: number;
        name: string;
    };
    children: ReactNode;
    articleIdUrl: string;
}

export const ArticleItem = ({ article, children, articleIdUrl }: Props) => {
    const [isOpened, setIsOpened] = useState(false || articleIdUrl === article.id.toString());
    const toggleOpened = () => setIsOpened((isOpened) => !isOpened);

    return (
        <div>
            <Link
                className="flex justify-between items-center border-t-[1px] border-black/10 lg:border-0"
                key={article.id}
                href={`/help/${article.id}`}
                onClick={toggleOpened}
                prefetch={false}
            >
                <div
                    className={cn('font-light text-sm py-4 lg:py-0 hover:text-black', {
                        'text-black font-normal': articleIdUrl === article.id.toString(),
                        'text-primary-neutral': articleIdUrl !== article.id.toString(),
                    })}
                >
                    {article.name}
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
            {article.id.toString() === articleIdUrl && isOpened && (
                <div className="lg:hidden" id="target-element">
                    {children}
                </div>
            )}
        </div>
    );
};
