import { createStore } from "vuex";
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
      const data = await axios.get("/api/posts");
      commit("setAllArticlesTitle", data.data.articleLists);
    },
  },
});
