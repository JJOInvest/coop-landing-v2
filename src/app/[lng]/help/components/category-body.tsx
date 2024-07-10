import { Question } from '@/api/help';
import { CategoryQuestion } from '@/app/[lng]/help/components/category-question';

export type Props = {
    id: number;
    name: string;
    questions: Question[];
};

export const CategoryBody = ({ id, name, questions }: Props) => {
    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-[28px]/tight lg:text-4xl">{name}</h3>
            <div className="flex flex-col">
                {questions.map((question) => (
                    <CategoryQuestion
                        key={question.id}
                        {...question}
                        isLast={questions[questions.length - 1].id === question.id}
                    />
                ))}
            </div>
        </div>
    );
};
