'use client';

import Image, { StaticImageData } from 'next/image';
import { useMediaMatch } from 'rooks';

interface Props {
    desktop: StaticImageData;
    mobile: StaticImageData;
    className?: string;
}

export const ResponseImage = ({ desktop, mobile, className }: Props) => {
    const isMobile = useMediaMatch('(max-width: 1024px)');

    return <Image alt="" src={isMobile ? mobile : desktop} className={className} />;
};
