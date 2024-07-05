import { createContext, PropsWithChildren, useState } from 'react';

export type AuthStep = 'enter' | 'confirm';

export type AuthType = 'login' | 'register';

const nextSteps: Record<AuthStep, AuthStep> = {
    enter: 'confirm',
    confirm: 'enter',
};

export type AuthContext = {
    step: AuthStep;
    type: AuthType;
    setType: (value: AuthType) => void;
    nextStep: () => void;
    email?: string;
    password?: string;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
    codeRepeatAt?: Date;
    setCodeRepeatAt: (value: Date) => void;
};

export const authContext = createContext<AuthContext>({
    step: 'enter',
    type: 'login',
    setType: () => {},
    nextStep: () => {},
    setEmail: () => {},
    setPassword: () => {},
    setCodeRepeatAt: () => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [type, setType] = useState<AuthType>('login');

    const [step, setStep] = useState<AuthStep>('enter');
    const nextStep = () => setStep(nextSteps[step]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [codeRepeatAt, setCodeRepeatAt] = useState<Date>();

    return (
        <authContext.Provider
            value={{
                step,
                nextStep,
                email,
                setEmail,
                password,
                setPassword,
                codeRepeatAt,
                setCodeRepeatAt,
                type,
                setType,
            }}
        >
            {children}
        </authContext.Provider>
    );
};
