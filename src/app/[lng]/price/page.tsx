import { Metadata } from 'next';
import Head from 'next/head';

import { PricePlans } from '@/app/[lng]/price/components/price-plans';
import { languages } from '@/i18n/languages';
import { getServerTranslations } from '@/i18n/server';

export const metadata: Metadata = {
    title: 'JJO Price',
};

interface Props {
    params: {
        lng: string;
    };
}

export default async function Price({ params }: Props) {
    const { t } = await getServerTranslations();

    const { lng } = params;
    const canonicalUrl = `https://jjo.finance/${lng}/price`;
    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
                {languages.map((lang) => (
                    <link
                        key={lang.isoCode}
                        rel="alternate"
                        hrefLang={lang.isoCode}
                        href={`https://jjo.finance/${lang.value}/price`}
                    />
                ))}
            </Head>
            <section className="relative pt-20 pb-20 isolate">
                <div className="absolute top-0 left-0 w-screen h-[60%] -z-10 bg-price" />

                <div className="container">
                    <h2 className="lg:text-center lg:text-[54px]/tight text-[32px]/snug font-semibold">
                        {t('choose_the_plan')}
                    </h2>
                    <h3 className="lg:text-center mt-8 lg:text-[22px]/snug text-lg/normal">
                        {t('your_financial_prosperity')}
                    </h3>
                    <p className="lg:text-center mt-3 lg:text-lg text-[16px]/normal font-light opacity-80">
                        {t('high_fees')}
                    </p>
                </div>

                <div className="mt-16">
                    <PricePlans />
                </div>
            </section>
        </>
    );
}
