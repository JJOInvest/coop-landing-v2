'use client';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

interface Props {
    password: string;
}

export const PasswordNote = ({ password }: Props) => {
    const { t } = useTranslation();

    const hasNumber = /\d/.test(password);
    const hasLetter = /\.*[a-z].*/u.test(password);
    const hasUpperLetter = /\.*[A-Z].*/u.test(password);
    const hasLength = password.replace(/ /g, '').length >= 12;
    const hasSpecial = /^(?=.*[!@#$%^&*()_+\-={}:|";'?,<>`~±§]).*$/.test(password);

    return (
        <div className="text-black-80">
            <div className={cn([hasLength && 'text-green-500'])}>
                • {t('at_least_12_characters')}.
            </div>
            <div className={cn([hasLetter && hasUpperLetter && 'text-green-500'])}>
                • {t('one_upper_lower_case')}.
            </div>
            <div className={cn([hasNumber && 'text-green-500'])}>• {t('one_digit')}.</div>
            <div className={cn([hasSpecial && 'text-green-500'])}>• {t('special_character')}.</div>
        </div>
    );
};
