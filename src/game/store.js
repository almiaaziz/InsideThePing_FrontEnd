import { create } from "zustand";
import {layers} from "./data";

export const useGameStore = create((set) => ({
  // 🎮 Player stats
  player: {
    xp: 0,
    accuracy: 100,
    latency: 0,
    integrity: 100,
  },

  // 📍 Progression
  progress: {
    currentLayer: 1,
    currentTopic: 0,
  },

  view: "layerIntro", // layerIntro or "topicExplanation" or "mission"

  // 🎯 Actions
  increaseXP: (amount) =>
    set((state) => ({
      player: {
        ...state.player,
        xp: state.player.xp + amount,
      },
    })),

  decreaseIntegrity: (amount) =>
    set((state) => ({
      player: {
        ...state.player,
        integrity: state.player.integrity - amount,
      },
    })),



  nextTopic: () =>
    set((state) => ({
      progress: {
        currentLayer: state.progress.currentLayer,
        currentTopic: state.progress.currentTopic + 1,
      },
    })),

  nextLayer: () =>
    set((state) => ({
      progress: {
        currentLayer: state.progress.currentLayer + 1,
        currentTopic: 1,
      },
    })),
  setView: (view) => set({ view }),

  nextStep: () =>
    set((state) => {
      if (state.view === "layerIntro") {
        return { 
          view: "topicExplanation",
            progress: {
              ...state.progress,
            currentTopic: state.progress.currentTopic + 1,
        }
      }};
      if (state.view === "topicExplanation") return { view: "mission" };
      if (state.view === "mission") {
        if(state.progress.currentTopic < layers[state.progress.currentLayer - 1].topics.length){
          return {
            view: "topicExplanation",
            progress: {
              ...state.progress,
              currentTopic: state.progress.currentTopic + 1,
            },
          };
        }
        else{
          return {
            view: "layerIntro",
            progress: {
              currentLayer: state.progress.currentLayer + 1,
              currentTopic: 0,
            },
          };
        }

      }
})}));
