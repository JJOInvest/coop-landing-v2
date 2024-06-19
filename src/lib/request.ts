import axios, { AxiosError, AxiosResponse } from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
});

interface ResponseData extends Record<string, any> {}
type RequestParams = { [key: string]: string | number | boolean };
type OptionalParams = any;

const withAuth =
    <P = RequestParams, T = ResponseData>(
        requestFunc: (
            url: string,
            data: P,
            headers: any,
            optionalParams?: OptionalParams,
        ) => Promise<T>,
        accessToken?: string | null,
    ) =>
    async (url: string, data: P, optionalParams: OptionalParams = {}) => {
        let token = accessToken;

        if (typeof window !== 'undefined') {
            token = getCookie('accessToken');
        }

        try {
            const headers = { Authorization: `Bearer ${token}` };
            return await requestFunc(url, data, headers, optionalParams);
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError?.response?.status === 401) {
                if (typeof window !== 'undefined') {
                    deleteCookie('accessToken');
                }
                redirect('/login');
            } else {
                console.error('Error in request:', error);
                throw axiosError;
            }
        }
    };

export const getRequest = async <P = {}, R = ResponseData>(
    url: string,
    params: P,
    headers: Record<string, string> = {},
    optionalParams: OptionalParams = {},
): Promise<R> => {
    try {
        const response: AxiosResponse<R> = await api.get(url, {
            ...optionalParams,
            params,
            headers,
        });
        return response.data;
    } catch (error) {
        console.error('Error in GET request:', error);
        throw error;
    }
};

export const postRequest = async <P = Record<string, any>>(
    url: string,
    data: P,
    headers: Record<string, string> = {},
    optionalParams: OptionalParams = {},
): Promise<ResponseData> => {
    try {
        const response: AxiosResponse<ResponseData> = await api.post(url, data, {
            ...optionalParams,
            headers,
        });
        return response.data;
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
};

export const authorizedGetRequest = <P = RequestParams, R = ResponseData>(
    accessToken?: string | null,
) => withAuth<P, R>(getRequest<P, R>, accessToken);

export const authorizedPostRequest = <P = RequestParams>(accessToken?: string | null) =>
    withAuth<P>(postRequest<P>, accessToken);
