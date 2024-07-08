import { Metadata } from 'next';

import { getAllCategories, getQuestionById } from '@/api/help';
import { CategoriesList } from '@/app/help/components/categories-list';
import { CategoryBody } from '@/app/help/components/category-body';
import { QuestionBody } from '@/app/help/components/question-body';
import { Search } from '@/app/help/components/search';
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
    };
}

export default async function Page({ searchParams }: Props) {
    const { t } = await getServerTranslations();
    const categories = await getAllCategories();
    const question = searchParams.questionId
        ? await getQuestionById(Number(searchParams.questionId))
        : null;

    return (
        <section>
            <div className="bg-help pt-32 pb-16 lg:pt-24 lg:pb-24">
                <div className="container">
                    <div className="text-white flex flex-col gap-10 lg:max-w-[870px] ">
                        <h2 className="text-[32px]/[36px] font-semibold whitespace-pre-line lg:text-7xl">
                            {t('help.title')}
                        </h2>
                        <Search />
                    </div>
                </div>
            </div>

            <div className="py-16 lg:py-24">
                <div className="container">
                    <div className="flex justify-between">
                        <div className="hidden lg:block">
                            <CategoriesList categories={categories} />
                        </div>

                        <div className="max-w-[770px] w-full">
                            {!!searchParams.questionId ? (
                                <QuestionBody
                                    id={question!.id}
                                    name={question!.name}
                                    answer={question!.answer}
                                />
                            ) : (
                                <CategoryBody {...categories[0]} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
