export type Props = {
    id: number;
    name: string;
    answer: string;
};

export const QuestionBody = ({ id, name, answer }: Props) => {
    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-[28px]/tight lg:text-4xl">{name}</h3>
            <p className="text-primary-neutral">{answer}</p>
        </div>
    );
};
