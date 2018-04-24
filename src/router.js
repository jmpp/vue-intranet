import VueRouter from 'vue-router'

import Home from '@/views/Home'
import ListUser from '@/views/ListUser'
import AddUser from '@/views/AddUser'
import EditUser from '@/views/EditUser'

const routes = [
  { name : 'home', path : '/', component : Home },
  { name : 'list', path : '/list', component : ListUser },
  { name : 'add', path : '/add', component : AddUser },
  { name : 'edit', path : '/edit/:id', component : EditUser }
];

const router = new VueRouter({
  routes
});

export default router
