import { create } from 'zustand';

interface MobileMenuState {
    isOpened: boolean;
}

const mobileMenuInitialState: MobileMenuState = {
    isOpened: false,
};

interface State {
    data: MobileMenuState;
    toggleMenu: () => void;
}

export const useMobileMenuStore = create<State>((set) => ({
    data: mobileMenuInitialState,
    toggleMenu: () => set((state) => ({ data: { ...state.data, isOpened: !state.data.isOpened } })),
}));
