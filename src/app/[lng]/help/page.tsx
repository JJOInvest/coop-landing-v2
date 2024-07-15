import { Metadata } from 'next';

import { getArticles } from '@/api/help';
import { CategoryBody } from '@/app/[lng]/help/components/category-body';

// export async function generateMetadata(): Promise<Metadata> {
//     const { t } = await getServerTranslations();
//     return {
//         title: t('help'),
//     };
// }

interface Props {
    params: {
        lng: string;
    };
}

export default async function Page({ params }: Props) {
    const locale = params.lng;
    const topArticles = await getArticles(locale, 8);

    return <CategoryBody articles={topArticles} />;
}
