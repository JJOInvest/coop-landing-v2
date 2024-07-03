import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

import { CalculateProfit, ChartData, ProfitDetails } from './types';

dayjs.extend(quarterOfYear);
dayjs.extend(customParseFormat);

export const convertToInternationalCurrencySystem = (labelValue: string | number) =>
    Math.abs(Number(labelValue)) >= 1e9
        ? `${(Math.abs(Number(labelValue)) / 1e9).toFixed(0)}B`
        : // Six Zeroes for Millions
          Math.abs(Number(labelValue)) >= 1e6
          ? `${(Math.abs(Number(labelValue)) / 1e6).toFixed(0)}M`
          : // Three Zeroes for Thousands
            Math.abs(Number(labelValue)) >= 1e3
            ? `${(Math.abs(Number(labelValue)) / 1e3).toFixed(0)}K`
            : Math.abs(Number(labelValue));

function calculateFutureValueWithReplenishmentDetailed(
    principal: number,
    annualInterestRate: number,
    compoundingFrequency: number,
    years: number,
    periodicDeposit: number,
) {
    const n = compoundingFrequency; // количество начислений процентов в год
    const r = (1 + annualInterestRate / 100) ** (1 / (n * 12)) - 1; // преобразование годовой процентной ставки в ежемесячную
    const t = years; // количество лет

    const results = [];

    let openingAmount = principal;

    // Рассчитать будущее значение с пополнением для каждого месяца
    for (let month = 1; month <= t * 12; month++) {
        const interestEarned = openingAmount * r; // Проценты за текущий месяц
        const depositMade = periodicDeposit; // Пополнение каждый месяц
        const closingAmount = openingAmount + interestEarned + depositMade; // Закрытая сумма
        const depositSum = principal + periodicDeposit * month; // Сумма пополнений

        results.push({
            month,
            openingAmount,
            interestEarned,
            depositMade,
            closingAmount,
            depositSum,
        });

        openingAmount = closingAmount; // Обновление начальной суммы для следующей итерации
    }

    return results;
}

export const getChartProfitDataYear = (data: ProfitDetails[]) => {
    const YEAR_COUNT = 12;

    return data
        .filter((_, index) => (index + 1) % YEAR_COUNT === 0)
        .map((item, i) => {
            const { depositSum, closingAmount } = item;
            return {
                investment: Math.ceil(depositSum),
                profitability: Math.ceil(closingAmount - depositSum),
                date: dayjs().add(i, 'year').format('YYYY'),
            };
        });
};

export const getChartProfitDataMonths = (data: ProfitDetails[]) =>
    data.map((item, index) => {
        const { depositSum, closingAmount } = item;
        return {
            investment: Math.ceil(depositSum),
            profitability: Math.ceil(closingAmount - depositSum),
            date: dayjs().add(index, 'month').format('MM/YY'),
        };
    });

export const getChartProfitDataQuarter = (data: ProfitDetails[]) => {
    const QUARTER_COUNT = 3;

    return data
        .filter((_, index) => (index + 1) % QUARTER_COUNT === 0)
        .map((item, i) => {
            const { depositSum, closingAmount } = item;
            return {
                investment: Math.ceil(depositSum),
                profitability: Math.ceil(closingAmount - depositSum),
                date: dayjs()
                    .add((i + 1) * QUARTER_COUNT, 'month')
                    .format(`[Q]Q/YY`),
            };
        });
};

export const getChartProfitData = ({
    deposit,
    period,
    percent,
    replenishments,
}: CalculateProfit): ChartData[] => {
    const compoundingFrequency = 1;

    const data = calculateFutureValueWithReplenishmentDetailed(
        deposit,
        percent,
        compoundingFrequency,
        period,
        replenishments,
    );

    if (period === 1) return getChartProfitDataMonths(data as ProfitDetails[]);
    if (period === 2) return getChartProfitDataQuarter(data as ProfitDetails[]);
    return getChartProfitDataYear(data as ProfitDetails[]);
};

export const getXAxisFontSize = (isMobile: boolean, period: number) => {
    if (!isMobile) return 14;
    if (period === 1) return 6;
    if (period === 2) return 8;
    return 12;
};

export const xAxisTickFormatter = (label: string, period: number, isMobile: boolean) => {
    if (period === 1 && isMobile) {
        if (dayjs(label, 'MM/YY').month() === 11) return label;
        return dayjs(label, 'MM/YY').format('MM');
    }
    return label;
};
