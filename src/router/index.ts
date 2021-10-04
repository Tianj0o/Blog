import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";
import About from "@/views/About.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    meta: {
      transition: "to-home",
    },
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:title",
    component: Post,
    meta: {
      transition: "to-post",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.afterEach(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
export default router;
