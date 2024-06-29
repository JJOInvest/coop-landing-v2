import Link from 'next/link';

export type Props = {
    href: string;
};

export const SocialMediaIcon = ({ href }: Props) => {
    return <Link href={href}></Link>;
};
