import { HTMLProps } from 'react';

export interface Props extends HTMLProps<SVGSVGElement> {}

export const HeroIconFlash = ({ ...props }: Props) => {
    return (
        <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_13787_29426)">
                <g filter="url(#filter0_f_13787_29426)">
                    <path
                        opacity="0.3"
                        d="M67.5 36C67.5 53.3975 53.3975 67.5 36 67.5C18.6025 67.5 4.5 53.3975 4.5 36C4.5 18.6025 18.6025 4.5 36 4.5C53.3975 4.5 67.5 18.6025 67.5 36Z"
                        stroke="black"
                    />
                    <path
                        d="M37.9991 43.8695L28.3672 53.5011L25.6205 50.5439L32.2953 43.8695L25.3672 36.9413L28.3243 33.9842L37.9991 43.8695ZM43.6175 38.3353L46.5747 35.3784L39.6458 28.4502L46.3204 21.7755L43.5744 18.8184L33.9004 28.4502L43.6175 38.3353ZM29.5494 32.8436L39.2656 42.7289L42.2227 39.7725L32.5065 30.0554L29.5494 32.8436Z"
                        fill="black"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_13787_29426"
                    x="-1"
                    y="-1"
                    width="74"
                    height="74"
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
                    <feGaussianBlur
                        stdDeviation="2.5"
                        result="effect1_foregroundBlur_13787_29426"
                    />
                </filter>
                <clipPath id="clip0_13787_29426">
                    <rect width="72" height="72" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
