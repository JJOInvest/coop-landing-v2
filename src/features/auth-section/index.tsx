'use client';

import { AuthContextProvider } from '@/features/auth-section/auth-context';
import { AuthView } from '@/features/auth-section/auth-view';

export const AuthSection = () => {
    return (
        <AuthContextProvider>
            <div className={'bg-white rounded-xl max-w-[560px] w-full overflow-hidden'}>
                <AuthView />
            </div>
        </AuthContextProvider>
    );
};
