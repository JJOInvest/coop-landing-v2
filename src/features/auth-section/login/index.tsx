'use client';

import { useContext } from 'react';

import { authContext } from '@/features/auth-section/auth-context';

import { Confirm } from './steps/confirm';
import { Enter } from './steps/enter';

export const Login = () => {
    const { step } = useContext(authContext);

    switch (step) {
        case 'enter':
            return <Enter />;
        case 'confirm':
            return <Confirm />;
    }
};
