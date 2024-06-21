import { FC, HTMLProps } from 'react';

export interface Props extends HTMLProps<SVGSVGElement> {}

export const HeroIconM: FC<Props> = ({ ...props }) => {
    return (
        <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_13787_29419)">
                <g filter="url(#filter0_f_13787_29419)">
                    <path
                        opacity="0.3"
                        d="M56.625 30C56.625 44.705 44.705 56.625 30 56.625C15.295 56.625 3.375 44.705 3.375 30C3.375 15.295 15.295 3.375 30 3.375C44.705 3.375 56.625 15.295 56.625 30Z"
                        stroke="black"
                    />
                    <path
                        d="M17.7452 22.5611V38.16H15V17.25L29.4996 27.7453V38.16H26.7544V29.0836L17.7452 22.5611ZM33.117 29.0836V38.16H30.3719V27.7453L44.8715 17.25V38.16H42.1262V22.5611L33.117 29.0836Z"
                        fill="black"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_13787_29419"
                    x="-1.125"
                    y="-1.125"
                    width="62.25"
                    height="62.25"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_13787_29419" />
                </filter>
                <clipPath id="clip0_13787_29419">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
