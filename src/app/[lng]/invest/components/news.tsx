import Image from 'next/image';
import Link from 'next/link';

import arrow from '../assets/arrow.png';
import bloomberg from '../assets/bloomberg.png';
import cnbc from '../assets/cnbc.png';
import forbes from '../assets/forbes.png';

const links = [
    {
        title: 'Миллиардер Уоррен Баффет придерживается этой недорогой стратегии инвестирования, которую может попробовать каждый',
        href: 'https://www.cnbc.com/2022/10/03/billionaire-warren-buffett-swears-by-this-inexpensive-investing-strategy-that-anyone-can-try.html',
        image: cnbc,
    },
    {
        title: 'Даже финансовые профессионалы выбирают индексное инвестирование для своих сбережений',
        href: 'https://www.bloomberg.com/news/articles/2015-04-29/even-financial-pros-choose-indexing-for-retirement-savings?leadSource=uverify%20wall',
        image: bloomberg,
    },
    {
        title: 'Индексные фонды - это наиболее рекомендуемый Уорреном Баффетом инвестиционный инструмент для частных инвесторов',
        href: 'https://www.forbes.com/sites/camilomaldonado/2018/09/11/5-reasons-you-should-include-index-funds-in-your-401k-or-ira/?sh=2b2477f6fd67',
        image: forbes,
    },
];

export const News = () => {
    return (
        <div>
            <div className="flex gap-x-7">
                {links.map((link, index) => (
                    <Link
                        className="flex flex-col gap-y-5 flex-1"
                        key={index}
                        href={link.href}
                        target="_blank"
                    >
                        <div className="flex items-center border border-[#F1F1F1] py-5 px-10 rounded-xl h-[180px]">
                            <Image src={link.image} alt={link.title} />
                        </div>
                        <div>{link.title}</div>
                        <div className="flex gap-2 items-center mt-auto uppercase text-[13px] font-bold">
                            Подробнее
                            <Image src={arrow} width={16} height={16} alt="arrow" />
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-10 text-[#1D1D1B] opacity-60">
                Инвестирование в индекс позволяет инвестору расти вместе с рынком. Автоматическая
                ребалансировка, которая обновляет состав индекса в соответствии с изменениями на
                рынке криптовалют, это еще один инструмент сервиса JJO, который повышает
                эффективность ваших инвестиций.
            </div>
        </div>
    );
};
