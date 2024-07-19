import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '..components/HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'home', component: AboutView },
  { path: '/projects', name: 'home', component: ProjectsView },
  { path: '/contacts', name: 'home', component: ContactsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router