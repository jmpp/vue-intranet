import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ListUser from '@/views/ListUser'

const routes = [
  { name : 'home', path : '/', component : Home },
  { name : 'list', path : '/list', component : ListUser }
];

const router = new VueRouter({
  routes
});

export default router
