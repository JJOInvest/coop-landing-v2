import { Metadata } from 'next';
import Image from 'next/image';

import { getAllCategories, getQuestionById } from '@/api/help';
import { CategoriesList } from '@/app/[lng]/help/components/categories-list';
import { CategoryBody } from '@/app/[lng]/help/components/category-body';
import { MobileCategories } from '@/app/[lng]/help/components/mobile-categories';
import { QuestionBody } from '@/app/[lng]/help/components/question-body';
import { Search } from '@/app/[lng]/help/components/search';
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
                        <MobileCategories categories={categories} />
                    </div>

                    <div className="lg:flex hidden justify-between">
                        <CategoriesList categories={categories} />

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