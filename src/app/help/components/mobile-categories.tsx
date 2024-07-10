import { Article, SectionWithTopArticles } from '@/api/help';
import { Category } from '@/api/help3';
import { MobileQuestion } from '@/app/help/components/mobile-question';

export type Props = {
    sections: SectionWithTopArticles[];
    topArticles?: Article[];
};

export const MobileCategories = ({ sections, topArticles }: Props) => {
    return (
        <div className="flex flex-col gap-8">
            {sections.map((section) => (
                <div key={section.id}>
                    <h4 className="text-[28px]/tight font-semibold">{section.name}</h4>
                    <div className="flex flex-col mt-6 border-t-[1px] border-black/10">
                        {section.topArticles.map((topArticle) => (
                            <MobileQuestion
                                topArticles={topArticles}
                                key={topArticle.id}
                                name={topArticle.name}
                                id={topArticle.id}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
