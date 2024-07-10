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
    console.log(params.query);
    const articles = await searchArticles({ query: params.query, locale, pageSize: 25 });
    return (
        <Layout>
            <SearchResult articles={articles} query={params.query} />
        </Layout>
    );
}
