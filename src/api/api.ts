import axios from 'axios';
import qs from 'qs';

export interface RequestToken {
    token?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

export interface Request extends RequestToken {
    path: string;
    params?: Record<string, any>;
    jsonBody?: boolean;
}

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Cache-Control': 'force-cache',
    },
});

export const apiPostRequest = async <T>({ path, params, token, jsonBody }: Request): Promise<T> => {
    try {
        const result = await axios({
            method: 'POST',
            data: jsonBody ? params : qs.stringify(params),
            url: `${baseUrl}${path}`,
            headers: {
                'Content-Type': jsonBody ? 'application/json' : 'application/x-www-form-urlencoded',
            },
        });
        const { data } = await result.data;
        return data;
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(`Request to ${path} failed, status code: ${error.response.status}`);
        } else {
            throw error;
        }
    }
};
