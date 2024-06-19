'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }: Props) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
