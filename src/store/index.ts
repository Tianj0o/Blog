import { createStore } from "vuex";

import { BASE_URL } from "@/request/config";
interface RootState {
  allArticlesTitle: string[];
}
import axios from "axios";
export default createStore<RootState>({
  state: {
    allArticlesTitle: [],
  },
  mutations: {
    setAllArticlesTitle(state, titles: string[]) {
      state.allArticlesTitle = titles;
    },
  },
  actions: {
    async getAllTitles({ commit }) {
      // const data = await axios.get("/api/posts");
      const data = await axios.get(`${BASE_URL}/posts`);
      commit("setAllArticlesTitle", data.data.articleLists);
    },
  },
});
