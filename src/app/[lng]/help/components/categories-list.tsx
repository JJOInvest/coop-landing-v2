import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { getSectionsWithTopArticles } from '@/api/help';
import { CategoryItem } from '@/app/[lng]/help/components/category-item';
import { getServerTranslations } from '@/i18n/server';

interface Props {
    children: ReactNode;
}

export async function CategoriesList({ children }: Props) {
    const { i18n } = await getServerTranslations();

    const sections = await getSectionsWithTopArticles(i18n.language);

    return (
        <div className="flex flex-col gap-6 lg:w-[270px]">
            {sections.map((category) => (
                <CategoryItem key={category.id} {...category}>
                    {children}
                </CategoryItem>
            ))}
        </div>
    );
}
