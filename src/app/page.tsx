import { BasePageParams } from '@/types/page';

export default function Home({ params: { lng } }: BasePageParams) {
    return (
        <main>
            <div className="container mx-auto">Hello there!</div>
        </main>
    );
}
