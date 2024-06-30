'use client';

import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/button';

import styles from './grow-form.styles.css';

interface GrowForm {
    startDeposit: number;
    monthlyDeposit: number;
    investPeriod: number;
    averageJJO: number;
}

export const GrowForm = () => {
    const { t } = useTranslation();
    const { register } = useForm<GrowForm>();

    return (
        <form className={'bg-white rounded-xl p-6 lg:max-w-[400px] flex flex-col gap-6 shadow-box'}>
            <div className={'flex flex-col gap-2'}>
                <span className={'text-brand-400'}>{t('potential.form.start-deposit')}</span>

                <label className={'input input-bordered flex items-center gap-2 text-black'}>
                    <div className={'text-primary-400 text-lg/relaxed font-medium font-decorate'}>
                        $
                    </div>
                    <input type={'number'} placeholder={'100 000'} {...register('startDeposit')} />
                </label>
            </div>

            <div className={'flex flex-col gap-2'}>
                <span className={'text-brand-400 flex items-center gap-0.5 lg:justify-between'}>
                    {t('potential.form.monthly-deposit')}
                    <span>({t('potential.form.optional')})</span>
                </span>

                <label className={'input input-bordered flex items-center gap-2 text-black'}>
                    <div className={'text-primary-400 text-lg/relaxed font-medium font-decorate'}>
                        $
                    </div>
                    <input type={'number'} placeholder={'500'} {...register('monthlyDeposit')} />
                </label>
            </div>

            <div className={'flex flex-col gap-2'}>
                <span className={'text-brand-400 flex items-center justify-between'}>
                    {t('potential.form.period')}
                    <span className={'text-black'}>{`5 ${t('potential.form.years')}`}</span>
                </span>
                <input
                    type={'range'}
                    min={0}
                    max={10}
                    className={cn('range range-xs text-orange-50', styles.range)}
                    style={{
                        // Нужен для добавления переменной
                        // @ts-ignore
                        '--range-shdw': '#f96c41',
                    }}
                    {...register('investPeriod')}
                />
            </div>

            <div className={'flex flex-col gap-2'}>
                <span className={'text-brand-400'}>{t('potential.form.average')}</span>

                <label className={'input input-bordered flex items-center gap-2 text-black'}>
                    <div className={'text-primary-400 text-lg/relaxed font-medium font-decorate'}>
                        %
                    </div>
                    <input type={'number'} placeholder={'500'} {...register('averageJJO')} />
                </label>
            </div>

            <Button className={'max-h-14 p-0 lg:p-0'}>Расчитать</Button>

            <div className={'flex flex-col gap-2 items-center lg:hidden'}>
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
        </form>
    );
};
