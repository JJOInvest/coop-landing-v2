import { Metadata } from 'next';
import Head from 'next/head';

import { getArticles } from '@/api/help';
import { CategoriesList } from '@/app/[lng]/help/components/categories-list';
import { CategoryBody } from '@/app/[lng]/help/components/category-body';
import { LayoutHelp } from '@/app/[lng]/help/components/layoutHelp';
import { languages } from '@/i18n/languages';
import { getServerTranslations } from '@/i18n/server';

// export async function generateMetadata(): Promise<Metadata> {
//     const { t } = await getServerTranslations();
//     return {
//         title: t('help'),
//     };
// }

interface Props {
    params: {
        lng: string;
    };
}

export default async function Page({ params }: Props) {
    const locale = params.lng;
    const topArticles = await getArticles(locale, 8);

    const canonicalUrl = `https://jjo.finance/${locale}/help`;
    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
                {languages.map((lang) => (
                    <link
                        key={lang.isoCode}
                        rel="alternate"
                        hrefLang={lang.isoCode}
                        href={`https://jjo.finance/${lang.value}/help`}
                    />
                ))}
            </Head>
            <div className="py-16 lg:py-24">
                <div className="container">
                    <div className="lg:flex justify-between">
                        <CategoriesList />

                        <div className="hidden lg:flex max-w-[770px] w-full">
                            <CategoryBody articles={topArticles} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
