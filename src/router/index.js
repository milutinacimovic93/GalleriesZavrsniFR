import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Galleries from '../components/Galleries.vue'
import Gallerie from '../components/Gallerie.vue'
import Author from '../components/Author.vue'
import MyGallerie from "../components/MyGallerie.vue";
import { globalAuthGuard } from '../guards/authGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/galleries'
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { guestRequired: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guestRequired: true },
  },
  {
    path: '/galleries',
    name: 'Galleries',
    component: Galleries,
  },
  {
    path: '/galleries/:id',
    name: 'Gallerie',
    component: Gallerie,
    props: true
  },
  {
    path: "/authors/:id",
    component: Author,
    name: "author",
    props: true,
  },
  {
    path: "/myGalleries",
    component: MyGallerie,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(globalAuthGuard);
export default router