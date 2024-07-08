const categories: Category[] = [
    {
        id: 1,
        name: 'С чего начать',
        questions: [
            {
                id: 2,
                name: "Начиная с какой суммы я могу инвестировать с J'JO?",
                answer: 'Блабалаблабалаблаблаблалбабаалалбаблааблалбалаблабла',
                updatedAt: new Date(2024, 6, 2, 10, 12, 31),
            },
            {
                id: 4,
                name: 'Что такое индекс JJ035?',
                answer: 'БлабалаблабалаблаблаблалбабаалалбаблааблалбалаблаблаБлабалаблабалаблаблаблалбабаалалбаблааблалбалаблабла',
                updatedAt: new Date(2024, 8, 7, 10, 12, 31),
            },
            {
                id: 5,
                name: 'Что нужно, чтобы начать?',
                answer: 'Нлуаыладжфужд лжфывладвфлыда лыфалфы валфылжа длфывда дфыва фыалфы жалфыжалдфыла джфыаждыфл',
                updatedAt: new Date(2024, 7, 2, 10, 12, 31),
            },
        ],
    },
];

export type Question = {
    id: number;
    name: string;
    answer: string;
    updatedAt: Date;
};

export type Category = {
    id: number;
    name: string;
    questions: Question[];
};

export async function getAllCategories(): Promise<Category[]> {
    return [
        {
            id: 1,
            name: 'С чего начать',
            questions: [
                {
                    id: 2,
                    name: "Начиная с какой суммы я могу инвестировать с J'JO?",
                    answer: 'Блабалаблабалаблаблаблалбабаалалбаблааблалбалаблабла',
                    updatedAt: new Date(2024, 6, 2, 10, 12, 31),
                },
                {
                    id: 4,
                    name: 'Что такое индекс JJ035?',
                    answer: 'БлабалаблабалаблаблаблалбабаалалбаблааблалбалаблаблаБлабалаблабалаблаблаблалбабаалалбаблааблалбалаблабла',
                    updatedAt: new Date(2024, 8, 7, 10, 12, 31),
                },
                {
                    id: 5,
                    name: 'Что нужно, чтобы начать?',
                    answer: 'Нлуаыладжфужд лжфывладвфлыда лыфалфы валфылжа длфывда дфыва фыалфы жалфыжалдфыла джфыаждыфл',
                    updatedAt: new Date(2024, 7, 2, 10, 12, 31),
                },
            ],
        },
    ];
}

export async function getQuestionById(id: number): Promise<Question> {
    return categories
        .flatMap((category) => category.questions)
        .find((question) => question.id === id)!;
}
