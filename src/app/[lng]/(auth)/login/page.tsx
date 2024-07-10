import { Metadata } from 'next';

import { AuthConfirm } from '@/app/[lng]/(auth)/components/auth-confirm-form';
import { LoginForm } from '@/app/[lng]/(auth)/components/login-form';

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
