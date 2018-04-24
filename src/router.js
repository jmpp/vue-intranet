import VueRouter from 'vue-router'

import Home from '@/views/Home'

const routes = [
  { name : 'home', path : '/', component : Home }
];

const router = new VueRouter({
  routes
});

export default router
