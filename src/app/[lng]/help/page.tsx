import { Metadata } from 'next';

import { Article, getArticles } from '@/api/help';
import { CategoryBody } from '@/app/[lng]/help/components/category-body';
import { LayoutHelp } from '@/app/[lng]/help/components/layoutHelp';
import { getServerTranslations } from '@/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
    const { t } = await getServerTranslations();
    return {
        title: t('help.page-title'),
    };
}

interface Props {
    params: {
        lng: string;
    };
}

export default async function Page({ params }: Props) {
    console.log(params);
    const locale = params.lng;
    const [topArticles] = await Promise.all([getArticles(locale, 8)]);

    return (
        <LayoutHelp>
            <CategoryBody articles={topArticles as Article[]} />
        </LayoutHelp>
    );
}
