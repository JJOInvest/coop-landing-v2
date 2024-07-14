import { Article } from '@/api/help';
import { CategoryQuestion } from '@/app/[lng]/help/components/category-question';
import { getServerTranslations } from '@/i18n/server';

export type Props = {
    articles: Article[];
};

export async function CategoryBody({ articles }: Props) {
    const { t } = await getServerTranslations();

    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-[28px]/tight lg:text-4xl">{t('С чего начать?')}</h3>
            <div className="flex flex-col">
                {articles.map((article) => (
                    <CategoryQuestion key={article.id} {...article} />
                ))}
            </div>
        </div>
    );
}
