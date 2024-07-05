import { Metadata } from 'next';

import { BestMinds } from '@/app/main-page/best-minds';
import { FullControl } from '@/app/main-page/full-control';
import { Hero } from '@/app/main-page/hero';
import { HowItWorks } from '@/app/main-page/how-it-works';
import { ImportantKnowledge } from '@/app/main-page/important-knowledge';
import { MarketGrow } from '@/app/main-page/market-grow';
import { PotentialGrow } from '@/app/main-page/potential-grow';
import { SimpleApproach } from '@/app/main-page/simple-approach';
import { Welcome } from '@/app/main-page/welcome';

export const metadata: Metadata = {
    title: 'JJO',
};

export default function Main() {
    return (
        <>
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
