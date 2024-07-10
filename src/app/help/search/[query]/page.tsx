import { searchArticles } from '@/api/help';
import { LayoutHelp } from '@/app/help/components/layoutHelp';
import { SearchResult } from '@/app/help/components/search-result';

interface Props {
    params: {
        query: string;
    };
}

export default async function Page({ params }: Props) {
    const locale = 'ru';
    const decodedQuery = decodeURIComponent(params.query);
    const articles = await searchArticles({ query: decodedQuery, locale, pageSize: 25 });
    return (
        <LayoutHelp>
            <SearchResult articles={articles} query={decodedQuery} />
        </LayoutHelp>
    );
}
