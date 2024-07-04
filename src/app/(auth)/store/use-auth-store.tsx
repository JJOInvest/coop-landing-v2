import { create } from 'zustand';

const authInitialState: AuthData = {
    email: '',
    password: '',
};

const pinCodeInitialState: PinCodeData = {
    code: '',
};

const stepInitialState: StepData = {
    step: 'reset-done',
};

export const useAuthStore = create<State<AuthData>>((set) => ({
    data: authInitialState,
    setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
    resetData: () => set({ data: authInitialState }),
}));

export const usePinCodeStore = create<State<PinCodeData>>((set) => ({
    data: pinCodeInitialState,
    setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
    resetData: () => set({ data: pinCodeInitialState }),
}));

export const useStepStore = create<State<StepData>>((set) => ({
    data: stepInitialState,
    setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
    resetData: () => set({ data: stepInitialState }),
}));

type Step =
    | 'login-confirm'
    | 'register-confirm'
    | 'register-finish'
    | 'reset-confirm'
    | 'reset-finish'
    | 'reset-done';

interface AuthData {
    email: string;
    password: string;
}

interface PinCodeData {
    code: string;
}

interface StepData {
    step: Step | null;
}

interface State<T> {
    data: T;
    setData: (data: Partial<T>) => void;
    resetData: () => void;
}
