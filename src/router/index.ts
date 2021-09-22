import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts/:title",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
