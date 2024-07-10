'use client';

import cn from 'classnames';
import { useState } from 'react';

import { Question } from '@/api/help';

export type Props = Question;

export const MobileQuestion = ({ name, answer }: Props) => {
    const [isOpened, setIsOpened] = useState(false);
    const toggleOpened = () => setIsOpened((isOpened) => !isOpened);

    return (
        <div className="border-b-[1px] border-black/10 py-4">
            <div className="flex gap-8 justify-between items-center" onClick={toggleOpened}>
                <h5 className="flex-grow text-[16px]/normal">{name}</h5>
                <div className="relative border-black/5 rounded-full border-[1px] min-h-6 min-w-6">
                    <span className="absolute w-2.5 h-[1px] bg-black inset-0 m-auto" />
                    <span
                        className={cn('absolute w-2.5 h-[1px] bg-black inset-0 m-auto', {
                            'rotate-90': !isOpened,
                        })}
                    />
                </div>
            </div>

            {isOpened && <p className="text-black/50 text-[16px]/snug font-light mt-4">{answer}</p>}
        </div>
    );
};
