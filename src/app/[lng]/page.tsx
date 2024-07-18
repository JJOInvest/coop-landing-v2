import { Metadata } from 'next';
import Head from 'next/head';

import { BestMinds } from '@/app/[lng]/main-page/best-minds';
import { FullControl } from '@/app/[lng]/main-page/full-control';
import { Hero } from '@/app/[lng]/main-page/hero';
import { HowItWorks } from '@/app/[lng]/main-page/how-it-works';
import { ImportantKnowledge } from '@/app/[lng]/main-page/important-knowledge';
import { MarketGrow } from '@/app/[lng]/main-page/market-grow';
import { PotentialGrow } from '@/app/[lng]/main-page/potential-grow';
import { PromoVideo } from '@/app/[lng]/main-page/promo-video';
import { SimpleApproach } from '@/app/[lng]/main-page/simple-approach';
import { Welcome } from '@/app/[lng]/main-page/welcome';
import { languages } from '@/i18n/languages';

export const metadata: Metadata = {
    title: 'JJO',
};

export default function Main() {
    return (
        <>
            <Head>
                {languages.map((lang) => (
                    <link
                        key={lang.isoCode}
                        rel="alternate"
                        hrefLang={lang.isoCode}
                        href={`https://jjo.finance/${lang.value}`}
                    />
                ))}
            </Head>
            <Hero />
            <SimpleApproach />
            <PotentialGrow />
            <BestMinds />
            <MarketGrow />
            <FullControl />
            <ImportantKnowledge />
            <HowItWorks />
            <Welcome />
        </>
    );
}
