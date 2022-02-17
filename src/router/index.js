import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import ("@/views/Home")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import ("@/views/Dashboard")
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;