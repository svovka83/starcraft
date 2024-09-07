import { create } from "zustand";

interface TriggerAnimateState {
  isAnimateDamageFighterUp: boolean;
  isAnimateDamageFighterDown: boolean;
  isAnimateBossOne: boolean;
  isAnimateBossTwo: boolean;
  isAnimateMineralOne: boolean;
  isAnimateMineralTwo: boolean;
  isAnimateBuyWorkerOne: boolean;
  isAnimateBuyWorkerTwo: boolean;
  isAnimateBuyUnitOne: boolean;
  isAnimateBuyUnitTwo: boolean;
  unitIdOne: number;
  unitIdTwo: number;
  setIsAnimateDamageFighterUp: () => void;
  setIsAnimateDamageFighterDown: () => void;
  setAnimateBossOne: () => void;
  setAnimateBossTwo: () => void;
  setAnimateMineralOne: () => void;
  setAnimateMineralTwo: () => void;
  setAnimateBuyWorkerOne: () => void;
  setAnimateBuyWorkerTwo: () => void;
  setAnimateBuyUnitOne: (unitId: number) => void;
  setAnimateBuyUnitTwo: (unitId: number) => void;
}

export const useTriggerAnimate = create<TriggerAnimateState>((set) => ({
  isAnimateDamageFighterUp: false,
  isAnimateDamageFighterDown: false,
  isAnimateBossOne: false,
  isAnimateBossTwo: false,
  isAnimateMineralOne: false,
  isAnimateMineralTwo: false,
  isAnimateBuyWorkerOne: false,
  isAnimateBuyWorkerTwo: false,
  isAnimateBuyUnitOne: false,
  isAnimateBuyUnitTwo: false,
  unitIdOne: 0,
  unitIdTwo: 0,
  setIsAnimateDamageFighterUp: () => {
    set({ isAnimateDamageFighterUp: true });
    setTimeout(() => set({ isAnimateDamageFighterUp: false }), 3000);
  },
  setIsAnimateDamageFighterDown: () => {
    set({ isAnimateDamageFighterDown: true });
    setTimeout(() => set({ isAnimateDamageFighterDown: false }), 3000);
  },
  setAnimateBossOne: () => {
    set({ isAnimateBossOne: true });
    setTimeout(() => set({ isAnimateBossOne: false }), 3000);
  },
  setAnimateBossTwo: () => {
    set({ isAnimateBossTwo: true });
    setTimeout(() => set({ isAnimateBossTwo: false }), 3000);
  },
  setAnimateMineralOne: () => {
    set({ isAnimateMineralOne: true });
    setTimeout(() => set({ isAnimateMineralOne: false }), 3000);
  },
  setAnimateMineralTwo: () => {
    set({ isAnimateMineralTwo: true });
    setTimeout(() => set({ isAnimateMineralTwo: false }), 3000);
  },
  setAnimateBuyWorkerOne: () => {
    set({ isAnimateBuyWorkerOne: true });
    setTimeout(() => set({ isAnimateBuyWorkerOne: false }), 3000);
  },
  setAnimateBuyWorkerTwo: () => {
    set({ isAnimateBuyWorkerTwo: true });
    setTimeout(() => set({ isAnimateBuyWorkerTwo: false }), 3000);
  },
  setAnimateBuyUnitOne: (unitId: number) => {
    set({ isAnimateBuyUnitOne: true, unitIdOne: unitId });
    setTimeout(() => set({ isAnimateBuyUnitOne: false }), 3000);
  },
  setAnimateBuyUnitTwo: (unitId: number) => {
    set({ isAnimateBuyUnitTwo: true, unitIdTwo: unitId });
    setTimeout(() => set({ isAnimateBuyUnitTwo: false }), 3000);
  },
}));
