'use client';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

interface Props {
    password: string;
}

const items = [
    'must_contain_at_least_characters',
    'one_lowercase_or_uppercase_letter',
    'one_digit',
    'special_character',
];

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
                • {t('password-note.at-least-12-characters')}.
            </div>
            <div className={cn([hasLetter && hasUpperLetter && 'text-green-500'])}>
                • {t('password-note.one-low-and-upper-letter')}.
            </div>
            <div className={cn([hasNumber && 'text-green-500'])}>
                • {t('password-note.one-digit')}.
            </div>
            <div className={cn([hasSpecial && 'text-green-500'])}>
                • {t('password-note.special-characters')}.
            </div>
        </div>
    );
};
