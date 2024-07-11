import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Dashboard from '../views/dashboard.vue';
import Collection from '../views/collection.vue';
import AddPC from '../views/AddPC.vue';
import BrowsePc from '../views/BrowsePc.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/collection', name: 'Collection', component: Collection },
  { path: '/addpc', name: 'AddPC', component: AddPC },
  { path: '/browsepc', name: 'BrowsePC', component: BrowsePc },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;