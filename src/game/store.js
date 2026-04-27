import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { layers } from "./data";

const initialPlayer = {
  xp: 0,
  accuracy: 100,
  latency: 0,
  integrity: 100,
};

const initialProgress = {
  currentLayer: 1,
  currentTopic: 0,
};

// 🏁 Per-layer set of completed topic indexes (1-based to match currentTopic).
// Shape: { [layerId: number]: number[] }  e.g. { 1: [1, 2], 2: [1] }
const initialCompletedTopics = {};

// Helper: add `topicIndex` to the completed list for `layerId` without duplicates.
const addCompleted = (completed, layerId, topicIndex) => {
  if (!topicIndex || topicIndex < 1) return completed;
  const existing = completed[layerId] ?? [];
  if (existing.includes(topicIndex)) return completed;
  return {
    ...completed,
    [layerId]: [...existing, topicIndex].sort((a, b) => a - b),
  };
};

// Helper: pick the next unfinished topic in a layer.
// Returns 0 (layer intro) if no topics are done yet OR all are done.
// Returns the 1-based index of the first missing topic otherwise.
const nextUnfinishedTopic = (completed, layerId) => {
  const layer = layers[layerId - 1];
  if (!layer) return 0;
  const done = completed[layerId] ?? [];
  if (done.length === 0) return 0;
  if (done.length >= layer.topics.length) return 0;
  for (let i = 1; i <= layer.topics.length; i++) {
    if (!done.includes(i)) return i;
  }
  return 0;
};

export const useGameStore = create(
  persist(
    (set) => ({
      // 🎮 Player stats
      player: { ...initialPlayer },

      // 📍 Progression
      progress: { ...initialProgress },

      // ✅ Completed topics, keyed by layer id
      completedTopics: { ...initialCompletedTopics },

      view: "layerIntro", // "layerIntro" | "topicExplanation" | "mission"

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

      // 🚀 Teleport to a specific layer (1-indexed). Resumes at the next
      // unfinished topic if the player has partial progress in that layer,
      // otherwise drops them at the layer intro.
      goToLayer: (layerId) =>
        set((state) => {
          const resumeAt = nextUnfinishedTopic(state.completedTopics, layerId);
          return {
            view: "layerIntro",
            progress: {
              currentLayer: layerId,
              currentTopic: resumeAt,
            },
          };
        }),

      // ✅ Manually mark a topic complete (used by nextStep + available to UI).
      markTopicComplete: (layerId, topicIndex) =>
        set((state) => ({
          completedTopics: addCompleted(
            state.completedTopics,
            layerId,
            topicIndex,
          ),
        })),

      // 🔄 Wipe all saved progress and stats back to defaults.
      resetProgress: () =>
        set(() => ({
          player: { ...initialPlayer },
          progress: { ...initialProgress },
          completedTopics: { ...initialCompletedTopics },
          view: "layerIntro",
        })),

      nextStep: () =>
        set((state) => {
          if (state.view === "layerIntro") {
            return {
              view: "topicExplanation",
              progress: {
                ...state.progress,
                currentTopic: state.progress.currentTopic + 1,
              },
            };
          }
          if (state.view === "topicExplanation") return { view: "mission" };
          if (state.view === "mission") {
            // Finishing a mission completes the current topic.
            const completedTopics = addCompleted(
              state.completedTopics,
              state.progress.currentLayer,
              state.progress.currentTopic,
            );

            if (
              state.progress.currentTopic <
              layers[state.progress.currentLayer - 1].topics.length
            ) {
              return {
                completedTopics,
                view: "topicExplanation",
                progress: {
                  ...state.progress,
                  currentTopic: state.progress.currentTopic + 1,
                },
              };
            } else {
              return {
                completedTopics,
                view: "layerIntro",
                progress: {
                  currentLayer: state.progress.currentLayer + 1,
                  currentTopic: 0,
                },
              };
            }
          }
        }),
    }),
    {
      name: "inside-the-ping:save",
      version: 2,
      storage: createJSONStorage(() => localStorage),
      // Only persist the player's progress + stats, not transient UI state.
      partialize: (state) => ({
        player: state.player,
        progress: state.progress,
        completedTopics: state.completedTopics,
      }),
      migrate: (persistedState, version) => {
        // v1 → v2: introduce the completedTopics map.
        if (version < 2 && persistedState && !persistedState.completedTopics) {
          persistedState.completedTopics = {};
        }
        return persistedState;
      },
    },
  ),
);
