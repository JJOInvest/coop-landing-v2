'use client';

import { useMediaMatch } from 'rooks';

import './progress.css';

interface Props {
    isActive: boolean;
}

export const CircleChart = ({ isActive }: Props) => {
    const isMobile = useMediaMatch('(max-width: 1024px)');

    return (
        <svg
            className="circle-chart"
            viewBox="0 0 33.83098862 33.83098862"
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className="circle-chart__background"
                stroke="#000"
                strokeWidth="0.5"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="15.91549431"
                style={{ strokeOpacity: 0.3 }}
            />
            {isActive && (
                <circle
                    className="circle-chart__circle"
                    stroke="red"
                    strokeWidth="1"
                    strokeDasharray="100,100"
                    strokeLinecap="round"
                    fill="none"
                    cx="16.91549431"
                    cy="16.91549431"
                    r="15.91549431"
                />
            )}
        </svg>
    );
};
