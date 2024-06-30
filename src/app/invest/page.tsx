import { InvestPage } from '@/routes/invest-page';

export default function Invest({
    searchParams,
}: {
    searchParams: {
        articleId: string;
    };
}) {
    return <InvestPage articleId={searchParams.articleId} />;
}
