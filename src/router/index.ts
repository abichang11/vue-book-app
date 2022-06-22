import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UserLogin from "../views/UserLogin.vue";
import UserRegister from "../views/UserRegister.vue";
import SearchBook from "../views/SearchBook.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SearchBook',
    component: SearchBook
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
