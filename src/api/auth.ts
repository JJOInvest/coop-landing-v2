import { api } from '@/api/api';

// Register
export type RegisterDto = {
    email: string;
    password: string;
    countryCodeIso?: string;
    referralCode?: string;
    isSubscribed: boolean;
    languageCodeIso?: string;
    // "yandexClientId","googleClientId","utms"
    retargetData?: string;
};

export type AuthResponse = {
    data: {
        // Для отображения времени повторнтого запроса кода
        code_repeat_at: string;
        tz: string;
    };
};

export async function register(dto: RegisterDto): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/users/register', dto);
    return data;
}

export type ConfirmRegisterDto = {};

export async function confirmRegister(dto: ConfirmRegisterDto): Promise<void> {
    await api.post<void>('/users/register-confirm', dto);
}

export type FinishRegisterDto = {
    email: string;
    code: string; // 0000 for dev
    surname: string;
    name: string;
    countryCodeIso: string;
};

export async function finishRegister(dto: FinishRegisterDto): Promise<void> {
    await api.post<void>('/users/register-finish', dto);
}

// Login

export type LoginDto = {
    email: string;
    password: string;
};

export async function login(dto: LoginDto): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/users/login', dto);
    return data;
}

export type ConfirmLoginDto = {
    email: string;
    password: string;
    code: string;
};

export type ConfirmLoginResponse = {
    data: {
        accessToken: string;
    };
};

export async function confirmLogin(dto: ConfirmLoginDto): Promise<ConfirmLoginResponse> {
    const { data } = await api.post<ConfirmLoginResponse>('/users/login-confirm', dto);
    return data;
}
