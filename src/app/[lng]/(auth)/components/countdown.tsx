'use client';

import { useEffect, useState } from 'react';

export const Countdown = () => {
    const [value, setValue] = useState(59);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue((v) => v - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    if (value < 1) {
        return null;
    }

    return <div className="inline-block ml-2 text-15 leading-5 text-grey-70">00:{value}</div>;
};
