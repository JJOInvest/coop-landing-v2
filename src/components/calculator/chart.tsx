'use client';

import { useTranslation } from 'react-i18next';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import type { Payload } from 'recharts/types/component/DefaultLegendContent';
import { useMediaMatch } from 'rooks';

import { ChartData } from './types';
import { convertToInternationalCurrencySystem, getXAxisFontSize } from './utils';

interface Props {
    data: ChartData[];
    appliedPeriod: number;
}

export const Chart = ({ data, appliedPeriod }: Props) => {
    const { t } = useTranslation();
    const isMobile = useMediaMatch('(max-width: 1024px)');

    const renderLegend = ({ payload }: { payload: Payload[] }) => {
        return (
            <div className="flex justify-center gap-8">
                {payload.map(({ value, color }) => (
                    <div className="flex items-center gap-2 text-xs text-primary-400" key={value}>
                        <div className="size-2.5 rounded-xl" style={{ background: color }} />
                        <div>{value === 'investment' ? t('investments') : t(value)}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full h-[325px] lg:h-full">
            <ResponsiveContainer width="99%" height="99%">
                <BarChart
                    width={200}
                    height={200}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <Legend
                        verticalAlign="top"
                        align="center"
                        wrapperStyle={{ top: -10, left: 25 }}
                        iconType="circle"
                        formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}
                        fontSize={14}
                        content={renderLegend as any}
                    />
                    <CartesianGrid strokeDasharray="10 10" vertical={false} />
                    <XAxis
                        dataKey="date"
                        interval={0}
                        fontSize={getXAxisFontSize(isMobile, appliedPeriod)}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        tickFormatter={(value) => `$${convertToInternationalCurrencySystem(value)}`}
                        tickLine={false}
                        axisLine={false}
                        color="rgba(96, 116, 169, 0.2)"
                        fontSize={14}
                        style={{ fillOpacity: 0.8 }}
                    />
                    <Tooltip />
                    <Bar
                        barSize={isMobile ? 16 : 64}
                        dataKey="investment"
                        stackId="a"
                        fill="#F96C41"
                    />
                    <Bar
                        dataKey="profitability"
                        stackId="a"
                        fill="#FBA78D"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
