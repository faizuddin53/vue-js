import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserComponent from "../components/User.vue";
import NotFoundComponent from "../components/ NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user/:id",
      // component: UserComponent,
      components: { default: UserComponent, sidebar: NotFoundComponent },
      props: { default: false, sidebar: true}
    },

    // will match everything and put it under `route.params.pathMatch`
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundComponent },
    // will match anything starting with `/user-` and put it under `route.params.afterUser`
    // { path: "/user-:afterUser(.*)", component: UserGeneric },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
