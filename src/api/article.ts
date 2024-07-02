'use server';

import { zendesk } from '@/api/zendesk';
import { fallbackLng } from '@/i18n/settings';
import { Article } from '@/types/article';

export type Options = {
    language?: string;
};

export async function getAllArticles(
    options: Options = {
        language: fallbackLng,
    },
): Promise<Article[]> {
    const { data } = await zendesk.get<{ articles: Article[] }>(`${options.language}/articles`);
    return data.articles;
}

export async function getArticleById(
    id: number,
    options: Options = {
        language: fallbackLng,
    },
): Promise<Article> {
    const { data } = await zendesk.get<{ article: Article }>(
        `${options.language}/articles/${id}.json`,
    );
    console.log(data.article);
    return data.article;
}
