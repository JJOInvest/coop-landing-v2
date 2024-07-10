import { Metadata } from 'next';

import { AuthConfirm } from '@/app/[lng]/(auth)/components/auth-confirm-form';
import { PasswordResetForm } from '@/app/[lng]/(auth)/components/password-reset-form';
import { ResetDone } from '@/app/[lng]/(auth)/components/reset-done';
import { ResetFinishForm } from '@/app/[lng]/(auth)/components/reset-finish-form';

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
