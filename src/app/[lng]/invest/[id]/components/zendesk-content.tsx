'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import { InvestCalculator } from '@/app/[lng]/invest/[id]/components/invest-calculator';
import Arrow from '@/app/[lng]/invest/assets/arrow-icon.svg';
import { News } from '@/app/[lng]/invest/components/news';
import { Article } from '@/types/article';

interface Props {
    article: Article;
    params: any;
}

export const ZendeskContent = ({ article, params }: Props) => {
    const { ref: startRef, inView: startInView } = useInView();
    const { ref: endRef, inView: endInView } = useInView();
    const { t, i18n } = useTranslation();

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
                header.classList.remove('top-14');
            } else {
                header.classList.add('top-14');
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
            {params.id === '33181283962009' && <News />}
            {params.id === '33181863366425' && <InvestCalculator />}
            {params.id === '33961919663385' && (
                <Link href={`/${i18n.language}/invest/33181283962009`}>
                    <div className="flex gap-6 justify-between p-6 rounded-xl bg-invest text-white mt-10 lg:hidden">
                        <div>{t('index_growth_savings')}</div>
                        <Image src={Arrow} alt="arrow" />
                    </div>
                </Link>
            )}
            {params.id === '33181283962009' && (
                <Link href={`/${i18n.language}/invest/33181863366425`}>
                    <div className="flex gap-6 justify-between p-6 rounded-xl bg-invest text-white mt-10 lg:hidden">
                        <div>{t('crypto_market_growth_potential')}</div>
                        <Image src={Arrow} alt="arrow" />
                    </div>
                </Link>
            )}
            {params.id === '33181863366425' && (
                <Link href={`/${i18n.language}/invest/33961919663385`}>
                    <div className="flex gap-6 justify-between p-6 rounded-xl bg-invest text-white mt-10 lg:hidden">
                        <div>{t('what_is_jjo')}</div>
                        <Image src={Arrow} alt="arrow" />
                    </div>
                </Link>
            )}
            <div ref={endRef} />
        </>
    );
};
