// @ts-ignore
import { motion } from 'framer-motion';

import { GetStartedStep } from '@/app/[lng]/main-page/diagram/index';

interface Props {
    step: GetStartedStep;
}

const FIRST_PATH_PREV =
    'M336.038 269.393L411.958 234.321V63.9289H410.625V233.469L336.184 267.857C333.196 265.723 330.003 263.651 326.562 261.666C300.251 246.474 265.807 238.897 231.399 238.897C197.137 238.897 162.839 246.41 136.571 261.474L69.1507 222.546V52.9643H67.8174V223.315L136.57 263.013L136.903 262.82C162.964 247.773 197.164 240.23 231.399 240.23C265.635 240.23 299.835 247.773 325.895 262.82C329.418 264.853 332.678 266.977 335.722 269.166L336.038 269.393Z';
const FIRST_PATH_CURRENT =
    'M336.038 279.393L411.958 244.322V144.929H410.625V243.469L336.184 277.857C333.196 275.723 330.003 273.651 326.562 271.666C300.251 256.474 265.807 248.897 231.399 248.897C197.137 248.897 162.839 256.41 136.571 271.474L69.1507 232.546V133.964H67.8174V233.316L136.57 273.013L136.903 272.821C162.964 257.773 197.164 250.23 231.399 250.23C265.635 250.23 299.835 257.773 325.895 272.821C329.418 274.853 332.678 276.977 335.722 279.166L336.038 279.393Z';
const FIRST_PATH_NEXT =
    'M336.038 264.393L411.958 229.321V94.9289H410.625V228.469L336.184 262.857C333.196 260.723 330.003 258.651 326.562 256.666C300.251 241.474 265.807 233.897 231.399 233.897C197.137 233.897 162.839 241.41 136.571 256.474L69.1507 217.546V83.9643H67.8174V218.315L136.57 258.013L136.903 257.82C162.964 242.773 197.164 235.23 231.399 235.23C265.635 235.23 299.835 242.773 325.895 257.82C329.418 259.853 332.678 261.977 335.722 264.166L336.038 264.393Z';

const SECOND_PATH_PREV = 'M336.778 268.625V97.7817H335.445V268.625H336.778Z';
const SECOND_PATH_CURRENT = 'M336.778 278.626V178.782H335.445V278.626H336.778Z';
const SECOND_PATH_NEXT = 'M336.778 263.625V128.781H335.445V263.625H336.778Z';

const THIRD_PATH_PREV = 'M136.633 262.5V91.0004H135.3V262.5H136.633Z';
const THIRD_PATH_CURRENT = 'M136.633 272.501V173.001H135.3V272.501H136.633Z';
const THIRD_PATH_NEXT = 'M136.633 256.5V122H135.3V256.5H136.633Z';

const FORTH_PATH_PREV =
    'M394.315 52.9679C304.786 1.27351 159.899 1.01794 69.8225 52.2012C69.3749 52.4555 68.9287 52.7111 68.4839 52.9679L136.57 92.2759C188.942 62.0365 273.857 62.0365 326.229 92.2759C329.771 94.3199 333.05 96.4565 336.111 98.6577L411.291 63.9326C410.877 63.6345 410.461 63.3372 410.043 63.0406C405.143 59.5689 399.917 56.2017 394.315 52.9679Z';
const FORTH_PATH_CURRENT =
    'M394.315 133.974C304.786 82.28 159.899 82.0244 69.8225 133.208C69.3749 133.462 68.9287 133.718 68.4839 133.974L136.57 173.282C188.942 143.043 273.857 143.043 326.229 173.282C329.771 175.326 333.05 177.463 336.111 179.664L411.291 144.939C410.877 144.641 410.461 144.344 410.043 144.047C405.143 140.575 399.917 137.208 394.315 133.974Z';
const FORTH_PATH_NEXT =
    'M394.315 83.9679C304.786 32.2735 159.899 32.0179 69.8225 83.2012C69.3749 83.4555 68.9287 83.7111 68.4839 83.9679L136.57 123.276C188.942 93.0365 273.857 93.0365 326.229 123.276C329.771 125.32 333.05 127.456 336.111 129.658L411.291 94.9326C410.877 94.6345 410.461 94.3372 410.043 94.0406C405.143 90.5689 399.917 87.2017 394.315 83.9679Z';

const FIFTH_PATH_PREV =
    'M136.572 90.7376L71.1625 52.9748C115.639 27.9077 173.484 15.3377 231.399 15.3377C290.192 15.3377 348.912 28.2914 393.648 54.1225L394.315 52.9678C304.786 1.27342 159.899 1.01785 69.8225 52.2011C69.3749 52.4554 68.9287 52.711 68.4839 52.9678L136.57 92.2758C188.942 62.0364 273.857 62.0364 326.229 92.2758C329.771 94.3198 333.05 96.4564 336.111 98.6576L411.291 63.9325C410.877 63.6344 410.461 63.3371 410.043 63.0405C405.143 59.5688 399.917 56.2016 394.315 52.9678L393.648 54.1225C398.976 57.1977 403.96 60.394 408.645 63.6861L336.255 97.1223C333.342 95.0558 330.234 93.0477 326.895 91.121C300.459 75.8568 265.893 68.263 231.399 68.263C197.196 68.263 162.921 75.7297 136.572 90.7376Z';
