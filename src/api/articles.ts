const articles = [
    {
        id: '1',
        name: 'Что такое сервис J’JO',
        content: 'Привет, **Мир**! Я *Аким Саввин*!',
    },
    {
        id: '2',
        name: 'Как индекс работает на рост ваших сбережений',
        content: 'Привет, **Мир**! Я *Аким Саввин*!',
    },
    {
        id: '3',
        name: 'Потенциал роста рынка криптовалют',
        content: 'Привет, **Мир**! Я *Аким Саввин*!',
    },
];

export const getAllArticles = () => {
    return Promise.resolve(articles);
};

export const getArticleById = (id: string) => {
    return Promise.resolve(articles.find((article) => article.id === id)!);
};
