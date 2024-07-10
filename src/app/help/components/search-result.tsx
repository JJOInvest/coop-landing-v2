import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Article } from '@/api/help';
import { CategoryQuestion } from '@/app/help/components/category-question';

export type Props = {
    articles: Article[];
    query: string;
};

dayjs.extend(relativeTime);

export const SearchResult = async ({ articles, query }: Props) => {
    console.log(articles);
    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-[28px]/tight lg:text-4xl">{`Результат для: ${query}`}</h3>
            <div className="flex flex-col">
                {articles.map((question) => (
                    <CategoryQuestion key={question.id} {...question} />
                ))}
            </div>
        </div>
    );
};
