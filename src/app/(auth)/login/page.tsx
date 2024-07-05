import { Metadata } from 'next';

import { AuthConfirm } from '@/app/(auth)/components/auth-confirm-form';
import { LoginForm } from '@/app/(auth)/components/login-form';

export const metadata: Metadata = {
    title: "Log in to J'JO",
};

export default function Page() {
    return (
        <>
            <LoginForm />
            <AuthConfirm />
        </>
    );
}
