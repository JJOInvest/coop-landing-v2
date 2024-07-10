import { getSectionArticles, getSections, SectionWithTopArticles } from '@/api/help';
import { CategoryItem } from '@/app/help/components/category-item';

//todo убрать
async function getSectionsWithTopArticles(locale: string): Promise<SectionWithTopArticles[]> {
    const sections = await getSections(locale);

    return Promise.all(
        sections.map(async (section) => {
            const articles = await getSectionArticles(locale, section.id, 3);

            return {
                ...section,
                topArticles: articles.map(({ id, name }) => ({ id, name })),
            };
        }),
    );
}

export async function CategoriesList() {
    const sections = await getSectionsWithTopArticles('ru');

    return (
        <div className="flex flex-col gap-6 w-[270px]">
            {sections.map((category) => (
                <CategoryItem key={category.id} {...category} />
            ))}
        </div>
    );
}
