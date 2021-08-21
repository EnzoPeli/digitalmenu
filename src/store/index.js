import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
  },

  getters: {
    search(state) {
      return state.search;
    },
  },

  mutations: {
    updateSearch(state, payload) {
      if (!payload.search) payload.search = "";

      state.search = payload.search;
    },
  },

  plugins: [new VuexPersist().plugin],
});
