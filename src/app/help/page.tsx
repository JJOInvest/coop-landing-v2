import { Metadata } from 'next';
import Image from 'next/image';

import {
    Article,
    getArticle,
    getArticles,
    getSectionArticles,
    getSections,
    searchArticles,
    SectionWithTopArticles,
} from '@/api/help';
import { CategoriesList } from '@/app/help/components/categories-list';
import { CategoryBody } from '@/app/help/components/category-body';
import { Layout } from '@/app/help/components/layout';
import { MobileCategories } from '@/app/help/components/mobile-categories';
import { QuestionBody } from '@/app/help/components/question-body';
import { Search } from '@/app/help/components/search';
import { SearchResult } from '@/app/help/components/search-result';
import QuestionIcon from '@/assets/help/question.svg';
import { getServerTranslations } from '@/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
    const { t } = await getServerTranslations();
    return {
        title: t('help.page-title'),
    };
}

interface Props {
    searchParams: {
        questionId?: string;
        query?: string;
    };
}

export default async function Page({ searchParams }: Props) {
    const locale = 'ru';
    const [topArticles] = await Promise.all([getArticles(locale, 8)]);

    const article = searchParams.questionId
        ? await getArticle(locale, searchParams.questionId)
        : null;

    const articlesFromSearch = !!searchParams.query
        ? await searchArticles({ query: searchParams.query, locale, pageSize: 25 })
        : null;

    return (
        <Layout>
            <CategoryBody articles={topArticles as Article[]} />
        </Layout>
    );
}
