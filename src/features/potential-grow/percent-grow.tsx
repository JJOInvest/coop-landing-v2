import Image from 'next/image';

import JJO from '@/assets/jjo.svg';

export const PercentGrow = () => {
    return (
        <div
            className={
                'my-6 py-2 px-4 text-[16px] font-bold bg-opacity-20 bg-white text-white flex gap-2 rounded-md justify-center self-center'
            }
        >
            <Image src={JJO} alt={"j'jo"} />
            <span>+212 %</span>
        </div>
    );
};
