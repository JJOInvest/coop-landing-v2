const categories: Category[] = [
    {
        id: 1,
        name: 'С чего начать',
        questions: [
            {
                id: 2,
                name: "Начиная с какой суммы я могу инвестировать с J'JO?",
                answer: '№РгУЫРг да ah34uhau3rhauw3 kashfukashku dsjkh sajkkj ksdjf',
                updatedAt: new Date(2024, 6, 2, 10, 12, 31),
            },
            {
                id: 4,
                name: 'Что такое индекс JJ035?',
                answer: 'Дыьваыьл выбалфаб лфыа фыа ыфолао лыюфаю фоыюлао фюыою4 офюыо4юа оыюлоаы ювлоаюлф ыоюлао юлваыоюл офыюлв',
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
    {
        id: 6,
        name: 'С чего закончить',
        questions: [
            {
                id: 7,
                name: "Начиная с какой суммы я могу инвестировать с J'JO?",
                answer: 'лфыолвыфаоалдыфвдла офдылаов длфыад лвыфдла ',
                updatedAt: new Date(2024, 6, 2, 10, 12, 31),
            },
            {
                id: 8,
                name: 'Что такое индекс JJ035?',
                answer: 'akjfkldjsflkj laskfjsdl fjlsad fkdsalf jsakfj lkajfl ksalfkjaslkfjlkasj flkasjl fla laksfkl dsakf asf lsafl kasflk salk flaksf jln dksflkdsfkldsjlkfjalsk falds fasdjfl dsalfk jaslk fdaksl fklsafl kaslf sakaljsf jlasf lkasdfl asdf klsadf sfld lfasfsad fsdaf dsaf klasdklf sjkdlf ksjlfklj fkljs jklfdajklf slk',
                updatedAt: new Date(2024, 8, 7, 10, 12, 31),
            },
            {
                id: 9,
                name: 'Что нужно, чтобы начать?',
                answer: 'Нлуаыладжфужд лжфывладвфлыдаasdklas a asldksa;l a sdkдфываasdjska фыалфы жалфыжалдфыла джфыаждыфл',
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
    return categories;
}

export async function getQuestionById(id: number): Promise<Question> {
    return categories
        .flatMap((category) => category.questions)
        .find((question) => question.id === id)!;
}
