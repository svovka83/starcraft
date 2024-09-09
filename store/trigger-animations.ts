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
  isAnimateMoveUnitUpOne: number;
  isAnimateMoveUnitUpTwo: number;
  isAnimateMoveUnitUpOneComeback: boolean;
  isAnimateMoveUnitUpTwoComeback: boolean;
  isAnimateMoveUnitDownOne: number;
  isAnimateMoveUnitDownTwo: number;
  isAnimateMoveUnitDownOneComeback: boolean;
  isAnimateMoveUnitDownTwoComeback: boolean;
  isAnimateDamageWorkerOne: boolean;
  isAnimateDamageWorkerTwo: boolean;
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
  setAnimateMoveUnitUpOne: () => void;
  setAnimateMoveUnitUpTwo: () => void;
  setAnimateMoveUnitUpOneComeback: () => void;
  setAnimateMoveUnitUpTwoComeback: () => void;
  setAnimateMoveUnitDownOne: () => void;
  setAnimateMoveUnitDownTwo: () => void;
  setAnimateMoveUnitDownOneComeback: () => void;
  setAnimateMoveUnitDownTwoComeback: () => void;
  setAnimateDamageWorkerOne: () => void;
  setAnimateDamageWorkerTwo: () => void;
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
  isAnimateMoveUnitUpOne: 0,
  isAnimateMoveUnitUpTwo: 0,
  isAnimateMoveUnitUpOneComeback: true,
  isAnimateMoveUnitUpTwoComeback: true,
  isAnimateMoveUnitDownOne: 0,
  isAnimateMoveUnitDownTwo: 0,
  isAnimateMoveUnitDownOneComeback: true,
  isAnimateMoveUnitDownTwoComeback: true,
  isAnimateDamageWorkerOne: false,
  isAnimateDamageWorkerTwo: false,
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
  setAnimateMoveUnitUpOne: () => {
    set((state) => {
      return {
        isAnimateMoveUnitUpOne: state.isAnimateMoveUnitUpOne + 1,
      };
    });
  },
  setAnimateMoveUnitUpTwo: () => {
    set((state) => {
      return {
        isAnimateMoveUnitUpTwo: state.isAnimateMoveUnitUpTwo + 1,
      };
    });
  },
  setAnimateMoveUnitUpOneComeback: () => {
    set({ isAnimateMoveUnitUpOneComeback: false });
    setTimeout(() => set({ isAnimateMoveUnitUpOneComeback: true }), 3000);
  },
  setAnimateMoveUnitUpTwoComeback: () => {
    set({ isAnimateMoveUnitUpTwoComeback: false });
    setTimeout(() => set({ isAnimateMoveUnitUpTwoComeback: true }), 3000);
  },
  setAnimateMoveUnitDownOne: () => {
    set((state) => {
      return {
        isAnimateMoveUnitDownOne: state.isAnimateMoveUnitDownOne + 1,
      };
    });
  },
  setAnimateMoveUnitDownTwo: () => {
    set((state) => {
      return {
        isAnimateMoveUnitDownTwo: state.isAnimateMoveUnitDownTwo + 1,
      };
    });
  },
  setAnimateMoveUnitDownOneComeback: () => {
    set({ isAnimateMoveUnitDownOneComeback: false });
    setTimeout(() => set({ isAnimateMoveUnitDownOneComeback: true }), 3000);
  },
  setAnimateMoveUnitDownTwoComeback: () => {
    set({ isAnimateMoveUnitDownTwoComeback: false });
    setTimeout(() => set({ isAnimateMoveUnitDownTwoComeback: true }), 3000);
  },
  setAnimateDamageWorkerOne: () => {
    set({ isAnimateDamageWorkerOne: true });
    setTimeout(() => set({ isAnimateDamageWorkerOne: false }), 3000);
  },
  setAnimateDamageWorkerTwo: () => {
    set({ isAnimateDamageWorkerTwo: true });
    setTimeout(() => set({ isAnimateDamageWorkerTwo: false }), 3000);
  },
}));
