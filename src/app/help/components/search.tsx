'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import CrossIcon from '@/assets/icons/cross.svg';
import SearchIcon from '@/assets/icons/search.svg';
import { Button } from '@/components/button';

interface FormData {
    query: string;
}

export const Search = () => {
    const { t } = useTranslation();
    const { register, handleSubmit } = useForm<FormData>();
    const router = useRouter();

    const onSubmit = (data: FormData) => {
        const params = new URLSearchParams();
        params.set('query', data.query);
        router.push(`/help/search/${params.toString()}`);
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
                    placeholder={t('help.search.label')}
                    {...register('query')}
                />
                <button type="reset">
                    <Image src={CrossIcon} alt="cross" className="hidden lg:block cursor-pointer" />
                </button>
            </div>

            <div className="bg-black">
                <Button className="px-5 hover:text-white">{t('help.search.button')}</Button>
            </div>
        </form>
    );
};
