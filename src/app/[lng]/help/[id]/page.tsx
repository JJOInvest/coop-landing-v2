import { Metadata } from 'next';
import Head from 'next/head';

import { getArticle, getSectionArticles, getSections } from '@/api/help';
import ArticleLayout from '@/app/[lng]/help/[id]/article-layout';
import { languages } from '@/i18n/languages';
import { detectLanguage } from '@/i18n/server';

type Params = {
    id: string;
    lng: string;
};

interface Props {
    params: Params;
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const language = await detectLanguage();
//
//     const articleId = parseInt(params.id, 10);
//     const article = await getArticle(language, articleId);
//
//     const { title } = article;
//
//     return {
//         title: `${title} - JJO Invest`,
//     };
// }

export default async function Page({ params }: Props) {
    const { id, lng } = params;
    const article = await getArticle(lng, id);
    const canonicalUrl = `https://jjo.finance/${lng}/help/${id}`;

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
                {languages.map((lang) => (
                    <link
                        key={lang.isoCode}
                        rel="alternate"
                        hrefLang={lang.isoCode}
                        href={`https://jjo.finance/${lang.value}/help/${id}`}
                    />
                ))}
            </Head>
            <ArticleLayout article={article} />;
        </>
    );
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
