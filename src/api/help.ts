/* eslint-disable max-classes-per-file */
import fetchBuilder from 'fetch-retry-ts';
// @ts-ignore
import urlcat, { join, ParamMap } from 'urlcat';

export interface Section {
    id: number;
    url: string;
    htmlUrl: string;
    categoryId: number;
    position: number;
    sorting: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string | null;
    locale: string;
    sourceLocale: string;
    outdated: boolean;
    parentSectionId: null | number;
    themeTemplate: string;
}

export interface Article {
    id: number;
    url: string;
    htmlUrl: string;
    authorId: number;
    commentsDisabled: boolean;
    draft: boolean;
    promoted: boolean;
    position: number;
    voteSum: number;
    voteCount: number;
    section_id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    title: string;
    sourceLocale: string;
    locale: string;
    outdated: boolean;
    outdatedLocales: string[];
    editedAt: string;
    userSegmentId: null | number;
    permissionGroupId: number;
    labelNames: string[];
    body: string;
}

interface HelpCenterRequestParams {
    path: string;
    locale?: string;
    query?: ParamMap;
    auth?: { email: string; token: string };
    search?: boolean;
}

export type SectionWithTopArticles = Section & {
    topArticles: { id: number; name: string }[];
};

export function urlJoin(...urls: string[]): string {
    return urls.reduce((a, b) => join(a, '/', b));
}

const ZENDESK_DOMAIN = process.env.NEXT_PUBLIC_ZENDESK_DOMAIN ?? '';

export const ZENDESK_API_URL = `https://${ZENDESK_DOMAIN}.zendesk.com/api/v2`;

export async function helpCenterRequest<T>({
    path,
    query,
    locale,
    search,
}: HelpCenterRequestParams): Promise<T> {
    const fetchWithRetry = fetchBuilder(fetch, {
        retryDelay: (_attempt: number, _error: Error | null, response: Response | null): number => {
            if (!response || !response.headers || !response.headers.get('retry-after'))
                return 60000;
            return parseInt(response.headers.get('retry-after') as string, 10) * 1000;
        },
        retryOn: [429],
    });

    let localePath = locale === 'ru' ? locale : 'en-gb';

    if (search) localePath = '';

    const fullPath = urlcat(
        urlJoin(ZENDESK_API_URL, 'help_center', localePath?.toLowerCase() ?? '', path),
        query ?? {},
    );

    const response = await fetchWithRetry(fullPath, {
        headers: {
            Authorization:
                'Basic c3Vic2NyaXB0aW9uQGpqb2FwcC5pby90b2tlbjo3Y0ZtaGVNZ1BHUHF1ZVBBaXFuUHlzdnk1bTdFSDZ3aDNmdzNiRjlh',
        },
    });

    const json = await response.json();

    return json;
}

export async function getSections(locale: string): Promise<Section[]> {
    const { sections = [] } = await helpCenterRequest<{ sections: Section[] }>({
        path: 'sections',
        query: { 'page[size]': 100 },
        locale,
    });

    return sections;
}

export async function getSectionArticles(
    locale: string,
    sectionId: number | string,
    pageSize = 100,
): Promise<Article[]> {
    const { articles = [] } = await helpCenterRequest<{ articles: Article[] }>({
        path: `sections/${sectionId}/articles`,
        query: { 'page[size]': pageSize },
        locale,
    });

    return articles;
}

interface ArticleSearchParams {
    query: string;
    locale: string;
    pageSize: number;
}

export async function searchArticles({
    locale,
    pageSize,
    query,
}: ArticleSearchParams): Promise<Article[]> {
    const { results = [] } = await helpCenterRequest<{
        results: Article[];
        sections: Section[];
    }>({
        path: 'articles/search',
        query: { query, locale: locale.toLowerCase(), 'page[size]': pageSize },
        search: true,
    });

    return results;
}

export async function getArticles(locale: string, pageSize = 100): Promise<Article[]> {
    const { articles = [] } = await helpCenterRequest<{
        articles: Article[];
    }>({
        path: `articles`,
        locale,
        query: { 'page[size]': pageSize },
    });

    return articles;
}

export async function getArticle(locale: string, articleId: number | string): Promise<Article> {
    const { article } = await helpCenterRequest<{
        article: Article;
    }>({
        path: `articles/${articleId}`,
        locale,
    });

    return article;
}

export async function getSectionsWithTopArticles(
    locale: string,
): Promise<SectionWithTopArticles[]> {
    const sections = await getSections(locale);

    return Promise.all(
        sections.map(async (section) => {
            const articles = await getSectionArticles(locale, section.id, 50);

            return {
                ...section,
                topArticles: articles.map(({ id, name }) => ({ id, name })),
            };
        }),
    );
}
