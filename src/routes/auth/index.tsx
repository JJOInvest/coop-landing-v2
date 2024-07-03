import { AuthSection } from '@/features/auth-section';

export const AuthPage = () => {
    return (
        <section className={'h-screen py-40 bg-auth'}>
            <div className={'container flex items-center justify-center'}>
                <AuthSection />
            </div>
        </section>
    );
};
