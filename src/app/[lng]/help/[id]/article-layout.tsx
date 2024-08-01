'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Article } from '@/api/help';
import { replaceInstructionBody } from '@/utils/help';

import styles from './styles.module.scss';

export type Props = {
    article: Article;
};

const ArticleLayout = ({ article }: Props) => {
    const { body, name } = article;
    const { t } = useTranslation();

    const [articleBody, setArticleBody] = useState(body);

    useEffect(() => {
        const element = document.getElementById('target-element');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    useEffect(() => {
        if (article.section_id === 19613933802265) {
            setArticleBody(
                replaceInstructionBody(article.body, t('ip_addresses_can_be_found'), article.id),
            );
        } else setArticleBody(article.body);
    }, [article.section_id, article.body, article.id]);

    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            <div id="target-element" />
            <h3 className="hidden lg:flex text-[28px]/tight lg:text-4xl">{name}</h3>
            <div className={styles.article} dangerouslySetInnerHTML={{ __html: articleBody }} />
        </div>
    );
};

export default ArticleLayout;
