import { Category } from '@/api/help';
import { CategoryItem } from '@/app/help/components/category-item';

export type Props = {
    categories: Category[];
};

export const CategoriesList = ({ categories }: Props) => {
    return (
        <div className="flex flex-col gap-6 w-[270px]">
            {categories.map((category) => (
                <CategoryItem key={category.id} {...category} />
            ))}
        </div>
    );
};
