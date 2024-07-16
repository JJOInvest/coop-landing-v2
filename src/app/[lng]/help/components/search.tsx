'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMediaMatch } from 'rooks';

import CrossIcon from '@/assets/icons/cross.svg';
import SearchIcon from '@/assets/icons/search.svg';
import { Button } from '@/components/button';

interface FormData {
    query: string;
}

export const Search = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, watch, resetField } = useForm<FormData>();
    const router = useRouter();
    const [showResetButton, setShowResetButton] = useState(false);

    const queryValue = watch('query', '');

    const isMobile = useMediaMatch('(max-width: 1024px)');

    useEffect(() => {
        setShowResetButton(queryValue !== '');
    }, [queryValue]);

    const onSubmit = (data: FormData) => {
        data.query && router.push(`/help/search/${data.query}`);
    };

    return (
        <form
            className="flex items-center rounded-[10px] bg-white overflow-hidden relative"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex items-center flex-grow px-6 gap-5">
                <Image src={SearchIcon} alt="search" />
                <input
                    type="text"
                    className="w-full placeholder:text-primary-neutral text-black outline-none py-2.5"
                    placeholder={t('find_your_question')}
                    {...register('query')}
                />
                {showResetButton && (
                    <button type="reset" onClick={() => resetField('query')}>
                        <Image
                            src={CrossIcon}
                            alt="cross"
                            className="hidden lg:block cursor-pointer"
                        />
                    </button>
                )}
            </div>

            <div className="bg-black">
                <Button arrow={!isMobile} className="px-5 hover:text-white gap-8">
                    {t('search')}
                </Button>
            </div>
        </form>
    );
};
