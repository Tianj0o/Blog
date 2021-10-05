import { createStore } from "vuex";

import { BASE_URL } from "@/request/config";
import { articleInfo } from "./type";
interface RootState {
  articleInfoLists: articleInfo[];
}
import axios from "axios";
export default createStore<RootState>({
  state: {
    articleInfoLists: [],
  },
  mutations: {
    setAllArticlesTitle(state, titles: articleInfo[]) {
      state.articleInfoLists = titles;
    },
  },
  actions: {
    async getAllTitles({ commit }) {
      const data = await axios.get(`${BASE_URL}/posts`);
      commit("setAllArticlesTitle", data.data.articleInfoLists);
    },
  },
});
