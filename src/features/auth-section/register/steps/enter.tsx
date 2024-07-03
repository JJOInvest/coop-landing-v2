import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { login } from '@/api/auth';
import { Button } from '@/components/button';
import { authContext } from '@/features/auth-section/auth-context';
import { Switcher } from '@/features/auth-section/switcher';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

export const Enter = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState } = useForm<FormData>({
        reValidateMode: 'onChange',
        resolver: zodResolver(schema),
    });
    const { setEmail, setPassword, setCodeRepeatAt, nextStep } = useContext(authContext);

    const onSubmit = async (data: FormData) => {
        const res = await login(data);
        setEmail(data.email);
        setPassword(data.password);
        setCodeRepeatAt(new Date(res.data.code_repeat_at));
        nextStep();
    };

    return (
        <div>
            <Switcher />

            <form
                className={'px-8 lg:px-16 py-6 lg:py-10 w-full flex flex-col'}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={'flex flex-col gap-5'}>
                    <label className={'flex flex-col gap-1.5'}>
                        <span className={'text-grey-100 font-light text-sm'}>
                            {t('auth.form.email')}
                        </span>
                        <input
                            className={
                                'border-grey-70 border-[1px] rounded-lg h-12 text-[16px]/normal font-light px-4'
                            }
                            {...register('email')}
                        />
                    </label>

                    <label className={'flex flex-col gap-1.5'}>
                        <span className={'text-grey-100 font-light text-sm'}>
                            {t('auth.form.password')}
                        </span>
                        <input
                            className={
                                'border-grey-70 border-[1px] rounded-lg h-12 text-[16px]/normal font-light px-4'
                            }
                            {...register('password')}
                        />
                    </label>
                </div>

                <Button className={'mt-10'} block disabled={!formState.isValid} type={'submit'}>
                    {t('auth.form.button')}
                </Button>

                {/*<button className={'mt-5 mx-auto text-grey-100 text-sm font-light'}>*/}
                {/*    {t('auth.form.forgot-password')}*/}
                {/*</button>*/}
            </form>
        </div>
    );
};
