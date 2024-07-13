import cn from 'classnames';
import { Metadata } from 'next';
import Image from 'next/image';

import { getArticle } from '@/api/help';
import { News } from '@/app/[lng]/invest/components/news';
import { investPagesIds } from '@/app/[lng]/invest/constants';
import { Calculator } from '@/components/calculator';
import { detectLanguage } from '@/i18n/server';

import JJO from '@/assets/jjo.svg';

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

    const article = await getArticle(params.lng, articleId);

    return (
        <div className="px-0 py-20 lg:p-0 lg:max-w-[870px]">
            <h1 className="text-4xl font-medium text-black">{article.name}</h1>
            <div
                className="mt-6 lg:mt-10 zendesk-content"
                dangerouslySetInnerHTML={{ __html: article.body }}
            />
            {params.id === '33181283962009' && <News />}
            {params.id === '33181863366425' && (
                <div>
                    <div className="mb-6 text-center font-bold text-black-100">the_average</div>
                    <div className="flex items-center justify-center">
                        <div className="my-8 py-2 px-4 text-[16px] font-bold bg-opacity-20 bg-white flex gap-2 rounded-md justify-center self-center mx-auto inline-flex rounded-md bg-investAvgProfit p-0.5">
                            <Image src={JJO} alt={"j'jo"} />
                            <span>+212 %</span>
                        </div>
                    </div>
                    <Calculator />
                </div>
            )}
        </div>
    );
}
