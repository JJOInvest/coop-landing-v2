import cn from 'classnames';
import Link from 'next/link';

interface Props {
    activeArticleId: string;
    articles: {
        id: string;
        name: string;
    }[];
}

export const InvestMenu = ({ activeArticleId, articles }: Props) => {
    return (
        <div
            className={'py-12 text-white flex flex-col gap-4 pr-8'}
            style={{
                background: 'linear-gradient(60deg, #ff7f57, #d8575f)',
            }}
        >
            {articles.map((article) => (
                <Link
                    href={`/invest?articleId=${article.id}`}
                    key={article.id}
                    className={cn(
                        'text-[16px]/normal flex items-center transition-all duration-150 max-w-full',
                        {
                            'gap-8': article.id === activeArticleId,
                            'opacity-60 gap-12': article.id !== activeArticleId,
                        },
                    )}
                >
                    <div
                        className={cn('w-2 h-2 rounded bg-white', {
                            '-translate-x-1/2': article.id === activeArticleId,
                            '-translate-x-full': article.id !== activeArticleId,
                        })}
                    />

                    {article.name}
                </Link>
            ))}
        </div>
    );
};
