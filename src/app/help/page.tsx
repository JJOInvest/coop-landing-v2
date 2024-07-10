import { Metadata } from 'next';

import { Article, getArticles } from '@/api/help';
import { CategoryBody } from '@/app/help/components/category-body';
import { Layout } from '@/app/help/components/layout';
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

    return (
        <Layout>
            <CategoryBody articles={topArticles as Article[]} />
        </Layout>
    );
}
