import { create } from 'zustand';

interface CursorState {
  position: { x: number; y: number };
  variant: 'default' | 'hover' | 'click';
  setPosition: (x: number, y: number) => void;
  setVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  position: { x: 0, y: 0 },
  variant: 'default',
  setPosition: (x, y) => set({ position: { x, y } }),
  setVariant: (variant) => set({ variant }),
}));