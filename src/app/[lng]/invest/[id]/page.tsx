import { Metadata } from 'next';

import { getArticle } from '@/api/help';
import { InvestCalculator } from '@/app/[lng]/invest/[id]/components/invest-calculator';
import { News } from '@/app/[lng]/invest/components/news';
import { investPagesIds } from '@/app/[lng]/invest/constants';
import { detectLanguage } from '@/i18n/server';

interface Props {
    params: {
        id: string;
        lng: string;
    };
}

export async function generateStaticParams() {
    return investPagesIds.map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const language = await detectLanguage();

    const articleId = parseInt(params.id, 10);
    const article = await getArticle(language, articleId);

    const { title } = article;

    return {
        title: `${title} - JJO Invest`,
    };
}

export default async function Page({ params }: Props) {
    const articleId = parseInt(params.id, 10);

    const article = await getArticle(params.lng, articleId);

    return (
        <div className="px-0 py-20 lg:p-0 lg:max-w-[870px]">
            <h1 className="text-4xl font-medium text-black">{article.name}</h1>
            <div
                className="mt-6 lg:mt-10 zendesk-content"
                dangerouslySetInnerHTML={{ __html: article.body }}
            />
            {params.id === '33181283962009' && <News />}
            {params.id === '33181863366425' && <InvestCalculator />}
        </div>
    );
}
