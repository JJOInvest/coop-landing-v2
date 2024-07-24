import { ReactNode } from 'react';

import { LayoutHelp } from '@/app/[lng]/help/components/layoutHelp';

interface Props {
    children: ReactNode;
}

export default async function Layout({ children }: Props) {
    return (
        <>
            <LayoutHelp forArticles>
                <div className="">{children}</div>
            </LayoutHelp>
        </>
    );
}
