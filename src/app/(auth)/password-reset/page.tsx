import { Metadata } from 'next';

import { AuthConfirm } from '@/app/(auth)/components/auth-confirm-form';
import { PasswordResetForm } from '@/app/(auth)/components/password-reset-form';
import { ResetDone } from '@/app/(auth)/components/reset-done';
import { ResetFinishForm } from '@/app/(auth)/components/reset-finish-form';

export const metadata: Metadata = {
    title: "Forgot password in J'JO",
};

export default function Page() {
    return (
        <>
            <PasswordResetForm />
            <AuthConfirm />
            <ResetFinishForm />
            <ResetDone />
        </>
    );
}
