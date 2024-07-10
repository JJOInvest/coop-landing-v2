'use client';

import { Article } from '@/api/help';

import styles from './styles.module.scss';

export type Props = {
    article: Article;
};

const ArticleLayout = ({ article }: Props) => {
    const { body, name } = article;
    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-[28px]/tight lg:text-4xl">{name}</h3>
            <div className={styles.article} dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
};

export default ArticleLayout;