const FIFTH_PATH_CURRENT =
    'M136.572 171.744L71.1625 133.981C115.639 108.914 173.484 96.3443 231.399 96.3443C290.192 96.3443 348.912 109.298 393.648 135.129L394.315 133.974C304.786 82.28 159.899 82.0244 69.8225 133.208C69.3749 133.462 68.9287 133.718 68.4839 133.974L136.57 173.282C188.942 143.043 273.857 143.043 326.229 173.282C329.771 175.326 333.05 177.463 336.111 179.664L411.291 144.939C410.877 144.641 410.461 144.344 410.043 144.047C405.143 140.575 399.917 137.208 394.315 133.974L393.648 135.129C398.976 138.204 403.96 141.401 408.645 144.693L336.255 178.129C333.342 176.062 330.234 174.054 326.895 172.128C300.459 156.863 265.893 149.27 231.399 149.27C197.196 149.27 162.921 156.736 136.572 171.744Z';
const FIFTH_PATH_NEXT =
    'M136.572 121.733L71.1626 83.9704C115.64 58.9033 173.484 46.3333 231.399 46.3333C290.192 46.3333 348.912 59.287 393.648 85.1181L394.315 83.9635C304.786 32.269 159.899 32.0135 69.8226 83.1967C69.375 83.451 68.9288 83.7066 68.484 83.9635L136.57 123.271C188.942 93.032 273.857 93.032 326.229 123.271C329.771 125.315 333.05 127.452 336.111 129.653L411.291 94.9281C410.878 94.63 410.461 94.3327 410.043 94.0361C405.143 90.5644 399.917 87.1972 394.315 83.9635L393.648 85.1181C398.976 88.1933 403.96 91.3896 408.645 94.6817L336.256 128.118C333.342 126.051 330.234 124.043 326.895 122.117C300.459 106.852 265.893 99.2586 231.399 99.2586C197.196 99.2586 162.921 106.725 136.572 121.733Z';

export const SecondStep = ({ step }: Props) => {
    let firstPathCurrent = FIRST_PATH_CURRENT;
    let firstPathCurrentNext = FIRST_PATH_NEXT;

    let secondPathCurrent = SECOND_PATH_CURRENT;
    let secondPathNext = SECOND_PATH_NEXT;

    let thirdPathCurrent = THIRD_PATH_CURRENT;
    let thirdPathNext = THIRD_PATH_NEXT;

    let forthPathCurrent = FORTH_PATH_CURRENT;
    let forthPathNext = FORTH_PATH_NEXT;

    let fifthPathCurrent = FIFTH_PATH_CURRENT;
    let fifthPathNext = FIFTH_PATH_NEXT;

    if (step === 'invest') {
        firstPathCurrent = FIRST_PATH_NEXT;
        firstPathCurrentNext = FIRST_PATH_PREV;

        secondPathCurrent = SECOND_PATH_NEXT;
        secondPathNext = SECOND_PATH_PREV;

        thirdPathCurrent = THIRD_PATH_NEXT;
        thirdPathNext = THIRD_PATH_PREV;

        forthPathCurrent = FORTH_PATH_NEXT;
        forthPathNext = FORTH_PATH_PREV;

        fifthPathCurrent = FIFTH_PATH_NEXT;
        fifthPathNext = FIFTH_PATH_PREV;
    } else if (step === 'plan-your-future') {
        firstPathCurrent = FIFTH_PATH_PREV;
        firstPathCurrentNext = FIRST_PATH_CURRENT;

        secondPathCurrent = SECOND_PATH_PREV;
        secondPathNext = SECOND_PATH_CURRENT;

        thirdPathCurrent = THIRD_PATH_PREV;
        thirdPathNext = THIRD_PATH_CURRENT;

        forthPathCurrent = FORTH_PATH_PREV;
        forthPathNext = FORTH_PATH_CURRENT;

        fifthPathCurrent = FIFTH_PATH_PREV;
        fifthPathNext = FIFTH_PATH_CURRENT;
    }

    return (
        <>
            <motion.path
                animate={{
                    d: firstPathCurrent,
                }}
                clipRule="evenodd"
                fill="black"
                fillRule="evenodd"
                transition={{ duration: 0.4, to: firstPathCurrentNext }}
            />
            <motion.path
                animate={{
                    d: secondPathCurrent,
                }}
                clipRule="evenodd"
                fill="black"
                fillRule="evenodd"
                transition={{ duration: 0.4, to: secondPathNext }}
            />
            <motion.path
                animate={{
                    d: thirdPathCurrent,
                }}
                clipRule="evenodd"
                fill="black"
                fillRule="evenodd"
                transition={{ duration: 0.4, to: thirdPathNext }}
            />
            <svg>
                <defs>
                    <linearGradient
                        id="paint2_linear_13810_45121"
                        x1="28"
                        y1="0.999996"
                        x2="263"
                        y2="228"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF7F57" />
                        <stop offset="1" stopColor="#D8575F" />
                    </linearGradient>
                </defs>
                <motion.path
                    animate={{
                        d: forthPathCurrent,
                    }}
                    clipRule="evenodd"
                    fill={step === 'invest' ? 'url(#paint2_linear_13810_45121)' : '#F8F8F8'}
                    fillRule="evenodd"
                    transition={{ duration: 0.4, to: forthPathNext }}
                />
            </svg>
            <motion.path
                animate={{
                    d: fifthPathCurrent,
                    to: fifthPathNext,
                }}
                clipRule="evenodd"
                fill="black"
                fillRule="evenodd"
                transition={{ duration: 0.4, to: fifthPathNext }}
            />
        </>
    );
};
