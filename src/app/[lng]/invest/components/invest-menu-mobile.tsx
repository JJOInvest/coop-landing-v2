import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { investPages } from '@/app/[lng]/invest/constants';
import { getServerTranslations } from '@/i18n/server';

import StepActive from '../assets/jjo-step-active.svg';
import Step from '../assets/jjo-step.svg';

interface Props {
    id: string;
}

export async function InvestMenuMobile({ id }: Props) {
    const articleId = parseInt(id as any, 10);
    const { t, i18n } = await getServerTranslations();

    return (
        <div className="flex justify-between py-5 border-y border-grey-60 bg-white lg:hidden">
            <div />
            {investPages.map((item, index) => (
                <Link href={`/${i18n.language}/invest/${item.id}`} key={item.id}>
                    <div className="relative">
                        {item.id !== articleId && <Image src={Step} alt="step" />}
                        {item.id === articleId && <Image src={StepActive} alt="step" />}
                        <span
                            className={cn(
                                'absolute inset-0 flex items-center justify-center text-xl font-semibold z-10',
                                {
                                    'text-white': item.id === articleId,
                                },
                            )}
                        >
                            {index + 1}
                        </span>
                    </div>
                </Link>
            ))}
            <div />
        </div>
    );
}
