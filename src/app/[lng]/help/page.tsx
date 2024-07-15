import { Metadata } from 'next';

import { getArticles } from '@/api/help';
import { CategoryBody } from '@/app/[lng]/help/components/category-body';
import { LayoutHelp } from '@/app/[lng]/help/components/layoutHelp';
import { getServerTranslations } from '@/i18n/server';

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

    return (
        <LayoutHelp>
            <div className="hidden lg:block">
                <CategoryBody articles={topArticles} />
            </div>
        </LayoutHelp>
    );
}
