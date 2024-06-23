import { BestMinds } from '@/features/best-minds';
import { FullControl } from '@/features/full-control';
import { Hero } from '@/features/hero';
import { HowItWorks } from '@/features/how-it-works';
import { ImportantKnowledge } from '@/features/important';
import { MarketGrow } from '@/features/market-grow';
import { PotentialGrow } from '@/features/potential-grow';
import { SimpleApproach } from '@/features/simple-approach';

export const MainPage = () => {
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
        </>
    );
};
