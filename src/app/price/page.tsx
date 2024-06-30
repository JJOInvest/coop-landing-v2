import { Metadata } from 'next';

import { PricePage } from '@/routes/price-page';

export const metadata: Metadata = {
    title: 'JJO Price',
};

export default function Price() {
    return <PricePage />;
}
