import { create } from "zustand";

interface TriggerAnimateState {
  isAnimateDamageFighterUp: boolean;
  isAnimateDamageFighterDown: boolean;
  isAnimateDamageBossOne: boolean;
  isAnimateDamageBossTwo: boolean;
  isAnimateMineralOne: boolean;
  isAnimateMineralTwo: boolean;
  isAnimateBuyWorkerOne: boolean;
  isAnimateBuyWorkerTwo: boolean;
  isAnimateBuyUnitOne: boolean;
  isAnimateBuyUnitTwo: boolean;
  unitIdOne: number;
  unitIdTwo: number;
  setAnimateDamageFighterUp: () => void;
  setAnimateDamageFighterDown: () => void;
  setAnimateDamageBossOne: () => void;
  setAnimateDamageBossTwo: () => void;
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
  isAnimateDamageBossOne: false,
  isAnimateDamageBossTwo: false,
  isAnimateMineralOne: false,
  isAnimateMineralTwo: false,
  isAnimateBuyWorkerOne: false,
  isAnimateBuyWorkerTwo: false,
  isAnimateBuyUnitOne: false,
  isAnimateBuyUnitTwo: false,
  unitIdOne: 0,
  unitIdTwo: 0,
  setAnimateDamageFighterUp: () => {
    set({ isAnimateDamageFighterUp: true });
    setTimeout(() => set({ isAnimateDamageFighterUp: false }), 3000);
  },
  setAnimateDamageFighterDown: () => {
    set({ isAnimateDamageFighterDown: true });
    setTimeout(() => set({ isAnimateDamageFighterDown: false }), 3000);
  },
  setAnimateDamageBossOne: () => {
    set({ isAnimateDamageBossOne: true });
    setTimeout(() => set({ isAnimateDamageBossOne: false }), 3000);
  },
  setAnimateDamageBossTwo: () => {
    set({ isAnimateDamageBossTwo: true });
    setTimeout(() => set({ isAnimateDamageBossTwo: false }), 3000);
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
