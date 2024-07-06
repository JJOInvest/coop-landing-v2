'use client';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/button';

interface PricePlan {
    name: string;
    price: string;
    markKey: string;
    advantageKeys: string[];
    label?: {
        textKey: string;
        color: string;
    };
}

const pricePlans: PricePlan[] = [
    {
        name: 'FREE',
        price: '0.0',
        markKey: 'price.plans.free.mark',
        advantageKeys: [
            'price.plans.advantages.only-1',
            'price.plans.advantages.index-jjo-only',
            'price.plans.advantages.max-500',
            'price.plans.advantages.personal-support',
        ],
    },
    {
        name: 'ULTRA-6',
        price: '13.33',
        markKey: 'price.plans.ultra-6.mark',
        advantageKeys: [
            'price.plans.advantages.no-limit',
            'price.plans.advantages.all-indexes',
            'price.plans.advantages.index-create',
            'price.plans.advantages.rebalance',
            'price.plans.advantages.backtests',
            'price.plans.advantages.max-no-limit',
            'price.plans.advantages.referal-jjo',
            'price.plans.advantages.personal-support',
        ],
        label: {
            color: '#4a6ee2',
            textKey: 'price.popular',
        },
    },
    {
        name: 'ULTRA-12',
        price: '11.66',
        markKey: 'price.plans.ultra-12.mark',
        advantageKeys: [
            'price.plans.advantages.no-limit',
            'price.plans.advantages.all-indexes',
            'price.plans.advantages.index-create',
            'price.plans.advantages.rebalance',
            'price.plans.advantages.backtests',
            'price.plans.advantages.max-no-limit',
            'price.plans.advantages.referal-jjo',
            'price.plans.advantages.personal-support',
        ],
        label: {
            color: '#f94162',
            textKey: 'price.profitable',
        },
    },
];

export const PricePlans = () => {
    const { t } = useTranslation();

    return (
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricePlans.map((pricePlan) => (
                <div
                    key={pricePlan.name}
                    className={cn(
                        'relative p-8 flex-grow rounded-[16px] overflow-hidden drop-shadow-xl',
                        {
                            'bg-black text-white': pricePlan.name !== 'FREE',
                            'bg-white text-black': pricePlan.name === 'FREE',
                        },
                    )}
                >
                    {pricePlan.label && (
                        <div
                            className="absolute top-0 right-0 px-3 py-[6px] rounded-bl-[16px] text-sm"
                            style={{
                                background: pricePlan.label.color,
                            }}
                        >
                            {t(pricePlan.label.textKey)}
                        </div>
                    )}

                    <h5 className="text-xl">{pricePlan.name}</h5>
                    <div className="flex gap-2 items-end mt-7">
                        <p className="text-5xl">{`$${t(pricePlan.price)}`}</p>
                        <p className="text-[16px]/normal">{`/${t('price.month')}`}</p>
                    </div>
                    <p
                        className={cn('text-[15px]/snug mt-2', {
                            'text-black/30': pricePlan.name === 'FREE',
                            'text-salad': pricePlan.name !== 'FREE',
                        })}
                    >
                        {t(pricePlan.markKey)}
                    </p>

                    <Button
                        className="mt-6 border-black border-[1px] bg-white text-black hover:border-white"
                        block
                        variant="outline"
                    >
                        {t(pricePlan.name === 'FREE' ? 'price.try-free' : 'price.connect')}
                    </Button>

                    <div className="flex flex-col gap-2 mt-6">
                        {pricePlan.advantageKeys.map((advantageKey) => (
                            <div
                                key={advantageKey}
                                className="flex items-center gap-2 text-[15px]/snug"
                            >
                                <div className="bg-orange-100 h-[6px] w-[6px] rounded" />
                                {t(advantageKey)}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
