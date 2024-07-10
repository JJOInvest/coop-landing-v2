import { getArticle, getSectionArticles, getSections } from '@/api/help';
import ArticleLayout from '@/app/help/[id]/article-layout';

type Params = {
    id: string;
};

interface Props {
    params: Params;
}

// Компонент, который рендерится на сервере
export default async function ArticlePage({ params }: Props) {
    const { id } = params;
    const article = await getArticle('ru', id);

    return <ArticleLayout article={article} />;
}

// export async function getStaticPaths() {
//     const locale = 'ru';
//     const sections = await getSections(locale); // Функция, возвращающая список разделов
//
//     let paths: any[] = [];
//
//     // Проходимся по каждому разделу и получаем статьи
//     for (const section of sections) {
//         const articles = await getSectionArticles(locale, section.id); // Функция, возвращающая статьи для раздела
//
//         // Формируем пути для каждой статьи в текущем разделе
//         const sectionPaths = articles.map((article) => ({
//             params: {
//                 id: article.id.toString(),
//             },
//         }));
//
//         paths = paths.concat(sectionPaths);
//     }
//
//     return {
//         paths,
//         fallback: false,
//     };
// }
