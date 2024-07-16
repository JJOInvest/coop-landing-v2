'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';

import CrossIcon from './assets/cross.svg';

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

interface Props {
    open: boolean;
    onRequestClose: () => void;
}

export const PromoVideo = ({ open, onRequestClose }: Props) => {
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

    const overlayStyle: React.CSSProperties = {
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 999,
    };

    const contentStyle: React.CSSProperties = {
        height: 0,
        maxWidth: 'min(960px, 100vw)',
        outline: 'none',
        paddingTop: 'min(540px, 56.25%)', // 16:9
        position: 'relative',
        width: '100%',
        border: 'none',
        inset: '0px',
    };

    useEffect(() => {
        if (!open) {
            return;
        }

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [open]);

    return (
        <Modal
            ariaHideApp={false}
            isOpen={open}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
            style={{ overlay: overlayStyle, content: contentStyle }}
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="bg-transparent border-none cursor-pointer outline-none p-0 fixed right-5 top-5 transition-opacity duration-125 ease-out"
            >
                <Image src={CrossIcon} alt="cross" className="lg:w-8 lg:h-8 h-4 w-4" />
            </button>
            <video
                className="bg-black h-full left-0 absolute top-0 w-full"
                controls
                src={videoSrc}
                autoPlay
                playsInline
            />
        </Modal>
    );
};
