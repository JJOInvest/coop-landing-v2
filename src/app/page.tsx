import { Metadata } from 'next';

import { MainPage } from '@/routes/main-page';

export const metadata: Metadata = {
    title: 'JJO',
};

export default function Main() {
    return <MainPage />;
}
