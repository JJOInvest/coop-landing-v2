import axios from 'axios';
import qs from 'qs';

export interface RequestToken {
    token?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_API_DOMAIN is not defined');
}

export interface Request extends RequestToken {
    path: string;
    params?: Record<string, any>;
    jsonBody?: boolean;
}

export const axiosInstance = axios.create({
    baseURL: baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`,
    headers: {
        'Cache-Control': 'force-cache',
    },
});

export const apiPostRequest = async <T>({ path, params, token, jsonBody }: Request): Promise<T> => {
    try {
        const result = await axiosInstance({
            method: 'POST',
            data: jsonBody ? params : qs.stringify(params),
            url: path,
            headers: {
                'Content-Type': jsonBody ? 'application/json' : 'application/x-www-form-urlencoded',
                Authorization: token ? `Bearer ${token}` : '',
            },
        });
        const { data } = result.data;
        return data;
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(`Request to ${path} failed, status code: ${error.response.status}`);
        } else {
            throw error;
        }
    }
};
