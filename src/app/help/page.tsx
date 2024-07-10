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

async function getSectionsWithTopArticles(locale: string): Promise<SectionWithTopArticles[]> {
    const sections = await getSections(locale);

    return Promise.all(
        sections.map(async (section) => {
            const articles = await getSectionArticles(locale, section.id, 3);

            return {
                ...section,
                topArticles: articles.map(({ id, name }) => ({ id, name })),
            };
        }),
    );
}

export default async function Page({ searchParams }: Props) {
    const { t } = await getServerTranslations();
    const locale = 'ru';
    const [topArticles, sections] = await Promise.all([
        getArticles(locale, 100),
        getSectionsWithTopArticles(locale),
    ]);

    const article = searchParams.questionId
        ? await getArticle(locale, searchParams.questionId)
        : null;

    const articlesFromSearch = !!searchParams.query
        ? await searchArticles({ query: searchParams.query, locale, pageSize: 25 })
        : null;

    return (
        <section>
            <div className="bg-help pt-32 pb-16 lg:pt-24 lg:pb-24">
                <div className="container">
                    <div className="flex justify-between w-full items-center">
                        <div className="text-white flex flex-col gap-10 lg:max-w-[870px] flex-grow">
                            <h2 className="text-[32px]/[36px] font-semibold whitespace-pre-line lg:text-7xl">
                                {t('help.title')}
                            </h2>
                            <Search />
                        </div>

                        <Image src={QuestionIcon} alt="help" className="lg:block hidden" />
                    </div>
                </div>
            </div>

            <div className="py-16 lg:py-24">
                <div className="container">
                    <div className="lg:hidden block">
                        <MobileCategories
                            sections={sections}
                            topArticles={topArticles as Article[]}
                        />
                    </div>

                    <div className="lg:flex hidden justify-between">
                        <CategoriesList sections={sections} />

                        <div className="max-w-[770px] w-full">
                            {!!searchParams.questionId && (
                                <QuestionBody article={article as Article} />
                            )}
                            {!!searchParams.query && (
                                <SearchResult
                                    articles={articlesFromSearch as Article[]}
                                    query={searchParams.query}
                                />
                            )}

                            {!searchParams.questionId && !searchParams.questionId && (
                                <CategoryBody articles={topArticles.slice(0, 7) as Article[]} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
