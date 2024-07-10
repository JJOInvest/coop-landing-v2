import { ReactNode } from 'react';

import { LayoutHelp } from '@/app/[lng]/help/components/layoutHelp';

interface Props {
    children: ReactNode;
}

export default async function ArticleLayout({ children }: Props) {
    return <LayoutHelp forArticles>{children}</LayoutHelp>;
}
