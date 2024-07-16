'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import CrossIcon from '@/assets/icons/cross.svg';

const baseSrc =
    'https://res.cloudinary.com/jjoapp-io/video/upload/v1627474304/landing/videos/promo/en-US/promo.mp4';

const videos: Record<string, string> = {
    ru: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627548369/landing/videos/promo/ru/promo.mp4',
    fr: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627473240/landing/videos/promo/fr-FR/promo.mp4',
    id: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627476482/landing/videos/promo/id-ID/promo.mp4',
    cn: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627473433/landing/videos/promo/zh-CN/promo.mp4',
    pt: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627549845/landing/videos/promo/pt-BR/promo.mp4',
    hi: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627549845/landing/videos/promo/hi-IN/promo.mp4',
};

export const PromoVideo = () => {
    const { i18n } = useTranslation();
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoSrc = videos[i18n.language] || baseSrc;

    const handleClose = () => {
        const modal = document.getElementById('promoModal') as HTMLDialogElement;
        modal.close();
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <dialog id="promoModal" className="modal">
            <div className="modal-box max-w-[992px]">
                <video ref={videoRef} autoPlay muted loop controls playsInline src={videoSrc} />
                <button onClick={handleClose}>
                    <Image src={CrossIcon} alt="cross" className="absolute top-2 right-2 w-4 h-4" />
                </button>
            </div>
            <form method="dialog" className="modal-backdrop"></form>
        </dialog>
    );
};
