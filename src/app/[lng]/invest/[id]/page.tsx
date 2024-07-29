import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { getArticle } from '@/api/help';
import { InvestCalculator } from '@/app/[lng]/invest/[id]/components/invest-calculator';
import { ZendeskContent } from '@/app/[lng]/invest/[id]/components/zendesk-content';
import { News } from '@/app/[lng]/invest/components/news';
import { investPagesIds } from '@/app/[lng]/invest/constants';
import { languages } from '@/i18n/languages';
import { detectLanguage, getServerTranslations } from '@/i18n/server';

import Arrow from '../assets/arrow-icon.svg';

interface Props {
    params: {
        id: string;
        lng: string;
    };
}

export async function generateStaticParams() {
    return investPagesIds.map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const language = await detectLanguage();

    const articleId = parseInt(params.id, 10);
    const article = await getArticle(language, articleId);

    const { title } = article;

    return {
        title: `${title} - JJO Invest`,
    };
}

export default async function Page({ params }: Props) {
    const articleId = parseInt(params.id, 10);
    const { t, i18n } = await getServerTranslations();

    const article = await getArticle(params.lng, articleId);
    const { lng } = params;
    const canonicalUrl = `https://jjo.finance/${lng}/invest/${articleId}`;

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
                {languages.map((lang) => (
                    <link
                        key={lang.isoCode}
                        rel="alternate"
                        hrefLang={lang.isoCode}
                        href={`https://jjo.finance/${lang.value}/invest/${articleId}`}
                    />
                ))}
            </Head>
            <div className="px-0 pb-20 pt-12 lg:p-0 lg:max-w-[870px]">
                {/*<h1 className="text-4xl font-medium text-black">{article.name}</h1>*/}
                {/*<div*/}
                {/*    className="mt-6 lg:mt-10 zendesk-content"*/}
                {/*    dangerouslySetInnerHTML={{ __html: article.body }}*/}
                {/*/>*/}
                <ZendeskContent article={article} params={params} />
                {/*{params.id === '33181283962009' && <News />}*/}
                {/*{params.id === '33181863366425' && <InvestCalculator />}*/}
                {/*{params.id === '33961919663385' && (*/}
                {/*    <Link href={`/${i18n.language}/invest/33181283962009`}>*/}
                {/*        <div className="flex gap-6 justify-between p-6 rounded-xl bg-invest text-white mt-10 lg:hidden">*/}
                {/*            <div>{t('index_growth_savings')}</div>*/}
                {/*            <Image src={Arrow} alt="arrow" />*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*)}*/}
                {/*{params.id === '33181283962009' && (*/}
                {/*    <Link href={`/${i18n.language}/invest/33181863366425`}>*/}
                {/*        <div className="flex gap-6 justify-between p-6 rounded-xl bg-invest text-white mt-10 lg:hidden">*/}
                {/*            <div>{t('crypto_market_growth_potential')}</div>*/}
                {/*            <Image src={Arrow} alt="arrow" />*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*)}*/}
                {/*{params.id === '33181863366425' && (*/}
                {/*    <Link href={`/${i18n.language}/invest/33961919663385`}>*/}
                {/*        <div className="flex gap-6 justify-between p-6 rounded-xl bg-invest text-white mt-10 lg:hidden">*/}
                {/*            <div>{t('what_is_jjo')}</div>*/}
                {/*            <Image src={Arrow} alt="arrow" />*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*)}*/}
            </div>
        </>
    );
}
