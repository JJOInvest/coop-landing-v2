import { Metadata } from 'next';

import { InvestPage } from '@/routes/invest-page';

export const metadata: Metadata = {
    title: 'JJO Invest',
};

export default function Invest({
    searchParams,
}: {
    searchParams: {
        articleId: string;
    };
}) {
    return <InvestPage articleId={searchParams.articleId} />;
}
