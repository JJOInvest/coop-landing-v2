import { ReactNode } from 'react';

import { getSectionsWithTopArticles } from '@/api/help';
import { CategoryItem } from '@/app/[lng]/help/components/category-item';
import { getServerTranslations } from '@/i18n/server';

interface Props {
    children?: ReactNode;
}

export async function CategoriesList({ children }: Props) {
    const { i18n } = await getServerTranslations();

    const sections = await getSectionsWithTopArticles(i18n.language);

    return (
        <div className="flex flex-col gap-6 lg:w-[270px]">
            {sections.map((category, index) => (
                <CategoryItem {...category} key={category.id} defaultOpened={index === 0}>
                    {children}
                </CategoryItem>
            ))}
        </div>
    );
}
