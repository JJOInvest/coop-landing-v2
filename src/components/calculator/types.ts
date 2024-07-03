export interface ChartData {
    investment: number;
    profitability: number;
    date: string;
}

export interface CalculateProfit {
    deposit: number;
    period: number;
    percent: number;
    replenishments: number;
    replenishmentsPeriod?: string;
}

export interface ProfitDetails {
    month: number;
    openingAmount: any;
    interestEarned: number;
    depositMade: any;
    closingAmount: any;
    depositSum: any;
}
