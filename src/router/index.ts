import Vue from "vue";
import VueRouter from "vue-router";
import type { RouteConfig } from "vue-router";
import APP_ROUTE_NAMES from "@/router/routeNames";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: APP_ROUTE_NAMES.HOME.OVERVIEW,
    component: HomeView,
  },
  {
    path: "/about",
    name: APP_ROUTE_NAMES.HOME.ABOUT,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/counter",
    name: APP_ROUTE_NAMES.COUNTER.OVERVIEW,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "counter" */ "../modules/counterExample/views/Counter.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
