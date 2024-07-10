import { SectionWithTopArticles } from '@/api/help';
import { CategoryItem } from '@/app/help/components/category-item';

export type Props = {
    sections: SectionWithTopArticles[];
};

export const CategoriesList = ({ sections }: Props) => {
    return (
        <div className="flex flex-col gap-6 w-[270px]">
            {sections.map((category) => (
                <CategoryItem key={category.id} {...category} />
            ))}
        </div>
    );
};
