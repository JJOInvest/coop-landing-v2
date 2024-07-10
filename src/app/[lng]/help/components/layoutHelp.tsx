import Image from 'next/image';
import { ReactNode } from 'react';

import { CategoriesList } from '@/app/help/components/categories-list';
import { Search } from '@/app/help/components/search';
import QuestionIcon from '@/assets/help/question.svg';
import { getServerTranslations } from '@/i18n/server';

interface Props {
    children: ReactNode;
    forArticles?: boolean;
}

export async function LayoutHelp({ children, forArticles }: Props) {
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
                    <div className="lg:hidden block">{!forArticles && children}</div>

                    <div className="lg:flex justify-between">
                        <CategoriesList>
                            {forArticles && <div className="lg:hidden">{children}</div>}
                        </CategoriesList>

                        <div className="hidden lg:flex max-w-[770px] w-full">{children}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
