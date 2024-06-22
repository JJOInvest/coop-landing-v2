import { BestMinds } from '@/features/best-minds';
import { Hero } from '@/features/hero';
import { PotentialGrow } from '@/features/potential-grow';
import { SimpleApproach } from '@/features/simple-approach';

export const MainPage = () => {
    return (
        <>
            <Hero />
            <SimpleApproach />
            <PotentialGrow />
            <BestMinds />
        </>
    );
};
