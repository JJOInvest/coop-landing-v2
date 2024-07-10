import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

export async function InvestHeader() {
    const { t } = await getServerTranslations();

    return (
        <div className="relative w-screen">
            <div className="relative py-[90px] bg-investArticle">
                <div className="container flex flex-col gap-6 lg:flex-row lg:justify-between">
                    <div className="text-[32px]/snug font-medium lg:text-[64px] leading-[1.2] max-w-[500px]">
                        {t('invest.title')}
                    </div>
                    <p className="text-black/60 text-lg max-w-96 pr-5">{t('invest.description')}</p>
                    <Button className="mt-2 lg:hidden" block>
                        {t('invest.button')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
