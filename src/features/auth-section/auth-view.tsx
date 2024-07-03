import { useContext } from 'react';

import { authContext } from '@/features/auth-section/auth-context';
import { Login } from '@/features/auth-section/login';
import { Register } from '@/features/auth-section/register';

export const AuthView = () => {
    const { type } = useContext(authContext);

    if (type === 'register') {
        return <Register />;
    }

    return <Login />;
};
