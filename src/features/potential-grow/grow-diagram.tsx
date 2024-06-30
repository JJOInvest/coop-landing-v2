'use client';

import { useTranslation } from 'react-i18next';

export const GrowDiagram = () => {
    const { t } = useTranslation();

    return (
        <div className={'flex flex-col gap-4 text-black flex-grow'}>
            <div className={'flex-grow bg-white rounded-xl min-h-10 shadow-box'}>Hello</div>

            <div
                className={
                    'flex-col gap-2 items-center lg:flex hidden shadow-box bg-white rounded-xl py-4'
                }
            >
                <span
                    className={'text-brand-400 text-center text-[16px]/[1.5]'}
                >{`${t('potential.form.balance')}:`}</span>
                <div className={'flex items-end gap-2'}>
                    <div className={'text-primary-400 text-3xl/[32px] font-medium font-decorate'}>
                        $
                    </div>
                    <div className={'text-black text-[40px]/[40px]'}>1,062.00</div>
                </div>
            </div>
        </div>
    );
};
