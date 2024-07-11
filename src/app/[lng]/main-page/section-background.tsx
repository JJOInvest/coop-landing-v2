'use client';

import Image, { StaticImageData } from 'next/image';
import { useMediaMatch } from 'rooks';

interface Props {
    desktop: StaticImageData;
    mobile: StaticImageData;
}

export const SectionBackground = ({ desktop, mobile }: Props) => {
    const isMobile = useMediaMatch('(max-width: 1024px)');

    return (
        <Image
            alt="JJO"
            src={isMobile ? mobile : desktop}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            className="-z-10"
            style={{
                objectFit: 'cover',
            }}
        />
    );
};
