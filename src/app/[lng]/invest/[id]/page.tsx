import { Metadata } from 'next';

import { getArticleById } from '@/api/article';
import { getArticle } from '@/api/help';
import { News } from '@/app/[lng]/invest/components/news';
import { investPagesIds } from '@/app/[lng]/invest/constants';
import { detectLanguage } from '@/i18n/server';

interface Props {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    return investPagesIds.map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const language = await detectLanguage();

    const articleId = parseInt(params.id, 10);
    // const article = await getArticleById(articleId, { language });
    const article = await getArticle(language, articleId);

    const { title } = article;

    return {
        title: `${title} - JJO Invest`,
    };
}

// async function getArticle(params: { id: string }, articleId: number) {
//     const language = await detectLanguage();
//
//     return await getArticleById(articleId, { language });
// }

export default async function Page({ params }: Props) {
    const articleId = parseInt(params.id, 10);

    const article = await getArticle('ru', articleId);

    return (
        <div className="container py-20 lg:p-0 lg:max-w-[870px]">
            <h1 className="text-4xl font-medium text-black">{article.name}</h1>
            <div
                className="mt-6 lg:mt-10 zendesk-content"
                dangerouslySetInnerHTML={{ __html: article.body }}
            />
            {params.id === '33181283962009' && <News />}
        </div>
    );
}
