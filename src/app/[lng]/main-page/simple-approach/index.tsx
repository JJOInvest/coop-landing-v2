import Image from 'next/image';

import HeroIconFlash from '@/assets/icons/hero-icon-flash.svg';
import HeroIconM from '@/assets/icons/hero-icon-m.svg';
import HeroIconSteps from '@/assets/icons/hero-icon-steps.svg';
import HeroIconUnicorn from '@/assets/icons/hero-icon-unicorn.svg';
import IPhoneEn from '@/assets/simple-approach/iphone-en.png';
import IPhoneRu from '@/assets/simple-approach/iphone-ru.png';
import { Button } from '@/components/button';
import { getServerTranslations } from '@/i18n/server';

import { BlobIcon } from './blob-icon';

export async function SimpleApproach() {
    const { t, i18n } = await getServerTranslations();

    console.log(i18n.language);

    return (
        <section className="pt-20 relative isolate overflow-hidden pb-[170px] lg:py-32">
            <div className="absolute w-[475px] h-[435px] rounded-full bg-blue-400 -z-10 -top-[50px] -right-[160px] lg:top-[140px] lg:-right-[80px] opacity-10 blur-[100px]" />

            <div className="absolute top-[200px] -rotate-[150deg] w-[310px] h-[200px] -z-10 bg-cyan rounded-full -right-[120px] lg:top-[450px] lg:-right-[40px] opacity-15 blur-[100px] lg:opacity-25" />

            <div className="container lg:flex lg:flex-row-reverse lg:items-center gap-32">
                <div className="flex flex-col gap-6 lg:gap-8 lg:ml-auto lg:max-w-[640px]">
                    <h2 className="text-2xl lg:text-5xl/tight font-medium w-full">
                        {t('a_simple_approach')}
                    </h2>
                    <p className="text-[16px]/snug lg:text-lg/normal font-normal w-full lg:max-w-[570px] text-grey-slate">
                        {t('no_special_knowledge')}
                    </p>
                    <Button
                        as="link"
                        href={`/${i18n.language}/invest/33961919663385`}
                        className="mt-2 lg:self-start"
                        arrow
                    >
                        {t('learn_more')}
                    </Button>
                </div>

                <div className="mx-auto mt-[130px] lg:mt-0 flex items-center justify-center relative lg:flex-grow">
                    <Image
                        className="z-10 max-w-[290px]"
                        src={i18n.language === 'ru' ? IPhoneRu : IPhoneEn}
                        alt="iphone"
                    />

                    <div className="absolute w-[290px] h-[585px] bg-blue-900 opacity-15 blur-[20px] -mb-8 -mr-8" />

                    <Image
                        src={HeroIconUnicorn}
                        alt="unicorn"
                        className="absolute -top-[68px] left-0 lg:top-[170px] lg:-left-[130px]"
                    />
                    <Image
                        src={HeroIconFlash}
                        alt="flash"
                        className="absolute -top-[100px] -right-[6px] lg:-right-[120px] lg:-top-[60px] w-12 h-12 lg:w-[72px] lg:h-[72px]"
                    />
                    <Image
                        src={HeroIconM}
                        alt="m"
                        className="absolute -bottom-[40px] left-0 lg:-left-[90px] lg:bottom-[90px]"
                    />
                    <Image
                        src={HeroIconSteps}
                        alt="steps"
                        className="absolute right-0 -bottom-[80px] lg:-bottom-[60px] lg:-right-[80px]"
                    />

                    <BlobIcon />
                </div>
            </div>
        </section>
    );
}
