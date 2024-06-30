import Link from 'next/link';

interface Props {
    href: string;
}

export const SocialMediaIcon = ({ href }: Props) => {
    return <Link href={href}></Link>;
};
