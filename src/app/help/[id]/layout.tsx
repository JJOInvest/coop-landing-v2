import { ReactNode } from 'react';

import { LayoutHelp } from '@/app/help/components/layoutHelp';
import { InvestHeader } from '@/app/invest/components/header';
import { InvestMenu } from '@/app/invest/components/invest-menu';
import { StartWhenever } from '@/app/invest/components/start-whenever';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

interface Props {
    children: ReactNode;
}

export default async function ArticleLayout({ children }: Props) {
    const { t } = await getServerTranslations();

    return <LayoutHelp forArticles>{children}</LayoutHelp>;
}
