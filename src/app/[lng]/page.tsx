import { Metadata } from 'next';

import { BestMinds } from '@/app/[lng]/main-page/best-minds';
import { FullControl } from '@/app/[lng]/main-page/full-control';
import { Hero } from '@/app/[lng]/main-page/hero';
import { HowItWorks } from '@/app/[lng]/main-page/how-it-works';
import { ImportantKnowledge } from '@/app/[lng]/main-page/important-knowledge';
import { MarketGrow } from '@/app/[lng]/main-page/market-grow';
import { PotentialGrow } from '@/app/[lng]/main-page/potential-grow';
import { SimpleApproach } from '@/app/[lng]/main-page/simple-approach';
import { Welcome } from '@/app/[lng]/main-page/welcome';

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
