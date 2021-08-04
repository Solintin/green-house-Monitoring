import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Login from '../views/Login.vue'
import { auth } from '../firebase';

Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  {
    path: "/settings",
    name: "settings",
    component: Settings,
    meta: {
      requireAuth: true,
    },
  },

  {
    path: "/greenhouse",
    name: "Home",
    component: Home,
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (auth.currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

export default router
