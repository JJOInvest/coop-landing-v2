import { ReactNode } from 'react';

import { Switcher } from '@/app/(auth)/components/switcher';

export default async function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <section className="h-screen py-40 bg-auth">
            <div className="container flex items-center justify-center">
                <div className="bg-white rounded-xl max-w-[560px] w-full overflow-hidden">
                    {children}
                </div>
            </div>
        </section>
    );
}
