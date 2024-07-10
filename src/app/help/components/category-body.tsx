import { Article } from '@/api/help';
import { Question } from '@/api/help3';
import { CategoryQuestion } from '@/app/help/components/category-question';

export type Props = {
    articles: Article[];
};

export const CategoryBody = ({ articles }: Props) => {
    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-[28px]/tight lg:text-4xl">С чего начать?</h3>
            <div className="flex flex-col">
                {articles.map((article) => (
                    <CategoryQuestion key={article.id} {...article} />
                ))}
            </div>
        </div>
    );
};
