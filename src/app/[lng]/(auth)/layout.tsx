import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <section className="min-h-screen py-20 bg-auth">
            <div className="container flex items-center justify-center">
                <div className="bg-white rounded-xl max-w-[560px] w-full overflow-hidden">
                    {children}
                </div>
            </div>
        </section>
    );
}
