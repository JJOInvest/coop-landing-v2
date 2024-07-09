import cn from 'classnames';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';

import { Question } from '@/api/help';
import ArrowRight from '@/assets/icons/arrow-right.svg';
import { getServerTranslations } from '@/i18n/server';

export type Props = Question & {
    isLast: boolean;
};

dayjs.extend(relativeTime);

export const CategoryQuestion = async ({ id, name, updatedAt, isLast }: Props) => {
    const { i18n } = await getServerTranslations();
    dayjs.locale(i18n.language);
    const updateText = `Обн. ${dayjs(updatedAt).fromNow()}`;

    return (
        <Link
            href={`/help?questionId=${id}`}
            className={cn('py-3', {
                'border-b-[1px] border-black/10': !isLast,
            })}
        >
            <div className="flex items-center gap-8 justify-between">
                <h6>{name}</h6>
                <div className="flex items-center gap-10">
                    <div className="hidden lg:block text-xs font-light text-black/20">
                        {updateText}
                    </div>

                    <div className="rounded-full flex items-center justify-center w-6 h-6 border-neutral-300 border-[1px]">
                        <Image src={ArrowRight} alt="" className="w-4" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
