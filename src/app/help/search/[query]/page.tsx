import { searchArticles } from '@/api/help';
import { Layout } from '@/app/help/components/layout';
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
        <Layout>
            <SearchResult articles={articles} query={decodedQuery} />
        </Layout>
    );
}
