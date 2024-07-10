import { ReactNode } from 'react';

import { getSectionsWithTopArticles } from '@/api/help';
import { CategoryItem } from '@/app/[lng]/help/components/category-item';

interface Props {
    children: ReactNode;
}

export async function CategoriesList({ children }: Props) {
    const sections = await getSectionsWithTopArticles('ru');

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
