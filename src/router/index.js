import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../views/dashboard.vue';
import collection from '../views/collection.vue';

const routes = [
  { path: '/', name:'dashboard', component: dashboard },
  { path:'/collection', name:'collection', component: collection },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;