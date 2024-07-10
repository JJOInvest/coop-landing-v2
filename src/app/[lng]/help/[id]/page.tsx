import { getArticle, getSectionArticles, getSections } from '@/api/help';
import ArticleLayout from '@/app/[lng]/help/[id]/article-layout';

type Params = {
    id: string;
};

interface Props {
    params: Params;
}

export default async function Page({ params }: Props) {
    const { id } = params;
    const article = await getArticle('ru', id);

    return <ArticleLayout article={article} />;
}

export async function generateStaticParams() {
    const locale = 'ru';
    const sections = await getSections(locale); // Функция, возвращающая список разделов

    let params: any[] = [];

    for (const section of sections) {
        const articles = await getSectionArticles(locale, section.id); // Функция, возвращающая статьи для раздела

        const ids = articles.map((article) => ({
            id: article.id.toString(),
        }));

        params.push(...ids);
    }

    return params;
}
