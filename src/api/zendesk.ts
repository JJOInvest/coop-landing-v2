import axios from 'axios';

export const zendesk = axios.create({
    baseURL: process.env.ZENDESK_URL,
    headers: {
        Authorization: `Basic ${process.env.ZENDESK_TOKEN}`,
    },
});
