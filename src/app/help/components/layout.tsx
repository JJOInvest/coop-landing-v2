import Image from 'next/image';
import { ReactNode } from 'react';

import { Article } from '@/api/help';
import { CategoriesList } from '@/app/help/components/categories-list';
import { CategoryBody } from '@/app/help/components/category-body';
import { MobileCategories } from '@/app/help/components/mobile-categories';
import { QuestionBody } from '@/app/help/components/question-body';
import { Search } from '@/app/help/components/search';
import { SearchResult } from '@/app/help/components/search-result';
import QuestionIcon from '@/assets/help/question.svg';
import { getServerTranslations } from '@/i18n/server';

interface Props {
    children: ReactNode;
}

export async function Layout({ children }: Props) {
    const { t } = await getServerTranslations();

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
                        {/*<MobileCategories*/}
                        {/*    sections={sections}*/}
                        {/*    topArticles={topArticles as Article[]}*/}
                        {/*/>*/}
                    </div>

                    <div className="lg:flex hidden justify-between">
                        <CategoriesList />

                        <div className="max-w-[770px] w-full">{children}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
