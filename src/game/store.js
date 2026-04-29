import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { layers } from "./data";

const initialStats = {
  xp: 0,
  latency: 20,
  totalAttempts: 0,
  totalCorrect: 0,
  accuracy: 100,
};

const initialProgress = {
  currentLayer: 1,
  currentTopic: 0,
};

// ✅ Array-based structure
// [
//   [1,2,3], // layer 1
//   [1],     // layer 2
// ]
const initialCompletedTopics = [[]];

// ✅ Safe helper (no holes, no duplicates)
const addCompleted = (completed, layerId, topicIndex) => {
  const newCompleted = [...completed];

  if (!newCompleted[layerId - 1]) {
    newCompleted[layerId - 1] = [];
  }

  if (!newCompleted[layerId - 1].includes(topicIndex)) {
    newCompleted[layerId - 1].push(topicIndex);
  }

  return newCompleted;
};

export const useGameStore = create(
  persist(
    (set) => ({
      stats: { ...initialStats },
      progress: { ...initialProgress },
      completedTopics: [...initialCompletedTopics],

      view: "layerIntro",

      updateStats: (tries) =>
        set((state) => {
          let { xp, latency, totalAttempts, totalCorrect } = state.stats;

          // XP
          if (tries === 1) xp += 10;
          else if (tries === 2) xp += 5;
          else if (tries === 3) xp += 1;

          // Accuracy
          totalAttempts += tries;
          totalCorrect += 1;
          const accuracy = (totalCorrect / totalAttempts) * 100;

          // Latency
          latency += (tries - 1) * 5;

          if (tries === 1) {
            latency = Math.max(20, latency - 5);
          }
          console.log("Updated stats:", { xp, latency, totalAttempts, totalCorrect, accuracy });

          return {
            stats: {
              xp,
              latency,
              totalAttempts,
              totalCorrect,
              accuracy,
            },
          };
        }),

      setView: (view) => set({ view }),

      // 🔒 Only allow going to unlocked (past) layers
      goToLayer: (layerId) =>
        set((state) => {
          const maxUnlockedLayer = state.completedTopics.length;

          if (layerId > maxUnlockedLayer) return state;

          return {
            view: "layerIntro",
            progress: {
              currentLayer: layerId,
              currentTopic: 0,
            },
          };
        }),

      markTopicComplete: (layerId, topicIndex) =>
        set((state) => ({
          completedTopics: addCompleted(
            state.completedTopics,
            layerId,
            topicIndex,
          ),
        })),

      resetProgress: () =>
        set(() => ({
          stats: { ...initialStats },
          progress: { ...initialProgress },
          completedTopics: [],
          view: "layerIntro",
        })),

      // 🚀 Core progression logic
      nextStep: () =>
        set((state) => {
          const { currentLayer, currentTopic } = state.progress;
          const layer = layers[currentLayer - 1];

          if (!layer) return state;

          // 1️⃣ Intro → first topic
          if (state.view === "layerIntro") {
            return {
              view: "topicExplanation",
              progress: {
                currentLayer,
                currentTopic: 1,
              },
            };
          }

          // 2️⃣ Explanation → mission
          if (state.view === "topicExplanation") {
            return { view: "mission" };
          }

          // 3️⃣ Mission → validate progress
          if (state.view === "mission") {
            const updatedCompleted = addCompleted(
              state.completedTopics,
              currentLayer,
              currentTopic,
            );

            const isLastTopic = currentTopic >= layer.topics.length;

            // 🔁 Next topic
            if (!isLastTopic) {
              return {
                completedTopics: updatedCompleted,
                view: "topicExplanation",
                progress: {
                  currentLayer,
                  currentTopic: currentTopic + 1,
                },
              };
            }

            // 🚀 Next layer
            return {
              completedTopics: [...updatedCompleted, []],
              view: "layerIntro",
              progress: {
                currentLayer: currentLayer + 1,
                currentTopic: 0,
              },
            };
          }

          return state;
        }),
    }),
    {
      name: "inside-the-ping:save",
      version: 3,

      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        stats: state.stats,
        progress: state.progress,
        completedTopics: state.completedTopics,
      }),

      // 🔄 Migrate object → array
      migrate: (persistedState, version) => {
        if (version < 3 && persistedState) {
          const old = persistedState.completedTopics || {};
          const newFormat = [];

          Object.entries(old).forEach(([layerId, topics]) => {
            newFormat[layerId - 1] = topics;
          });

          persistedState.completedTopics = newFormat;
        }

        return persistedState;
      },
    },
  ),
);
