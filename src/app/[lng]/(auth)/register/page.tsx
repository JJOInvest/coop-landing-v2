import { Metadata } from 'next';

import { AuthConfirm } from '@/app/[lng]/(auth)/components/auth-confirm-form';
import { RegistrationFinishForm } from '@/app/[lng]/(auth)/components/registration-finish-form';
import { RegistrationForm } from '@/app/[lng]/(auth)/components/registration-form';

export const metadata: Metadata = {
    title: "Registration in to J'JO",
};

export default function Page() {
    return (
        <>
            <RegistrationForm />
            <AuthConfirm />
            <RegistrationFinishForm />
        </>
    );
}
