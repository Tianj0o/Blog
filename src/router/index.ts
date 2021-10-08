import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    meta: {
      transition: "to-home",
    },
  },
  {
    path: "/about",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/posts/:title",
    component: () => import("@/views/Post.vue"),
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
