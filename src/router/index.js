import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TopicPage from '../views/TopicPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, props: true },
  { path: '/:topic', name: 'TopicPage', component: TopicPage, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
