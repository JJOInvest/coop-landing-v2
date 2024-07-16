'use client';

import { useTranslation } from 'react-i18next';

interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
};

interface State {
    data: ModalState;
    toggle: () => void;
}

const baseSrc =
    'https://res.cloudinary.com/jjoapp-io/video/upload/v1627474304/landing/videos/promo/en-US/promo.mp4';

const videos: Record<any, string> = {
    ru: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627548369/landing/videos/promo/ru/promo.mp4',
    fr: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627473240/landing/videos/promo/fr-FR/promo.mp4',
    id: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627476482/landing/videos/promo/id-ID/promo.mp4',
    cn: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627473433/landing/videos/promo/zh-CN/promo.mp4',
    pt: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627549845/landing/videos/promo/pt-BR/promo.mp4',
    hi: 'https://res.cloudinary.com/jjoapp-io/video/upload/v1627549845/landing/videos/promo/hi-IN/promo.mp4',
};

export const PromoVideo = () => {
    const { i18n } = useTranslation();

    const videoSrc = videos[i18n.language] || baseSrc;

    return (
        <dialog id="promoModal" className="modal">
            <div className="modal-box max-w-[992px]">
                <video autoPlay muted loop controls={false} playsInline src={videoSrc} />
            </div>
            <form method="dialog" className="modal-backdrop"></form>
        </dialog>
    );
};
