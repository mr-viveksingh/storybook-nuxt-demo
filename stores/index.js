import { defineStore, acceptHMRUpdate } from "pinia";
export const globalStore = defineStore({
  id: "global",

  state: () => ({
    appName: "",
  }),

  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(globalStore, import.meta.hot));
}
