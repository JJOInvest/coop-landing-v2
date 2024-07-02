import { redirect } from 'next/navigation';

import { getAllArticles, getArticleById } from '@/api/article';
import { Button } from '@/components/button';
import { InvestMenu } from '@/features/invest';
import { StartWhenever } from '@/features/start-whenever';
import { detectLanguage, getServerTranslations } from '@/i18n/server';
import { InvestHero } from '@/routes/invest-page/hero';

interface Props {
    articleId: number;
}

export const InvestPage = async ({ articleId }: Props) => {
    const { t } = await getServerTranslations();
    const language = await detectLanguage();

    const articles = await getAllArticles({ language });
    if (!articleId) {
        redirect(`/invest?articleId=${articles[0].id}`);
    }

    const article = await getArticleById(articleId, { language });

    return (
        <section>
            <InvestHero />

            <div className={'lg:mt-24 flex flex-col lg:flex-row lg:pb-28'}>
                <div className={'lg:max-w-96'}>
                    <div className={'overflow-hidden lg:rounded-r-xl'}>
                        <InvestMenu
                            activeArticleId={articleId}
                            articles={articles.map((article) => ({
                                id: article.id,
                                name: article.name,
                            }))}
                        />
                    </div>
                    <Button className={'mt-2 lg:mt-4 lg:block hidden'} block>
                        {t('invest.button')}
                    </Button>
                </div>

                <div className={'container py-20 lg:p-0 lg:max-w-[870px] lg:px-16'}>
                    <h3 className={'text-2xl font-semibold lg:text-4xl'}>{article.name}</h3>
                    <div
                        className={'mt-6 lg:mt-10'}
                        dangerouslySetInnerHTML={{ __html: article.body }}
                    />
                </div>
            </div>

            <StartWhenever />
        </section>
    );
};
