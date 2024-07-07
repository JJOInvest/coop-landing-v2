import { Metadata } from 'next';
import { redirect } from 'next/navigation';

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

export async function getStaticPaths() {
    return {
        paths: investPagesIds.map((id) => ({ params: { id: id.toString() } })),
        fallback: false,
    };
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

export default async function Page({ params }: Props) {
    const { t } = await getServerTranslations();
    const language = await detectLanguage();

    const articleId = parseInt(params.id, 10);
    let article;

    try {
        article = await getArticleById(articleId, { language });
    } catch (error) {
        redirect(`/invest`);
    }

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
