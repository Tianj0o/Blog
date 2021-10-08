import { createStore, Store } from "vuex";
import { BASE_URL } from "@/request/config";
import { articleInfo } from "./type";
interface RootState {
  articleInfoLists: articleInfo[];
}
// export const key: InjectionKey<Store<RootState>> = Symbol();
import axios from "axios";
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
      const data = await axios.get(`${BASE_URL}/posts`);
      commit("setAllArticlesTitle", data.data.articleInfoLists);
    },
    getLocalTitles({ commit }) {
      const data = localStorage.getItem("articleInfoLists");
      if (data) {
        commit("setAllArticlesTitle", JSON.parse(data));
      }
    },
  },
});

export function setupStore() {
  store.dispatch("getLocalTitles");
}
export default store;
