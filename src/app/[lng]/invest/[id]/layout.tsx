import { ReactNode } from 'react';

import { InvestHeader } from '@/app/[lng]/invest/components/header';
import { InvestMenu } from '@/app/[lng]/invest/components/invest-menu';
import { StartWhenever } from '@/app/[lng]/invest/components/start-whenever';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

interface Props {
    children: ReactNode;
    params: {
        id: string;
    };
}

export default async function InvestLayout({ children, params }: Props) {
    const { t } = await getServerTranslations();

    return (
        <>
            <InvestHeader />
            <div className="flex flex-col lg:flex-row bg-white lg:my-24 gap-7">
                <div className="lg:max-w-[355px]">
                    <div className="sticky top-24">
                        <div className="overflow-hidden lg:rounded-r-xl">
                            <InvestMenu id={params.id} />
                        </div>
                        <div className="bg-black rounded-r-lg">
                            <Button className="mt-2 lg:mt-4 lg:block hidden" block>
                                {t('build_financial_future')}
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container py-20 lg:p-0 lg:max-w-[870px]">{children}</div>
            </div>
            <StartWhenever />
        </>
    );
}
