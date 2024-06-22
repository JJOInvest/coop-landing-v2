import { GrowDiagram } from '@/features/potential-grow/grow-diagram';
import { GrowForm } from '@/features/potential-grow/grow-form';
import { PercentGrow } from '@/features/potential-grow/percent-grow';
import { getServerTranslations } from '@/i18n/server';

export const PotentialGrow = async () => {
    const { t } = await getServerTranslations();

    return (
        <section className={'bg-[#f96c41] py-20 lg:py-28 text-white'}>
            <div className={'container flex flex-col'}>
                <h2 className={'text-2xl lg:text-5xl lg:text-center'}>{t('potential.title')}</h2>
                <p className={'text-lg lg:text-xl lg:text-center mt-6 font-light opacity-80'}>
                    {t('potential.description')}
                </p>
                <PercentGrow />

                <div className={'flex flex-col lg:flex-row lg:gap-6 gap-8'}>
                    <GrowForm />
                    <GrowDiagram />
                </div>

                <p
                    className={
                        'mt-8 lg:mt-6 text-center text-xs/snug lg:text-[16px] lg:leading-normal font-light'
                    }
                >
                    {t('potential.remark')}
                </p>
            </div>
        </section>
    );
};
