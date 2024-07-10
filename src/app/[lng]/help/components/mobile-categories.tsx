import { Category } from '@/api/help';
import { MobileQuestion } from '@/app/[lng]/help/components/mobile-question';

export type Props = {
    categories: Category[];
};

export const MobileCategories = ({ categories }: Props) => {
    return (
        <div className="flex flex-col gap-8">
            {categories.map((category) => (
                <div key={category.id}>
                    <h4 className="text-[28px]/tight font-semibold">{category.name}</h4>
                    <div className="flex flex-col mt-6 border-t-[1px] border-black/10">
                        {category.questions.map((question) => (
                            <MobileQuestion key={question.id} {...question} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
