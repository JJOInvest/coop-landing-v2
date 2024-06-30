'use client';

import { createContext, PropsWithChildren, useState } from 'react';

export interface MobileHeaderContext {
    isOpened: boolean;
    openOrClose: () => void;
}

export const mobileHeaderContext = createContext<MobileHeaderContext>({
    isOpened: false,
    openOrClose: () => {},
});

export const MobileHeaderContextProvider = ({ children }: PropsWithChildren) => {
    const [isOpened, setIsOpened] = useState(false);
    const openOrClose = () => setIsOpened((isOpened) => !isOpened);

    return (
        <mobileHeaderContext.Provider value={{ isOpened, openOrClose }}>
            {children}
        </mobileHeaderContext.Provider>
    );
};
