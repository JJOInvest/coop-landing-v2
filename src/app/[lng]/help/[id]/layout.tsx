import { ReactNode } from 'react';

import { CategoriesList } from '@/app/[lng]/help/components/categories-list';
import { LayoutHelp } from '@/app/[lng]/help/components/layoutHelp';

interface Props {
    children: ReactNode;
}

export default async function ArticleLayout({ children }: Props) {
    return (
        <div className="py-16 lg:py-24">
            <div className="container">
                {/*<div className="lg:hidden block">{!forArticles && children}</div>*/}
                <div className="lg:flex justify-between">
                    <CategoriesList>
                        <div className="lg:hidden">{children}</div>
                    </CategoriesList>

                    <div className="hidden lg:flex max-w-[770px] w-full">{children}</div>
                </div>
            </div>
        </div>
    );
}
