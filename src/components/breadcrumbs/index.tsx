'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Breadcrumbs = () => {
    const path = usePathname();
    const [pathSegments, setPathSegments] = useState<string[]>([]);

    useEffect(() => {
        if (path) {
            setPathSegments(path.split('/').filter((segment) => segment));
        }
    }, [path]);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = pathSegments.slice(0, index + 1).join('/');
        return {
            '@type': 'ListItem',
            position: index + 1,
            name: decodeURIComponent(segment),
            item: `${process.env.NEXT_PUBLIC_DOMAIN}${href}`,
        };
    });

    const breadcrumbList = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Главная',
                item: `${process.env.NEXT_PUBLIC_DOMAIN}`,
            },
            ...breadcrumbs,
        ],
    };

    console.log(breadcrumbList);

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
                />
            </Head>
        </>
    );
};

export default Breadcrumbs;
