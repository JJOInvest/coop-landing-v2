'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Article } from '@/types/article';

interface Props {
    article: Article;
}

export const ZendeskContent = ({ article }: Props) => {
    const { ref: startRef, inView: startInView } = useInView();
    const { ref: endRef, inView: endInView } = useInView();

    // const isHidden = !startInView && !endInView;
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        if (startInView) {
            setIsHidden(true);
        } else if (endInView) {
            setIsHidden(false);
        }
    }, [startInView, endInView]);

    useEffect(() => {
        const header = document.getElementById('invest-menu-container');
        const menu = document.getElementById('invest-menu-stepper');
        if (header && menu) {
            if (isHidden) {
                header.classList.add('top-0');
                header.classList.remove('top-10');
            } else {
                header.classList.add('top-10');
                header.classList.remove('top-0');
            }
        }
    }, [isHidden]);

    return (
        <>
            <h1 ref={startRef} className="text-4xl font-medium text-black">
                {article.name}
            </h1>

            <div
                className="mt-6 lg:mt-10 zendesk-content"
                dangerouslySetInnerHTML={{ __html: article.body }}
            />
            <div ref={endRef} />
        </>
    );
};
