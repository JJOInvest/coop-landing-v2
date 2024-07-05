'use client';

import { FirstStep } from './first-step';
import { SecondStep } from './second-step';
import { ThirdStep } from './third-step';

export type GetStartedStep = 'register' | 'invest' | 'plan-your-future';

interface Props {
    step: GetStartedStep;
}

export const Diagram = ({ step }: Props) => {
    return (
        <div
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-anchor=".simple-block__1"
        >
            <div>
                <svg
                    width="462"
                    height="451"
                    viewBox="0 0 462 451"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <SecondStep step={step} />
                    <FirstStep step={step} />
                    <ThirdStep active={step === 'plan-your-future'} />
                </svg>
            </div>
        </div>
    );
};
