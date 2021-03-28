import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children: [
      {
        path: 'serial-ports',
        name: 'SerialPorts',
        component: () => {
          return import(/* webpackChunkName: "serial-ports" */ '../views/dashboard/serial-ports/SerialPorts.vue');
        },
      },
      {
        path: 'serial-ports/:path',
        name: 'SerialPort',
        component: () => import(/* webpackChunkName: "serial-port" */ '../views/dashboard/serial-ports/SerialPort.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
