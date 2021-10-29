import { createStore } from "vuex";
import { articleInfo } from "./type";
import TR from "@/request/index";
import { getAllPosts } from "@/request/main";
interface RootState {
  articleInfoLists: articleInfo[];
}
const store = createStore<RootState>({
  state: {
    articleInfoLists: [],
  },
  mutations: {
    setAllArticlesTitle(state, titles: articleInfo[]) {
      state.articleInfoLists = titles;
      localStorage.articleInfoLists = JSON.stringify(titles);
    },
  },
  actions: {
    async getAllTitles({ commit }) {
      const data = await getAllPosts();
      commit("setAllArticlesTitle", data.articleInfoLists);
    },
    getLocalTitles({ commit }) {
      const data = localStorage.getItem("articleInfoLists");
      if (data) {
        commit("setAllArticlesTitle", JSON.parse(data));
      }
    },
  },
});

export function setupStore(): void {
  store.dispatch("getLocalTitles");
}
export default store;
