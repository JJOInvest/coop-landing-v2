import { Metadata } from 'next';

import { getArticleById } from '@/api/article';
import { InvestHeader } from '@/app/invest/components/header';
import { InvestMenu, Item } from '@/app/invest/components/invest-menu';
import { StartWhenever } from '@/app/invest/components/start-whenever';
import { investPagesIds } from '@/app/invest/constants';
import { Button } from '@/components/button';
import { detectLanguage, getServerTranslations } from '@/i18n/server';

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
    const article = await getArticleById(articleId, { language });

    const { title } = article;

    return {
        title: `${title} - JJO Invest`,
    };
}

async function getArticle(params: { id: string }, articleId: number) {
    const language = await detectLanguage();

    return await getArticleById(articleId, { language });
}

export default async function Page({ params }: Props) {
    const { t } = await getServerTranslations();
    const articleId = parseInt(params.id, 10);

    const article = await getArticle(params, articleId);

    return (
        <>
            <InvestHeader />

            <div className="flex flex-col lg:flex-row bg-white my-24">
                <div className="lg:max-w-96">
                    <div className="overflow-hidden lg:rounded-r-xl">
                        <InvestMenu activeArticleId={articleId} />
                    </div>
                    <Button className="mt-2 lg:mt-4 lg:block hidden" block>
                        {t('invest.button')}
                    </Button>
                </div>

                <div className="container py-20 lg:p-0 lg:max-w-[870px]">
                    <h1 className="text-4xl font-medium text-black">{article.name}</h1>
                    <div
                        className="mt-6 lg:mt-10 zendesk-content"
                        dangerouslySetInnerHTML={{ __html: article.body }}
                    />
                </div>
            </div>

            <StartWhenever />
        </>
    );
}
