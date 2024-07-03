import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { TextInput } from '@/components/text-input';

import { Chart } from './chart';
import styles from './styles.module.css';
import { getChartProfitData } from './utils';

export interface ChartData {
    investment: number;
    profitability: number;
    date: string;
}

interface FormData {
    deposit: number;
    replenishment: number;
    profitPercent: number;
    period: number;
}

const defaultFormData: FormData = {
    deposit: 200,
    replenishment: 0,
    profitPercent: 67,
    period: 5,
};

export const Calculator = () => {
    const { register, watch, handleSubmit } = useForm({
        defaultValues: defaultFormData,
    });

    const deposit = watch('deposit');
    const profitPercent = watch('profitPercent');
    const period = watch('period');

    const [chartData, setChartData] = useState<ChartData[]>();

    const buttonEnabled = deposit > 0 && profitPercent > 0;

    const onCalculate = (formData: FormData) => {
        const { deposit, period, replenishment, profitPercent } = formData;

        const data = getChartProfitData({
            deposit,
            period: Number(period),
            percent: Number(profitPercent),
            replenishments: Number(replenishment),
        });

        setChartData(data);
    };

    useEffect(() => {
        onCalculate(defaultFormData);
    }, []);

    const onSubmit = handleSubmit((data: any) => {
        onCalculate(data);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className={styles.formWrapper}>
                    <div className={styles.blockWrapper} data-block="form">
                        <TextInput
                            id="deposit"
                            type="number"
                            startAdornment="$"
                            labels={{
                                main: 'Стартовый депозит',
                            }}
                            register={register}
                        />
                        <TextInput
                            id="replenishment"
                            register={register}
                            type="number"
                            startAdornment="$"
                            labels={{
                                main: 'Ежемесячное пополнение',
                                alt: '(опционально)',
                            }}
                        />
                        <div>
                            <div className="flex items-baseline justify-between mb-2">
                                <span className="text-sm text-brand-400/80">
                                    Инвестиционный период
                                </span>
                                <span className="text-black-100 font-semibold">
                                    {Number(period)} лет
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                {...register('period')}
                                className={styles.rangeSliderInput}
                            />
                        </div>

                        <TextInput
                            id="profitPercent"
                            register={register}
                            type="number"
                            startAdornment="%"
                            labels={{
                                main: 'Среднегодовой % J’JO35',
                            }}
                        />
                        <button
                            className="bg-black rounded-xl py-6 text-center text-sm uppercase text-white/90 font-semibold"
                            type="submit"
                            disabled={!buttonEnabled}
                        >
                            Рассчитать
                        </button>
                    </div>
                    <div className={styles.blockWrapper} data-block="chart">
                        <Chart data={chartData || []} appliedPeriod={2} />
                        <div className="bg-primary-100 rounded-xl py-2 px-11 text-black-80 text-sm text-center mx-5">
                            На графике показан потенциал роста инвестиций с течением времени на
                            основе исторических данных: начальный депозит, график пополнения, период
                            инвестирования и процентная ставка.
                        </div>
                    </div>
                    <div className={cn(styles.blockWrapper, 'flex items-center')} data-block="sum">
                        <span className="text-brand-400/80 font-medium mb-1.5">
                            Потенциальный баланс:
                        </span>
                        <div className="flex gap-2.5 items-center text-4xl">
                            <span className="text-primary-400">$</span>
                            <span className="text-black-100">
                                {chartData?.length
                                    ? (chartData.at(-1)?.profitability || 0) +
                                      (chartData.at(-1)?.investment || 0)
                                    : 0}
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};