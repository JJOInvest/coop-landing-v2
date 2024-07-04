import { apiPostRequest } from '@/api/api';

const register = async (params: RegisterParams): Promise<CodeRepeatResponse> =>
    apiPostRequest<CodeRepeatResponse>({
        path: '/users/register',
        params,
    });

const registerConfirm = async (params: RegisterConfirmParams): Promise<void> =>
    apiPostRequest<void>({
        path: '/users/register-confirm',
        params,
    });

const registerFinish = async (params: RegisterFinishParams): Promise<AccessTokenResponse> =>
    apiPostRequest<AccessTokenResponse>({
        path: '/users/register-finish',
        params,
    });

const login = async (params: BaseUserParams): Promise<CodeRepeatResponse> =>
    apiPostRequest<CodeRepeatResponse>({
        path: '/users/login',
        params,
    });

const loginConfirm = async (params: LoginConfirmParams): Promise<AccessTokenResponse> =>
    apiPostRequest<AccessTokenResponse>({
        path: '/users/login-confirm',
        params,
    });

export interface BaseUserParams {
    email: string;
    password: string;
}

interface LoginConfirmParams extends BaseUserParams {
    code: string;
}

interface AccessTokenResponse {
    accessToken: string;
}

interface CodeRepeatResponse {
    code_repeat_at: 'string';
    tz: 'string';
}

interface RegisterParams extends BaseUserParams {
    countryCodeIso?: string;
    referralCode?: string;
    isSubscribed: boolean;
    languageCodeIso?: string; // "yandexClientId","googleClientId","utms"
    retargetData?: string;
}

interface RegisterConfirmParams {
    email: string;
    code: string;
}

interface RegisterFinishParams {
    email: string;
    code: string;
    surname: string;
    name: string;
    countryCodeIso: string;
}

export const authApi = {
    login,
    loginConfirm,
    register,
    registerConfirm,
    registerFinish,
};
